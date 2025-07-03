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
        <pre className="code-visualization">
          {`const PersonalProjects = () => {
  // Personal Software Projects
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

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title} <span className="year">({project.year})</span></h3>
          <p className="project-description">{project.description}</p>
          <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
        </div>
      ))}
    </div>
  );
};`}
        </pre>
      </div>
      
      {/* Actual rendered content */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project">
            <h3>{project.title} <span className="year">({project.year})</span></h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
