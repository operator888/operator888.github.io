import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="page-content">
      <div className="code-line">
        <span className="line-number">1</span>
        <span className="comment">/// &lt;summary&gt;</span>
      </div>
      <div className="code-line">
        <span className="line-number">2</span>
        <span className="comment">/// I'm currently looking for new opportunities and collaborations.</span>
      </div>
      <div className="code-line">
        <span className="line-number">3</span>
        <span className="comment">/// Feel free to reach out for any professional inquiries or just to say hello!</span>
      </div>
      <div className="code-line">
        <span className="line-number">4</span>
        <span className="comment">/// &lt;/summary&gt;</span>
      </div>
      <div className="code-line">
        <span className="line-number">5</span>
        <span className="keyword">public</span> <span className="class-name">class</span> <span className="identifier">ContactInformation</span> {'{'}
      </div>
      <div className="code-line indent-1">
        <span className="line-number">6</span>
        <span className="comment">    /// Primary email for professional inquiries</span>
      </div>
      <div className="code-line indent-1">
        <span className="line-number">7</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">Email</span> = <span className="string"><a href="mailto:theodimitriou@gmail.com" className="text-blue-400 hover:underline">"theodimitriou@gmail.com"</a></span>;
      </div>
      <div className="code-line indent-1">
        <span className="line-number">8</span>
        <span className="comment">    /// Connect with me on LinkedIn</span>
      </div>
      <div className="code-line indent-1">
        <span className="line-number">9</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">LinkedIn</span> = <span className="string"><a href="https://linkedin.com/in/theodoros-dimitriou" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">"linkedin.com/in/theodoros-dimitriou"</a></span>;
      </div>
      <div className="code-line indent-1">
        <span className="line-number">10</span>
        <span className="comment">    /// Check out my open-source contributions</span>
      </div>
      <div className="code-line indent-1">
        <span className="line-number">11</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">GitHub</span> = <span className="string"><a href="https://github.com/operator888" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">"github.com/operator888"</a></span>;
      </div>
      <div className="code-line indent-1">
        <span className="line-number">12</span>
        <span className="comment">    /// My personal website and portfolio</span>
      </div>
      <div className="code-line indent-1">
        <span className="line-number">13</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">Website</span> = <span className="string"><a href="https://operator888.github.io" target="_blank" rel="noopener noreferrer">"operator888.github.io"</a></span>;
      </div>
      <div className="code-line">
        <span className="line-number">14</span>
        {'}'}
      </div>
      <div className="code-footer">
        <div className="social-links">
          <a href="https://github.com/operator888" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/theodordimitriu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:theodoros.dimitriou.dev@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;