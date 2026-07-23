import React, { useState, useRef, useEffect } from 'react';
import type { MajorProject } from '../types';
import { 
  Bot, X, Send, Sparkles, 
  Zap, FileText, ChevronRight, RefreshCw
} from 'lucide-react';

interface Props {
  projects: MajorProject[];
  onSelectProject: (project: MajorProject) => void;
  isDarkMode?: boolean;
  lang?: 'zh' | 'en';
}

interface Message {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  matchedProjects?: MajorProject[];
  sources?: { title: string; url: string }[];
}

export const LiteAgentWidget: React.FC<Props> = ({
  projects,
  onSelectProject,
  isDarkMode = false,
  lang = 'zh'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  
  // Internal API Key & Model Config
  const apiKey = localStorage.getItem('agent_api_key') || import.meta.env.VITE_AGENT_API_KEY || '';
  const selectedProvider = (localStorage.getItem('agent_provider') as 'deepseek' | 'kimi') || 'deepseek';
  const [isThinking, setIsThinking] = useState(false);

  // Initial welcome message per user's prompt requirement
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'agent',
      text: lang === 'zh'
        ? '我是wisebot 有什么问题可以直接问我哦！'
        : 'I am wisebot. Feel free to ask me any questions!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Preset Prompts
  const presets = lang === 'zh' ? [
    'Urbis 在哪些项目里担任总规划？',
    '容量超过 200MW 的项目有哪些？',
    'TfNSW 交通局提出了哪些审查意见？',
    'HDR 和 Greenbox 负责了哪些建筑设计？'
  ] : [
    'Which projects were planned by Urbis?',
    'Show all projects over 200MW capacity',
    'What are TfNSW traffic requirements?',
    'Projects designed by HDR or Greenbox?'
  ];

  // Core Smart RAG & Query Processor (Clean text without **)
  const processQuery = async (queryText: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsThinking(true);

    const q = queryText.toLowerCase().trim();
    let matchedProjects: MajorProject[] = [];
    let sources: { title: string; url: string }[] = [];
    let replyText = '';

    // 1. First extract relevant projects from KB for Context RAG
    const consultantNames = ['urbis', 'ethos', 'hdr', 'greenbox', 'ttw', 'slr', 'jacobs', 'biosis', 'willowtree', 'patch', 'mecone', 'arup', 'linesight', 'douglas'];
    const foundConsultant = consultantNames.find(c => q.includes(c));

    if (foundConsultant) {
      matchedProjects = projects.filter(p => 
        p.consultants.some(c => c.companyName.toLowerCase().includes(foundConsultant)) ||
        (p.planningConsultant || '').toLowerCase().includes(foundConsultant) ||
        (p.architect || '').toLowerCase().includes(foundConsultant)
      );
    } else if (q.includes('mw') || q.includes('容量') || q.includes('capacity') || q.includes('规模')) {
      const numbers = q.match(/\d+/g);
      const threshold = numbers ? parseInt(numbers[0]) : 100;
      matchedProjects = projects.filter(p => (p.capacityMW || 0) >= threshold);
    } else {
      matchedProjects = projects.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.applicationNo.toLowerCase().includes(q) ||
        p.applicant.toLowerCase().includes(q) ||
        p.lga.toLowerCase().includes(q) ||
        p.consultants.some(c => c.companyName.toLowerCase().includes(q) || c.role.toLowerCase().includes(q))
      );
    }

    if (matchedProjects.length === 0) {
      matchedProjects = projects.slice(0, 3);
    }

    // Collect source document links
    matchedProjects.slice(0, 3).forEach(p => {
      if (p.appendices.length > 0) {
        sources.push({
          title: `${p.applicationNo} - ${p.appendices[0].title}`,
          url: p.appendices[0].downloadUrl || p.officialUrl
        });
      }
    });

    // 2. Call LLM API (DeepSeek-V3 or Kimi Moonshot) if API Key is configured
    if (apiKey && apiKey.trim().length > 5) {
      try {
        const endpoint = selectedProvider === 'deepseek'
          ? 'https://api.deepseek.com/chat/completions'
          : 'https://api.moonshot.cn/v1/chat/completions';

        const modelName = selectedProvider === 'deepseek' ? 'deepseek-chat' : 'moonshot-v1-8k';

        // Prepare RAG Context
        const contextSummary = matchedProjects.map(p => `
- 项目 [${p.applicationNo}] ${p.name} (LGA: ${p.lga}, 容量: ${p.capacityMW}MW, 申请人: ${p.applicant})
  总规划: ${p.planningConsultant}, 建筑设计: ${p.architect}
  参建咨询公司: ${p.consultants.map(c => `${c.companyName}(${c.role})`).join(', ')}
`).join('\n');

        const systemPrompt = `你叫 wisebot，是一个专业的 NSW 新州数据中心重大项目 Intelligence Agent。请结合给出的项目数据回答用户的问题。
输出格式要求：请使用干净清爽的纯文本回答，禁止在输出中包含任何 ** 加粗符号。若提到具体项目，请包含项目申请编号（如 SSD-xxxxx）。
已知检索相关项目数据：
${contextSummary}`;

        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey.trim()}`
          },
          body: JSON.stringify({
            model: modelName,
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: queryText }
            ],
            temperature: 0.3
          })
        });

        if (res.ok) {
          const data = await res.json();
          if (data.choices && data.choices[0] && data.choices[0].message) {
            replyText = data.choices[0].message.content;
          }
        }
      } catch (err) {
        console.warn('API call fallback to local high-precision KB engine:', err);
      }
    }

    // 3. High-precision Local RAG Fallback (Clean text without **)
    if (!replyText) {
      if (foundConsultant) {
        const companyDisp = foundConsultant.toUpperCase();
        replyText = lang === 'zh'
          ? `根据知识库全量核对，${companyDisp} 参与了 ${matchedProjects.length} 个项目的咨询与设计工作。具体项目清单如下：`
          : `According to DB records, ${companyDisp} is engaged in ${matchedProjects.length} projects. Here is the list:`;
      } else if (q.includes('mw') || q.includes('容量') || q.includes('capacity')) {
        const totalCap = matchedProjects.reduce((sum, p) => sum + (p.capacityMW || 0), 0);
        replyText = lang === 'zh'
          ? `符合条件的重大项目共有 ${matchedProjects.length} 个，累计电力容量 ${totalCap} MW：`
          : `Retrieved ${matchedProjects.length} projects with total capacity ${totalCap} MW:`;
      } else {
        replyText = lang === 'zh'
          ? `为您检索到 ${matchedProjects.length} 个相关的重大项目情报与参建团队数据：`
          : `Retrieved ${matchedProjects.length} relevant projects from database:`;
      }
    }

    // Strictly purge any remaining ** symbols from the reply text
    replyText = replyText.replace(/\*\*/g, '');

    const agentMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'agent',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      matchedProjects: matchedProjects.slice(0, 6),
      sources: sources.slice(0, 3)
    };

    setMessages(prev => [...prev, agentMsg]);
    setIsThinking(false);
  };

  return (
    <>
      {/* Floating Toggle Button (Right Bottom) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2.5 ${
          isOpen
            ? 'bg-slate-800 text-white ring-4 ring-slate-700/50 rotate-90'
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white ring-4 ring-blue-500/30 hover:shadow-blue-500/40 animate-bounce-subtle'
        }`}
        title="Open wisebot AI Assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <div className="relative">
              <Bot className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </div>
            <span className="font-bold text-xs pr-1 hidden sm:inline tracking-wide">
              wisebot
            </span>
          </>
        )}
      </button>

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[440px] h-[580px] max-h-[80vh] rounded-2xl shadow-2xl border flex flex-col overflow-hidden transition-all animate-in fade-in slide-in-from-bottom-6 ${
          isDarkMode 
            ? 'bg-slate-900/95 border-slate-800 text-white backdrop-blur-xl' 
            : 'bg-white/95 border-slate-200 text-slate-900 backdrop-blur-xl shadow-2xl shadow-blue-500/10'
        }`}>
          
          {/* Clean Header (No Model Settings Shown) */}
          <div className={`px-4 py-3.5 border-b flex items-center justify-between gap-3 ${
            isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight">
                  wisebot
                </h3>
                <p className="text-[11px] text-slate-400 font-medium">
                  {lang === 'zh' ? 'NSW 数据中心项目问答助手' : 'NSW SSD AI Assistant'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'agent' && (
                  <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[84%] space-y-2 rounded-2xl p-3.5 ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : isDarkMode 
                      ? 'bg-slate-950/80 border border-slate-800 text-slate-200 rounded-tl-none' 
                      : 'bg-slate-100 border border-slate-200/80 text-slate-800 rounded-tl-none'
                }`}>
                  <p className="leading-relaxed whitespace-pre-wrap font-medium">
                    {msg.text}
                  </p>

                  {/* Render Matched Projects Cards */}
                  {msg.matchedProjects && msg.matchedProjects.length > 0 && (
                    <div className="pt-2 space-y-2 border-t border-slate-700/40 dark:border-slate-800">
                      {msg.matchedProjects.map(p => (
                        <div
                          key={p.id}
                          onClick={() => onSelectProject(p)}
                          className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-2 group ${
                            isDarkMode 
                              ? 'bg-slate-900/90 border-slate-800 hover:border-blue-500/50 hover:bg-slate-800' 
                              : 'bg-white border-slate-200 hover:border-blue-500/50 hover:bg-blue-50/50'
                          }`}
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="px-1.5 py-0.2 text-[10px] font-mono font-bold rounded bg-blue-500/10 text-blue-500">
                                {p.applicationNo}
                              </span>
                              <span className="text-[11px] font-bold truncate text-slate-900 dark:text-white group-hover:text-blue-500">
                                {p.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                              <span><Zap className="w-3 h-3 inline text-amber-500" /> {p.capacityMW}MW</span>
                              <span>• {p.lga}</span>
                              <span className="text-blue-400">({p.planningConsultant})</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 shrink-0" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Render Source Attachment Links */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="pt-2 space-y-1.5 border-t border-slate-700/40">
                      <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                        <FileText className="w-3 h-3 text-blue-400" />
                        {lang === 'zh' ? '依据官方原件:' : 'Source Documents:'}
                      </span>
                      {msg.sources.map((s, idx) => (
                        <a
                          key={idx}
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-[11px] font-mono text-blue-400 hover:underline truncate"
                        >
                          🔗 {s.title}
                        </a>
                      ))}
                    </div>
                  )}

                  <span className="block text-[9px] opacity-60 text-right">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex items-center gap-2 text-slate-400 italic text-xs pl-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-500" />
                <span>{lang === 'zh' ? 'wisebot 正在思考推演中...' : 'wisebot reasoning...'}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Presets / Fast Prompts */}
          <div className={`px-4 py-2 border-t flex items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none ${
            isDarkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
          }`}>
            {presets.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => processQuery(prompt)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium border shrink-0 transition-all ${
                  isDarkMode 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-blue-500/50 hover:text-white' 
                    : 'bg-white border-slate-200 text-slate-700 hover:border-blue-500/50 hover:text-blue-600 shadow-sm'
                }`}
              >
                💡 {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className={`p-3 border-t flex items-center gap-2 ${
            isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && inputQuery.trim() && processQuery(inputQuery)}
              placeholder={lang === 'zh' ? '向 wisebot 提问...' : 'Ask wisebot...'}
              className={`flex-1 px-3.5 py-2 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'
              }`}
            />
            <button
              onClick={() => inputQuery.trim() && processQuery(inputQuery)}
              disabled={!inputQuery.trim()}
              className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white transition-all shadow-md shadow-blue-500/20 shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
