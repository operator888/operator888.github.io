import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faUser, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import '../styles/Navbar.css';

// Define TypeScript interfaces for our data structures
interface NavLink {
  path: string;
  name: string;
  icon: any; // Using any for FontAwesome icons
}

interface SocialLink {
  icon: any; // Using any for FontAwesome icons
  url: string;
  label: string;
}

const Navbar: React.FC = () => {
  const location = useLocation();

  // Navigation links data
  const navLinks: NavLink[] = [
    { path: '/', name: 'Home', icon: faTerminal },
    { path: '/about', name: 'About', icon: faUser },
    { path: '/projects', name: 'Projects', icon: faFolderOpen },
    { path: '/contact', name: 'Contact', icon: faEnvelope },
  ];

  // Social media links data
  const socialLinks: SocialLink[] = [
    { 
      icon: faGithub,
      url: 'https://github.com/operator888',
      label: 'GitHub'
    },
    { 
      icon: faLinkedin,
      url: 'https://linkedin.com/in/theodoros-dimitriou',
      label: 'LinkedIn'
    },
    { 
      icon: faTwitter,
      url: 'https://twitter.com/yourhandle',
      label: 'Twitter'
    },
  ];

  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-image">
          <div className="image-placeholder">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </div>
        </div>
        <h1>Theo Dimitriou</h1>
        <p className="title">Full Stack Developer</p>
        
        {/* Social Links */}
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="social-link"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.path} className={location.pathname === link.path ? 'active' : ''}>
              <Link to={link.path}>
                <FontAwesomeIcon icon={link.icon} className="nav-icon" />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Terminal Info Section */}
      <div className="terminal-info">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button red"></span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-title">theo@portfolio:~</div>
        </div>
        <div className="terminal-body">
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-command">whoami</span>
          </div>
          <div className="terminal-output">
            Full Stack Developer
            <br />
            JavaScript | TypeScript | React | Node.js
          </div>
          <div className="terminal-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-command">find ./skills -type f</span>
          </div>
          <div className="terminal-output">
            ./skills/frontend
            ./skills/backend
            ./skills/devops
            ./skills/databases
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
