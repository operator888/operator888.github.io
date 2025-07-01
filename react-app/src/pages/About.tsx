const About = () => {
  return (
    <div className="page-content">
      <div className="code-line">
        <span className="line-number">1</span>
        <span className="keyword">public</span> <span className="class-name">class</span> <span className="identifier">ProfessionalProfile</span> {'{'}
      </div>
      <div className="code-line indent-1">
        <span className="line-number">2</span>
        <span className="comment">/// &lt;summary&gt;</span>
      </div>
      <div className="code-line indent-1">
        <span className="line-number">3</span>
        <span className="comment">/// Professional Summary</span>
      </div>
      <div className="code-line indent-1">
        <span className="line-number">4</span>
        <span className="comment">/// &lt;/summary&gt;</span>
      </div>
      <div className="code-line indent-1">
        <span className="line-number">5</span>
        <span className="keyword">public</span> <span className="types">string</span> <span className="property">Summary</span> = <span className="string">"Results-driven Full-Stack Developer and IT Consultant with extensive experience in web development, eCommerce solutions, and technical leadership. Adept at designing and implementing robust, scalable applications with a strong focus on clean code and user experience. Proven track record of delivering high-quality solutions that drive business growth and efficiency."</span>;
      </div>
      <div className="code-line">
        <span className="line-number">6</span>
      </div>
      <div className="code-line indent-1">
        <span className="line-number">7</span>
        <span className="comment">/// &lt;summary&gt;</span>
      </div>
      <div className="code-line indent-1">
        <span className="line-number">8</span>
        <span className="comment">/// Technical Skills</span>
      </div>
      <div className="code-line indent-1">
        <span className="line-number">9</span>
        <span className="comment">/// &lt;/summary&gt;</span>
      </div>
      <div className="code-line indent-1">
        <span className="line-number">10</span>
        <span className="keyword">public</span> <span className="class-name">Dictionary</span>&lt;<span className="types">string</span>, <span className="types">string[]</span>&gt; <span className="property">Skills</span> = <span className="keyword">new</span> <span className="class-name">Dictionary</span>&lt;<span className="types">string</span>, <span className="types">string[]</span>&gt;()
      </div>
      <div className="code-line indent-1">
        <span className="line-number">11</span>
        {'{'}
      </div>
      <div className="code-line indent-2">
        <span className="line-number">12</span>
        <span className="comment">// Programming Languages</span>
      </div>
      <div className="code-line indent-2">
        <span className="line-number">13</span>
        {'{ "Languages", new string[] { "JavaScript/TypeScript", "Python", "PHP", "HTML/CSS", "SQL" } },'}
      </div>
      <div className="code-line indent-2">
        <span className="line-number">14</span>
        <span className="comment">// Frameworks & Libraries</span>
      </div>
      <div className="code-line indent-2">
        <span className="line-number">15</span>
        {'{ "Frameworks", new string[] { "React.js", "Node.js", "Express.js", "Next.js", "Django" } },'}
      </div>
      <div className="code-line indent-2">
        <span className="line-number">16</span>
        <span className="comment">// Tools & Technologies</span>
      </div>
      <div className="code-line indent-2">
        <span className="line-number">17</span>
        {'{ "Technologies", new string[] { "RESTful APIs", "GraphQL", "WebSockets", "Microservices", "Docker" } },'}
      </div>
      <div className="code-line indent-2">
        <span className="line-number">18</span>
        <span className="comment">// Databases</span>
      </div>
      <div className="code-line indent-2">
        <span className="line-number">19</span>
        {'{ "Databases", new string[] { "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis" } },'}
      </div>
      <div className="code-line indent-2">
        <span className="line-number">20</span>
        <span className="comment">// DevOps & Cloud</span>
      </div>
      <div className="code-line indent-2">
        <span className="line-number">21</span>
        {'{ "DevOps", new string[] { "AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD" } },'}
      </div>
      <div className="code-line indent-2">
        <span className="line-number">22</span>
        <span className="comment">// Development Tools</span>
      </div>
      <div className="code-line indent-2">
        <span className="line-number">23</span>
        {'{ "Tools", new string[] { "Git/GitHub", "VS Code", "Postman", "JIRA", "Figma" } }'}
      </div>
      <div className="code-line indent-1">
        <span className="line-number">17</span>
        {'};'}
      </div>
    </div>
  );
};

export default About;
