import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const TerminalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTerminalOpen, setTerminalOpen] = React.useState(true);
  const [terminalOutput, setTerminalOutput] = React.useState<string[]>(['Welcome to the terminal! Type "help" for available commands.']);
  const [command, setCommand] = React.useState('');
  const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = React.useState(-1);
  const navigate = useNavigate();
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalOutput]);

  // Focus input when terminal is opened
  useEffect(() => {
    if (isTerminalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTerminalOpen]);

  const addOutput = (text: string) => {
    setTerminalOutput(prev => [...prev, text]);
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    // Add command to history if it's not the same as the last one
    setCommandHistory(prev => {
      if (prev[0] !== trimmedCmd) {
        return [trimmedCmd, ...prev];
      }
      return prev;
    });

    addOutput(`$ ${trimmedCmd}`);

    // Process commands
    switch (trimmedCmd.toLowerCase()) {
      case 'clear':
        setTerminalOutput([]);
        return;
        
      case 'help':
        addOutput('Available commands:');
        addOutput('  help     - Show this help message');
        addOutput('  clear    - Clear the terminal');
        addOutput('  about    - Navigate to About page');
        addOutput('  projects - Navigate to Projects page');
        addOutput('  contact  - Navigate to Contact page');
        return;
        
      case 'about':
        navigate('/about');
        addOutput('Navigating to About page...');
        return;
        
      case 'projects':
        navigate('/projects');
        addOutput('Navigating to Projects page...');
        return;
        
      case 'contact':
        navigate('/contact');
        addOutput('Navigating to Contact page...');
        return;
        
      default:
        addOutput(`Command not found: ${trimmedCmd}. Type "help" for available commands.`);
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    
    executeCommand(command);
    setCommand('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle up/down arrow for command history
    if (e.key === 'ArrowUp' && historyIndex < commandHistory.length - 1) {
      e.preventDefault();
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCommand(commandHistory[newIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setCommand(newIndex >= 0 ? commandHistory[newIndex] : '');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Basic tab completion for commands
      const commands = ['help', 'clear', 'about', 'projects', 'contact'];
      const matchingCommands = commands.filter(cmd => 
        cmd.startsWith(command.toLowerCase())
      );
      
      if (matchingCommands.length === 1) {
        setCommand(matchingCommands[0]);
      } else if (matchingCommands.length > 1) {
        setTerminalOutput(prev => [...prev, `\n${matchingCommands.join('  ')}`]);
      }
    }
  };

  return (
    <div className="terminal-layout">
      <div className="editor-header">
        
        <div className="window-controls">
          <span className="control minimize"></span>
          <span className="control maximize"></span>
          <span className="control close"></span>
        </div>
      </div>

      <div className="editor-container">
        <div className="editor-content">
          {children}
        </div>
      </div>

      <div className={`terminal-container ${isTerminalOpen ? 'open' : ''}`}>
        <div className="terminal-header" onClick={() => setTerminalOpen(!isTerminalOpen)}>
          <FontAwesomeIcon icon={faTerminal} />
          <span>Terminal</span>
          <button 
            className="terminal-toggle"
            onClick={(e) => {
              e.stopPropagation();
              setTerminalOpen(!isTerminalOpen);
            }}
          >
            {isTerminalOpen ? '−' : '+'}
          </button>
        </div>
        
        {isTerminalOpen && (
          <div className="terminal-body">
        <div className="terminal-output">
          {terminalOutput.map((line, i) => (
            <div key={i} className="terminal-line">{line}</div>
          ))}
          <div ref={terminalEndRef} />
        </div>
        <form onSubmit={handleCommand} className="terminal-input">
          <span className="prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' for available commands"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
        )}
      </div>
    </div>
  );
};



export default TerminalLayout;
