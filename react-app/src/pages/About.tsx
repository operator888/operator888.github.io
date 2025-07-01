

const About = () => {
  return (
    <div className="page-content">
            <div className="code-line">
        <span className="line-number">1</span>
        <span className="keyword">public</span> <span className="class-name">class</span> <span className="identifier">AboutMe</span> &#123;
      </div>
      <div className="code-line">
        <span className="line-number">2</span>
        <span className="property-name">    Name</span>: <span className="string">"Theodoros Dimitriou"</span>;
      </div>
      <div className="code-line">
        <span className="line-number">3</span>
        <span className="property-name">    Location</span>: <span className="string">"Thessaloniki, Greece"</span>;
      </div>
      <div className="code-line">
        <span className="line-number">4</span>
        <span className="property-name">    Role</span>: <span className="string">"Full Stack Developer"</span>;
      </div>
      <div className="code-line">
        <span className="line-number">5</span>
      </div>
      <div className="code-line">
        <span className="line-number">6</span>
        <span className="keyword">    public</span> <span className="method-name">string</span> <span className="identifier">GetBio</span>() &#123;
      </div>
      <div className="code-line">
        <span className="line-number">7</span>
        <span className="keyword">        return</span> <span className="string">"I am a passionate developer with a love for creating elegant and efficient solutions. My journey in tech started with a curiosity for how things work, and it has evolved into a career where I can build, innovate, and solve complex problems. I thrive in collaborative environments and am always eager to learn new technologies."</span>;
      </div>
      <div className="code-line">
        <span className="line-number">8</span>
        &#125;
      </div>
      <div className="code-line">
        <span className="line-number">9</span>
      </div>
      <div className="code-line">
        <span className="line-number">10</span>
        <span className="keyword">    public</span> <span className="class-name">string[]</span> <span className="identifier">GetInterests</span>() &#123;
      </div>
      <div className="code-line">
        <span className="line-number">11</span>
        <span className="keyword">        return new</span> <span className="class-name">string[]</span> &#123; <span className="string">"Open Source"</span>, <span className="string">"AI & Machine Learning"</span>, <span className="string">"Cybersecurity"</span>, <span className="string">"Gaming"</span> &#125;;
      </div>
      <div className="code-line">
        <span className="line-number">12</span>
        &#125;
      </div>
      <div className="code-line">
        <span className="line-number">13</span>
        &#125;
      </div>
    </div>
  );
};

export default About;
