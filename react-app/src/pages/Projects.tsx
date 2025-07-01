

const Projects = () => {
  return (
    <div className="page-content">
            <div className="code-line">
        <span className="line-number">1</span>
        <span className="keyword">public</span> <span className="class-name">class</span> <span className="identifier">MyProjects</span> &#123;
      </div>
      <div className="code-line">
        <span className="line-number">2</span>
        <span className="comment">    // A selection of my recent work</span>
      </div>
      <div className="code-line">
        <span className="line-number">3</span>
      </div>
      <div className="code-line">
        <span className="line-number">4</span>
        <span className="keyword">    public</span> <span className="class-name">Project</span> <span className="identifier">PortfolioWebsite</span> = <span className="keyword">new</span> <span className="class-name">Project</span>() &#123;
      </div>
      <div className="code-line">
        <span className="line-number">5</span>
        <span className="property-name">        Name</span> = <span className="string">"Terminal-Style Portfolio"</span>,
      </div>
      <div className="code-line">
        <span className="line-number">6</span>
        <span className="property-name">        Description</span> = <span className="string">"A responsive personal portfolio website with a retro terminal theme, built with React and TypeScript."</span>,
      </div>
      <div className="code-line">
        <span className="line-number">7</span>
        <span className="property-name">        Technologies</span> = <span className="keyword">new</span> <span className="class-name">string[]</span> &#123; <span className="string">"React"</span>, <span className="string">"TypeScript"</span>, <span className="string">"CSS"</span>, <span className="string">"Framer Motion"</span> &#125;
      </div>
      <div className="code-line">
        <span className="line-number">8</span>
        &#125;;
      </div>
      <div className="code-line">
        <span className="line-number">9</span>
      </div>
      <div className="code-line">
        <span className="line-number">10</span>
        <span className="keyword">    public</span> <span className="class-name">Project</span> <span className="identifier">ECommercePlatform</span> = <span className="keyword">new</span> <span className="class-name">Project</span>() &#123;
      </div>
      <div className="code-line">
        <span className="line-number">11</span>
        <span className="property-name">        Name</span> = <span className="string">"osCommerce Contribution"</span>,
      </div>
      <div className="code-line">
        <span className="line-number">12</span>
        <span className="property-name">        Description</span> = <span className="string">"Contributed to the open-source osCommerce platform, focusing on performance optimization and new feature development."</span>,
      </div>
      <div className="code-line">
        <span className="line-number">13</span>
        <span className="property-name">        Technologies</span> = <span className="keyword">new</span> <span className="class-name">string[]</span> &#123; <span className="string">"PHP"</span>, <span className="string">"MySQL"</span>, <span className="string">"jQuery"</span>, <span className="string">"ExtJS"</span> &#125;
      </div>
      <div className="code-line">
        <span className="line-number">14</span>
        &#125;;
      </div>
      <div className="code-line">
        <span className="line-number">15</span>
        &#125;
      </div>
    </div>
  );
};

export default Projects;
