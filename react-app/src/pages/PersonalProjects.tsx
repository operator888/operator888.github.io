import React from 'react';

const projects = [
  {
    title: "Dyson Spheres Visualization - Interactive 3D Megastructure Designer",
    year: "2024",
    description: "Advanced 3D visualization application for designing and exploring various types of Dyson spheres around different celestial bodies with real-time physics calculations. Features 8 Dyson sphere types, 9 celestial body types, and comprehensive material library.",
    technologies: "Three.js, WebGL, React, TypeScript, Vite, Physics Engine"
  },
  {
    title: "Bookmarks & Favorites Management - Chrome Extension",
    year: "2023",
    description: "Chrome extension for efficient bookmarks and favorites management with custom categories, tags, search and filtering capabilities. Overcame Chrome API integration challenges and performance optimization.",
    technologies: "Chrome Browser Engine, HTML, JavaScript, CSS"
  },
  {
    title: "Timebased Bookings of Services & Products - WordPress Plugin",
    year: "2022-2023",
    description: "WordPress plugin for businesses requiring time-limited bookings and event tickets. Features multiple booking types, admin panel, customizable pricing, email notifications, and mobile-responsive forms with GDPR compliance.",
    technologies: "PHP, Tailwind CSS, JavaScript, WordPress"
  },
  {
    title: "Freecashe ERP-CRM-CMS-eShop platform",
    year: "10/2015-08/2016",
    description: "WordPress Multisite platform for rapid eShop development with integrated payment gateway solution. Developed for AlphaBank GR Hackathon, offering warehouse management, CRM, ERP & marketing features.",
    technologies: "WordPress, PHP, MySQL, Payment Gateway Integration"
  },
  {
    title: "EasyOnline.gr",
    year: "07/2010-12/2022",
    description: "E-commerce platform with custom WordPress theme and plugins. Features include product management, order processing, payment gateway integration, and customer accounts.",
    technologies: "WordPress, PHP, MySQL, JavaScript, CSS"
  }
];

const PersonalProjects = () => {
  return (
    <div className="page-content">
      <div className="code-block">
        <div className="code-line">
          <span className="line-number">1</span>
          <span className="keyword">const</span> <span className="identifier">PersonalProjects</span> = () => {'{'}
        </div>
        <div className="code-line">
          <span className="line-number">2</span>
          <span className="comment">  // Personal Software Projects</span>
        </div>
        <div className="code-line">
          <span className="line-number">3</span>
          <span className="keyword">  const</span> <span className="identifier">projects</span> = [
        </div>
        
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <div className="code-line">
              <span className="line-number">{4 + (index * 6)}</span>
              <span className="property-name">    {'{'}</span>
            </div>
            <div className="code-line">
              <span className="line-number">{5 + (index * 6)}</span>
              <span className="property-name">      title:</span> <span className="string">"{project.title}"</span>,
            </div>
            <div className="code-line">
              <span className="line-number">{6 + (index * 6)}</span>
              <span className="property-name">      year:</span> <span className="string">"{project.year}"</span>,
            </div>
            <div className="code-line">
              <span className="line-number">{7 + (index * 6)}</span>
              <span className="property-name">      description:</span> <span className="string">"{project.description}"</span>,
            </div>
            <div className="code-line">
              <span className="line-number">{8 + (index * 6)}</span>
              <span className="property-name">      technologies:</span> <span className="string">"{project.technologies}"</span>
            </div>
            <div className="code-line">
              <span className="line-number">{9 + (index * 6)}</span>
              <span className="property-name">    {'}'}{index < projects.length - 1 ? ',' : ''}</span>
            </div>
          </React.Fragment>
        ))}
        
        <div className="code-line">
          <span className="line-number">{4 + (projects.length * 6)}</span>
          <span className="keyword">  ]</span>;
        </div>
        <div className="code-line">
          <span className="line-number">{5 + (projects.length * 6)}</span>
          <span className="keyword">  return</span> (
        </div>
        <div className="code-line">
          <span className="line-number">{6 + (projects.length * 6)}</span>
          <span className="keyword">    &lt;div className=</span><span className="string">"projects-container"</span>&gt;
        </div>
        
        {projects.map((project, index) => (
          <React.Fragment key={`project-${index}`}>
            <div className="code-line">
              <span className="line-number">{7 + (projects.length * 6) + (index * 4)}</span>
              <span className="keyword">      &lt;div className=</span><span className="string">"project"</span>&gt;
            </div>
            <div className="code-line">
              <span className="line-number">{8 + (projects.length * 6) + (index * 4)}</span>
              <span className="keyword">        &lt;h3&gt;</span>{project.title} <span className="string">({project.year})</span><span className="keyword">&lt;/h3&gt;</span>
            </div>
            <div className="code-line">
              <span className="line-number">{9 + (projects.length * 6) + (index * 4)}</span>
              <span className="keyword">        &lt;p className=</span><span className="string">"project-description"</span>&gt;{project.description}&lt;/p&gt;
            </div>
            <div className="code-line">
              <span className="line-number">{10 + (projects.length * 6) + (index * 4)}</span>
              <span className="keyword">        &lt;p className=</span><span className="string">"project-technologies"</span>&gt;Technologies: {project.technologies}&lt;/p&gt;
            </div>
            <div className="code-line">
              <span className="line-number">{11 + (projects.length * 6) + (index * 4)}</span>
              <span className="keyword">      &lt;/div&gt;</span>
            </div>
          </React.Fragment>
        ))}
        
        <div className="code-line">
          <span className="line-number">{12 + (projects.length * 10)}</span>
          <span className="keyword">    &lt;/div&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">{13 + (projects.length * 10)}</span>
          <span className="keyword">  )</span>;
        </div>
        <div className="code-line">
          <span className="line-number">{14 + (projects.length * 10)}</span>
          <span className="keyword">}</span>;
        </div>
        
        {/* Actual rendered content */}
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title} ({project.year})</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
          <span className="comment">    /// &lt;summary&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">17</span>
          <span className="comment">    /// Bookmarks & Favorites Management - Chrome Extension (2023)</span>
        </div>
        <div className="code-line">
          <span className="line-number">18</span>
          <span className="comment">    /// &lt;/summary&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">19</span>
          <span className="keyword">    public</span> <span className="class-name">Project</span> <span className="identifier">BookmarksExtension</span> = <span className="keyword">new</span> <span className="class-name">Project</span>() {'{'}
        </div>
        <div className="code-line">
          <span className="line-number">20</span>
          <span className="property-name">        Title</span> = <span className="string">"Bookmarks & Favorites Management - Chrome Extension"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">21</span>
          <span className="property-name">        Year</span> = <span className="string">"2023"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">22</span>
          <span className="property-name">        Description</span> = <span className="string">"Chrome extension for efficient bookmarks and favorites management with custom categories, tags, search "</span> +
        </div>
        <div className="code-line">
          <span className="line-number">23</span>
          <span className="string">          "and filtering capabilities. Overcame Chrome API integration challenges and performance optimization."</span>,
        </div>
        <div className="code-line">
          <span className="line-number">24</span>
          <span className="property-name">        Technologies</span> = <span className="string">"Chrome Browser Engine, HTML, JavaScript, CSS"</span>
        </div>
        <div className="code-line">
          <span className="line-number">25</span>
          <span className="property-name">    }</span>
        </div>
        <div className="code-line">
          <span className="line-number">26</span>
        </div>
        <div className="code-line">
          <span className="line-number">27</span>
          <span className="comment">    /// &lt;summary&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">28</span>
          <span className="comment">    /// Timebased Bookings of Services & Products - WordPress Plugin (2022-2023)</span>
        </div>
        <div className="code-line">
          <span className="line-number">29</span>
          <span className="comment">    /// &lt;/summary&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">30</span>
          <span className="keyword">    public</span> <span className="class-name">Project</span> <span className="identifier">TimebasedBookings</span> = <span className="keyword">new</span> <span className="class-name">Project</span>() {'{'}
        </div>
        <div className="code-line">
          <span className="line-number">31</span>
          <span className="property-name">        Title</span> = <span className="string">"Timebased Bookings of Services & Products - WordPress Plugin"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">32</span>
          <span className="property-name">        Period</span> = <span className="string">"2022-2023"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">33</span>
          <span className="property-name">        Description</span> = <span className="string">"WordPress plugin for businesses requiring time-limited bookings and event tickets. Features multiple "</span> +
        </div>
        <div className="code-line">
          <span className="line-number">34</span>
          <span className="string">          "booking types, admin panel, customizable pricing, email notifications, and mobile-responsive forms with "</span> +
        </div>
        <div className="code-line">
          <span className="line-number">35</span>
          <span className="string">          "GDPR compliance."</span>,
        </div>
        <div className="code-line">
          <span className="line-number">36</span>
          <span className="property-name">        Technologies</span> = <span className="string">"PHP, Tailwind CSS, JavaScript, WordPress"</span>
        </div>
        <div className="code-line">
          <span className="line-number">37</span>
          <span className="property-name">    }</span>
        </div>
        <div className="code-line">
          <span className="line-number">38</span>
        </div>
        <div className="code-line">
          <span className="line-number">39</span>
          <span className="comment">    /// &lt;summary&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">40</span>
          <span className="comment">    /// Freecashe ERP-CRM-CMS-eShop platform (10/2015-08/2016)</span>
        </div>
        <div className="code-line">
          <span className="line-number">41</span>
          <span className="comment">    /// &lt;/summary&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">42</span>
          <span className="keyword">    public</span> <span className="class-name">Project</span> <span className="identifier">Freecashe</span> = <span className="keyword">new</span> <span className="class-name">Project</span>() {'{'}
        </div>
        <div className="code-line">
          <span className="line-number">43</span>
          <span className="property-name">        Title</span> = <span className="string">"Freecashe ERP-CRM-CMS-eShop platform"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">44</span>
          <span className="property-name">        Period</span> = <span className="string">"10/2015-08/2016"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">45</span>
          <span className="property-name">        Description</span> = <span className="string">"WordPress Multisite platform for rapid eShop development with integrated payment gateway solution. "</span> +
        </div>
        <div className="code-line">
          <span className="line-number">46</span>
          <span className="string">          "Developed for AlphaBank GR Hackathon, offering warehouse management, CRM, ERP & marketing features."</span>,
        </div>
        <div className="code-line">
          <span className="line-number">47</span>
          <span className="property-name">        Technologies</span> = <span className="string">"WordPress, PHP, MySQL, Payment Gateway Integration"</span>
        </div>
        <div className="code-line">
          <span className="line-number">48</span>
          <span className="property-name">    }</span>
        </div>
        <div className="code-line">
          <span className="line-number">49</span>
        </div>
        <div className="code-line">
          <span className="line-number">50</span>
          <span className="comment">    /// &lt;summary&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">51</span>
          <span className="comment">    /// EasyOnline.gr (07/2010-12/2022)</span>
        </div>
        <div className="code-line">
          <span className="line-number">52</span>
          <span className="comment">    /// &lt;/summary&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">53</span>
          <span className="keyword">    public</span> <span className="class-name">Project</span> <span className="identifier">EasyOnline</span> = <span className="keyword">new</span> <span className="class-name">Project</span>() {'{'}
        </div>
        <div className="code-line">
          <span className="line-number">54</span>
          <span className="property-name">        Title</span> = <span className="string">"EasyOnline.gr"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">55</span>
          <span className="property-name">        Period</span> = <span className="string">"07/2010-12/2022"</span>,
        </div>
        <div className="code-line">
          <span className="line-number">56</span>
          <span className="property-name">        Description</span> = <span className="string">"Personal website for promoting web development & hosting services in Greece, later transformed into an "</span> +
        </div>
        <div className="code-line">
          <span className="line-number">57</span>
          <span className="string">          "open forum for WordPress and web development discussions."</span>,
        </div>
        <div className="code-line">
          <span className="line-number">58</span>
          <span className="property-name">        Technologies</span> = <span className="string">"WordPress, PHP, Web Development"</span>
        </div>
        <div className="code-line">
          <span className="line-number">59</span>
          <span className="property-name">    }</span>
        </div>
        <div className="code-line">
          <span className="line-number">60</span>
          <span className="property-name">}</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
