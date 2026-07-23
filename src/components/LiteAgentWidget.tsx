import React, { useState, useRef, useEffect } from 'react';
import type { MajorProject } from '../types';
import { 
  X, Send, Download, 
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

  // Initial welcome message with WiseBot branding
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'agent',
      text: lang === 'zh'
        ? '我是WiseBot 有什么问题可以直接问我哦！'
        : 'I am WiseBot. Feel free to ask me any questions!',
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

  // Export Chat History as TXT File
  const handleExportHistory = () => {
    let exportText = `=========================================\n`;
    exportText += ` WiseBot Chat History (${new Date().toLocaleDateString()})\n`;
    exportText += ` Platform: NSW Data Centre Information Base\n`;
    exportText += `=========================================\n\n`;

    messages.forEach(m => {
      const role = m.sender === 'user' ? 'User' : 'WiseBot';
      exportText += `[${m.timestamp}] ${role}:\n${m.text}\n`;
      if (m.matchedProjects && m.matchedProjects.length > 0) {
        exportText += `Related Projects: ${m.matchedProjects.map(p => `${p.applicationNo} ${p.name}`).join(' | ')}\n`;
      }
      exportText += `-----------------------------------------\n`;
    });

    const blob = new Blob([exportText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `WiseBot_Chat_History_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Core Smart RAG & Dynamic Aggregator Analytics Engine
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

    // 1. Extract exact SSD number match if present
    const ssdMatch = q.match(/ssd[-_]?\d+/i);
    const ssdQuery = ssdMatch ? ssdMatch[0].replace(/[-_]/g, '').toLowerCase() : (q.match(/\d{6,}/) ? q.match(/\d{6,}/)![0] : '');

    // 2. Extract English / Alphanumeric Entity Tokens
    const extractedTokens = q.match(/[a-z0-9]+/g) || [];

    let matchedProjects: MajorProject[] = [];
    let sources: { title: string; url: string }[] = [];
    let replyText = '';

    // Check for Statistical / Ranking Queries (e.g. "哪个咨询公司合作的项目最多", "容量最大")
    const isRankQuery = q.includes('最多') || q.includes('排名') || q.includes('排行') || q.includes('合作') || q.includes('最大') || q.includes('最高');

    if (isRankQuery && (q.includes('咨询') || q.includes('公司') || q.includes('机构') || q.includes('团队') || q.includes('规划') || q.includes('设计') || q.includes('顾问'))) {
      // Aggregate consultant company participation counts dynamically across 478 records
      const companyCountMap: Record<string, { count: number; projects: MajorProject[] }> = {};

      projects.forEach(p => {
        const uniqueFirms = new Set<string>();
        if (p.planningConsultant) uniqueFirms.add(p.planningConsultant.trim());
        if (p.architect) uniqueFirms.add(p.architect.trim());
        p.consultants.forEach(c => uniqueFirms.add(c.companyName.trim()));

        uniqueFirms.forEach(firm => {
          if (firm.length < 2) return;
          if (!companyCountMap[firm]) {
            companyCountMap[firm] = { count: 0, projects: [] };
          }
          companyCountMap[firm].count += 1;
          companyCountMap[firm].projects.push(p);
        });
      });

      const sortedFirms = Object.entries(companyCountMap)
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 5);

      const topFirm = sortedFirms[0];
      matchedProjects = topFirm ? topFirm[1].projects.slice(0, 6) : projects.slice(0, 5);

      replyText = lang === 'zh'
        ? `根据全库 44 个重大数据中心项目的 478 项参建机构全量统计，合作项目最多的咨询与设计机构 Top 5 为：\n\n` +
          sortedFirms.map((f, i) => `${i + 1}. ${f[0]}: 参建 ${f[1].count} 个项目`).join('\n') +
          `\n\n其中，【${topFirm ? topFirm[0] : ''}】合作项目数居全州榜首！以下为您列举其参建的核心项目：`
        : `Based on 478 consultant records across 44 projects, top 5 firms are:\n\n` +
          sortedFirms.map((f, i) => `${i + 1}. ${f[0]}: ${f[1].count} projects`).join('\n');
    } else if (isRankQuery && (q.includes('容量') || q.includes('规模') || q.includes('最大') || q.includes('最高'))) {
      const sortedByCap = [...projects].sort((a, b) => (b.capacityMW || 0) - (a.capacityMW || 0));
      matchedProjects = sortedByCap.slice(0, 6);
      const topP = sortedByCap[0];
      replyText = lang === 'zh'
        ? `根据最新电力容量数据统计，全新州拟建容量最大的数据中心项目为 ${topP.name}（容量达 ${topP.capacityMW} MW）。拟建容量排名前列的项目如下：`
        : `Highest capacity project in NSW is ${topP.name} (${topP.capacityMW} MW). Top capacity projects:`;
    }

    // Exact SSD Number Matching Priority
    if (!replyText && ssdQuery) {
      matchedProjects = projects.filter(p => p.applicationNo.replace(/[-_]/g, '').toLowerCase().includes(ssdQuery));
    }

    // Consultant / Capacity / Keyword Matching Fallback
    const consultantNames = ['urbis', 'ethos', 'hdr', 'greenbox', 'ttw', 'slr', 'jacobs', 'biosis', 'willowtree', 'patch', 'mecone', 'arup', 'linesight', 'douglas'];
    const foundConsultant = consultantNames.find(c => q.includes(c));

    if (!replyText && matchedProjects.length === 0) {
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
      } else if (extractedTokens.length > 0) {
        // Smart Token Matching across all project properties
        matchedProjects = projects.filter(p => {
          return extractedTokens.some(token => {
            if (token.length < 2) return false;
            return (
              p.name.toLowerCase().includes(token) ||
              p.applicant.toLowerCase().includes(token) ||
              p.lga.toLowerCase().includes(token) ||
              p.applicationNo.toLowerCase().includes(token) ||
              (p.planningConsultant || '').toLowerCase().includes(token) ||
              (p.architect || '').toLowerCase().includes(token) ||
              p.consultants.some(c => c.companyName.toLowerCase().includes(token) || c.role.toLowerCase().includes(token))
            );
          });
        });
      } else {
        matchedProjects = projects.filter(p => 
          p.name.toLowerCase().includes(q) ||
          p.applicationNo.toLowerCase().includes(q) ||
          p.applicant.toLowerCase().includes(q) ||
          p.lga.toLowerCase().includes(q)
        );
      }
    }

    // Collect source document links
    matchedProjects.slice(0, 5).forEach(p => {
      if (p.appendices.length > 0) {
        sources.push({
          title: `${p.applicationNo} - ${p.appendices[0].title}`,
          url: p.appendices[0].downloadUrl || p.officialUrl
        });
      }
    });

    // Model Engine Specified by User: v4-flash
    const targetModel = 'v4-flash';

    // 3. Build FULL 44 Projects Concise Knowledge Base Context
    const fullDatabaseContext = projects.map((p, idx) => 
      `${idx + 1}. [${p.applicationNo}] ${p.name} | LGA: ${p.lga} | 拟建容量: ${p.capacityMW}MW | 申请人/开发商: ${p.applicant} | 阶段: ${p.stage} | 总规划: ${p.planningConsultant || '未列出'} | 建筑设计: ${p.architect || '未列出'} | 主要参建公司: ${p.consultants.slice(0, 5).map(c => c.companyName).join(', ')}`
    ).join('\n');

    if (!replyText && apiKey && apiKey.trim().length > 5) {
      try {
        const endpoint = selectedProvider === 'deepseek'
          ? 'https://api.deepseek.com/chat/completions'
          : 'https://api.moonshot.cn/v1/chat/completions';

        const systemPrompt = `你叫 WiseBot，是一个专业的 NSW 新州数据中心重大项目 Intelligence Agent。你手中拥有新州全量 44 个重大数据中心项目数据库。
输出格式要求：请使用干净清爽的纯文本回答，禁止在输出中包含任何 ** 加粗符号。若提到具体项目，请包含项目申请编号（如 SSD-xxxxx）。
请结合下面提供的全量 44 个项目数据库解答用户的提问（包括哪家咨询公司合作项目最多、特定开发商如 NEXTDC、特定 SSD 编号如 SSD-63168959 等）：

全量 44 个项目数据库（知识库）：
${fullDatabaseContext}`;

        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey.trim()}`
          },
          body: JSON.stringify({
            model: targetModel,
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: queryText }
            ],
            temperature: 0.2
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

    // 4. High-precision Local RAG Fallback
    if (!replyText) {
      if (ssdQuery && matchedProjects.length > 0) {
        const targetP = matchedProjects[0];
        replyText = lang === 'zh'
          ? `已为您查到项目编号 ${targetP.applicationNo}（${targetP.name}）。该项目位于 ${targetP.lga}，申请人为 ${targetP.applicant}，拟建电力容量为 ${targetP.capacityMW}MW，总规划由 ${targetP.planningConsultant} 担任，建筑设计由 ${targetP.architect} 负责。`
          : `Found project ${targetP.applicationNo} (${targetP.name}). Located at ${targetP.lga}, Applicant: ${targetP.applicant}, Capacity: ${targetP.capacityMW}MW.`;
      } else if (matchedProjects.length > 0) {
        const firstToken = extractedTokens[0] || '';
        const entityLabel = firstToken ? firstToken.toUpperCase() : (foundConsultant ? foundConsultant.toUpperCase() : '目标条件');
        const totalCap = matchedProjects.reduce((sum, p) => sum + (p.capacityMW || 0), 0);
        replyText = lang === 'zh'
          ? `已为您检索到与 ${entityLabel} 相关的重大数据中心项目共 ${matchedProjects.length} 个，累计拟建容量 ${totalCap} MW。核心项目列表如下：`
          : `Retrieved ${matchedProjects.length} projects related to ${entityLabel} (total ${totalCap} MW):`;
      } else {
        replyText = lang === 'zh'
          ? `新州数据库中为您提供全量 44 个重大数据中心项目，包含 NEXTDC、KNBDC SYD4、Equinix 等主流开发商的集中展示：`
          : `Browsing all 44 major data center projects in NSW:`;
        matchedProjects = projects.slice(0, 5);
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
      {/* Floating Toggle Button (Right Bottom) with wiseway.png logo */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2.5 ${
          isOpen
            ? 'bg-slate-800 text-white ring-4 ring-slate-700/50 rotate-90'
            : 'bg-slate-900 border border-slate-700 text-white ring-4 ring-blue-500/30 hover:shadow-blue-500/40 animate-bounce-subtle'
        }`}
        title="Open WiseBot"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <div className="relative">
              <img 
                src="/wiseway.png" 
                alt="WiseBot Logo" 
                className="w-6 h-6 rounded-md object-contain"
              />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </div>
            <span className="font-bold text-xs pr-1 hidden sm:inline tracking-wide">
              WiseBot
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
          
          {/* Clean Header with wiseway.png logo and Export Button */}
          <div className={`px-4 py-3.5 border-b flex items-center justify-between gap-3 ${
            isDarkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2.5">
              <img 
                src="/wiseway.png" 
                alt="WiseBot Logo" 
                className="w-8 h-8 rounded-xl object-contain shadow-sm border border-slate-200 dark:border-slate-800 bg-white"
              />
              <div>
                <h3 className="font-bold text-sm leading-tight">
                  WiseBot
                </h3>
                <p className="text-[11px] text-slate-400 font-medium">
                  {lang === 'zh' ? 'NSW 数据中心项目问答助手' : 'NSW SSD AI Assistant'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Export Chat History Button */}
              <button
                onClick={handleExportHistory}
                className={`p-1.5 rounded-lg border text-xs transition-colors flex items-center gap-1 ${
                  isDarkMode 
                    ? 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800' 
                    : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-50 shadow-sm'
                }`}
                title={lang === 'zh' ? '导出聊天对话记录 (.txt)' : 'Export Chat History (.txt)'}
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span className="text-[11px] font-semibold hidden sm:inline">{lang === 'zh' ? '导出记录' : 'Export'}</span>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'agent' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center p-1 shrink-0 mt-0.5">
                    <img 
                      src="/wiseway.png" 
                      alt="WiseBot" 
                      className="w-4 h-4 rounded object-contain"
                    />
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
                <span>{lang === 'zh' ? 'WiseBot 正在思考推演中...' : 'WiseBot reasoning...'}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
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
              placeholder={lang === 'zh' ? '向 WiseBot 提问（如：哪个咨询公司合作的项目最多？）...' : 'Ask WiseBot (e.g. Most frequent consultants)...'}
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
