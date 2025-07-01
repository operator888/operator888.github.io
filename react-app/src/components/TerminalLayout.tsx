import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';



const TerminalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const [isTerminalOpen, setTerminalOpen] = React.useState(true);
  const [terminalOutput, setTerminalOutput] = React.useState<string[]>([]);
  const [command, setCommand] = React.useState('');

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    const output = [...terminalOutput, `$ ${command}`];
    
    // Process commands
    switch (command.toLowerCase()) {
      case 'clear':
        setTerminalOutput([]);
        break;
      case 'help':
        output.push('Available commands: help, clear, about, projects, contact');
        break;
      default:
        output.push(`Command not found: ${command}`);
    }

    setTerminalOutput(output);
    setCommand('');
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
            </div>
            <form onSubmit={handleCommand} className="terminal-input">
              <span className="prompt">$</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="Type 'help' for available commands"
                autoFocus
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};



export default TerminalLayout;
