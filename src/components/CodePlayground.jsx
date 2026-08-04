import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiCopy, FiCheck, FiPlay } from 'react-icons/fi';
import { codeSnippets } from '../data/portfolioData';

export default function CodePlayground() {
  const [activeTab, setActiveTab] = useState('controller');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [outputLog, setOutputLog] = useState(null);

  const tabs = [
    { id: 'controller', label: 'BookingController.java', type: 'Spring Boot REST' },
    { id: 'aiPrompt', label: 'AiPromptSpec.java', type: 'AI Engineering' }
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setIsRunning(true);
    setOutputLog(null);
    setTimeout(() => {
      setIsRunning(false);
      if (activeTab === 'controller') {
        setOutputLog({
          status: '201 CREATED',
          time: '38ms',
          body: JSON.stringify({
            bookingId: "BK-884920",
            status: "REQUESTED",
            customerName: "Mohd Sajid",
            driverAssigned: "DRV-1029",
            timestamp: new Date().toISOString()
          }, null, 2)
        });
      } else {
        setOutputLog({
          status: '200 OK (AI Copilot Executed)',
          time: '12ms',
          body: `// Generated GlobalExceptionHandler.java (RFC 7807)
@ExceptionHandler(ResourceNotFoundException.class)
public ProblemDetail handleNotFound(ResourceNotFoundException ex) {
    return ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
}`
        });
      }
    }, 800);
  };

  const currentCode = activeTab === 'controller' ? codeSnippets.javaController : codeSnippets.aiPromptWorkflow;

  return (
    <div className="my-10 lg:my-14 glass-card border border-indigo-500/20 rounded-2xl overflow-hidden shadow-2xl">
      {/* Terminal Window Top Bar (Responsive Stack/Row) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-950/90 border-b border-slate-800 gap-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
            <FiTerminal className="text-indigo-400" /> Sajid-Backend-Architecture.java
          </span>
        </div>

        {/* Tabs & Controls Container */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setOutputLog(null); }}
                className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <FiPlay className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Compiling...' : 'Simulate API'}</span>
            </button>
            <button
              onClick={() => handleCopy(currentCode)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition"
              title="Copy snippet"
              aria-label="Copy snippet"
            >
              {copied ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-6 bg-slate-950/90 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
        <pre className="text-slate-300">
          <code>{currentCode}</code>
        </pre>
      </div>

      {/* API Simulation Console Output */}
      {outputLog && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-indigo-500/30 bg-slate-950 p-4 font-mono text-xs text-slate-300 text-left"
        >
          <div className="flex flex-wrap items-center justify-between text-slate-400 mb-2 gap-2">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              HTTP Response: {outputLog.status}
            </span>
            <span>Execution Time: {outputLog.time}</span>
          </div>
          <pre className="text-indigo-300 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 overflow-x-auto">
            {outputLog.body}
          </pre>
        </motion.div>
      )}
    </div>
  );
}
