
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="page-content">
      <div className="code-line">
        <span className="line-number">1</span>
        <span className="comment">/// &lt;summary&gt;</span>
      </div>
      <div className="code-line">
        <span className="line-number">2</span>
        <span className="comment">/// Digital Solutions Architect and Full-Stack Developer with over a decade of experience.</span>
      </div>
      <div className="code-line">
        <span className="line-number">3</span>
        <span className="comment">/// Specializing in eCommerce, enterprise solutions, and building scalable web applications.</span>
      </div>
      <div className="code-line">
        <span className="line-number">4</span>
        <span className="comment">/// &lt;/summary&gt;</span>
      </div>
      <div className="code-line">
        <span className="line-number">5</span>
        <span className="keyword">public</span> <span className="class-name">class</span> <span className="identifier">Information</span> {'{'}
      </div>
      <div className="code-line indent-1">
        <span className="line-number">6</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">Name</span> = <span className="string">"Theodoros Dimitriou"</span>;
      </div>
      <div className="code-line indent-1">
        <span className="line-number">7</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">Titre</span> = <span className="string">"Digital Solutions Architect"</span>;
      </div>
      <div className="code-line indent-1">
        <span className="line-number">8</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">Email</span> = <span className="string">"theodimitriou@gmail.com"</span>;
      </div>
      <div className="code-line indent-1">
        <span className="line-number">9</span>
        <span className="keyword">public</span> <span className="types">string[]</span> <span className="property">Position</span> = {'{'} <span className="string">"Athens"</span>, <span className="string">"Greece"</span> {'}'};
      </div>
      <div className="code-line">
        <span className="line-number">10</span>
        {'}'}
      </div>
      <div className="code-line">
        <span className="line-number">11</span>
        &nbsp;
      </div>
      <div className="code-line">
        <span className="line-number">12</span>
        <span className="keyword">public</span> <span className="keyword">partial</span> <span className="class-name">class</span> <span className="identifier">Formations</span> : <span className="class-name">EcolesSuperieures</span> {'{'}
      </div>
      <div className="code-line indent-1">
        <span className="line-number">13</span>
        <span className="keyword">private</span> <span className="types">void</span> <span className="identifier">UniversityOfMacedonia</span>() {'{'}
      </div>
      <div className="code-line indent-2">
        <span className="line-number">14</span>
        <span className="keyword">var</span> <span className="property">_Niveau</span> = <span className="string">"Bachelor's Degree"</span>;
      </div>
      <div className="code-line indent-2">
        <span className="line-number">15</span>
        <span className="keyword">var</span> <span className="property">_Type</span> = <span className="string">"Applied Informatics"</span>;
      </div>
      <div className="code-line indent-1">
        <span className="line-number">16</span>
        {'}'}
      </div>
      <div className="code-line">
        <span className="line-number">17</span>
        {'}'}
      </div>
      <div className="code-line">
        <span className="line-number">18</span>
        &nbsp;
      </div>
      <div className="code-line">
        <span className="line-number">19</span>
        <span className="keyword">public</span> <span className="keyword">static</span> <span className="class-name">class</span> <span className="identifier">Experiences</span> {'{'}
      </div>
      <div className="code-line indent-1">
        <span className="line-number">20</span>
        <span className="keyword">public</span> <span className="types">void</span> <span className="identifier">Livinguard</span>() {'{'}
      </div>
      <div className="code-line indent-2">
        <span className="line-number">21</span>
        <span className="keyword">var</span> <span className="property">_Duree</span> = <span className="string">"2021 - 2022"</span>;
      </div>
      <div className="code-line indent-2">
        <span className="line-number">22</span>
        <span className="keyword">var</span> <span className="property">_Type</span> = <span className="keyword">new</span> <span className="identifier">Stage</span>(<span className="string">"Technical Manager"</span>);
      </div>
      <div className="code-line indent-1">
        <span className="line-number">23</span>
        {'}'}
      </div>
      <div className="code-line indent-1">
        <span className="line-number">24</span>
        <span className="keyword">public</span> <span className="types">void</span> <span className="identifier">Team23</span>() {'{'}
      </div>
      <div className="code-line indent-2">
        <span className="line-number">25</span>
        <span className="keyword">var</span> <span className="property">_Duree</span> = <span className="string">"2019 - 2020"</span>;
      </div>
      <div className="code-line indent-2">
        <span className="line-number">26</span>
        <span className="keyword">var</span> <span className="property">_Type</span> = <span className="keyword">new</span> <span className="identifier">Stage</span>(<span className="string">"Full-Stack Developer"</span>);
      </div>
      <div className="code-line indent-1">
        <span className="line-number">27</span>
        {'}'}
      </div>
      <div className="code-line">
        <span className="line-number">28</span>
        {'}'}
      </div>
      <div className="code-footer">
        <div className="social-links">
          <a href="https://github.com/operator888" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/theodoros-dimitriou" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:theodimitriou@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
