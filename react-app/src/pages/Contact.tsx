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
        <span className="comment">/// Get in touch with me through any of these channels.</span>
      </div>
      <div className="code-line">
        <span className="line-number">3</span>
        <span className="comment">/// I'm always open to interesting discussions and opportunities.</span>
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
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">Email</span> = <span className="string"><a href="mailto:theodoros.dimitriou.dev@gmail.com">"theodoros.dimitriou.dev@gmail.com"</a></span>;
      </div>
      <div className="code-line indent-1">
        <span className="line-number">7</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">Phone</span> = <span className="string"><a href="tel:+4915901958710">"+49 15901958710"</a></span>;
      </div>
      <div className="code-line indent-1">
        <span className="line-number">8</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">Website</span> = <span className="string"><a href="https://theodorosdimitriou.com" target="_blank" rel="noopener noreferrer">"theodorosdimitriou.com"</a></span>;
      </div>
      <div className="code-line indent-1">
        <span className="line-number">9</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">LinkedIn</span> = <span className="string"><a href="https://linkedin.com/in/theodordimitriu" target="_blank" rel="noopener noreferrer">"linkedin.com/in/theodordimitriu"</a></span>;
      </div>
      <div className="code-line indent-1">
        <span className="line-number">10</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">GitHub</span> = <span className="string"><a href="https://github.com/operator888" target="_blank" rel="noopener noreferrer">"github.com/operator888"</a></span>;
      </div>
      <div className="code-line">
        <span className="line-number">11</span>
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