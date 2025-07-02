import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "Ask Theodor - Al-Powered Expert Assistant Platform",
      year: "2024",
      description: "Built a sophisticated Al-powered platform with 8 specialized Al agents for various professional domains. " +
        "Features multilingual support (English, German, Greek, Turkish), real-time chat streaming, fine-tuned Al " +
        "models for e-commerce workflows, token-based billing system, and integration with Stripe & PayPal. " +
        "Custom GPT bot focused on ecommerce to help webstore managers and owners."
    },
    {
      title: "Software Architect of \"BeLocal@\" Android app",
      period: "06/2010 - 11/2014",
      description: "Design & develop a unique mobile mapping offline application with POI's and businesses, " +
        "which at the same time was used also as a \"multilingual targeting ads delivery platform\""
    },
    {
      title: "Google Cloud Platform Solutions & Services",
      period: "05/2013 - Present",
      description: "Fully experienced with all Google Cloud Platform tools and solutions for everyday use for small, medium " +
        "and enterprise business needs. Since 2011, I have been yearly renewing my certifications and can assist " +
        "with all Google-related needs including Google Web Masters & Google Online Academy."
    }
  ];

  return (
    <div className="page-content">
      <div className="code-block">
        <div className="code-line">
          <span className="line-number">1</span>
          <span className="comment">// Professional Achievements</span>
        </div>
        <div className="code-line">
          <span className="line-number">2</span>
          <span className="keyword">const</span> <span className="identifier">achievements</span> = [
        </div>
        
        {achievements.map((achievement, index) => (
          <React.Fragment key={index}>
            <div className="code-line">
              <span className="line-number">{index * 10 + 3}</span>
              <span className="property-name">  {'{'}</span>
            </div>
            <div className="code-line">
              <span className="line-number">{index * 10 + 4}</span>
              <span className="property-name">    title</span>: <span className="string">"{achievement.title}"</span>,
            </div>
            {achievement.year ? (
              <div className="code-line">
                <span className="line-number">{index * 10 + 5}</span>
                <span className="property-name">    year</span>: <span className="string">"{achievement.year}"</span>,
              </div>
            ) : (
              <div className="code-line">
                <span className="line-number">{index * 10 + 5}</span>
                <span className="property-name">    period</span>: <span className="string">"{achievement.period}"</span>,
              </div>
            )}
            <div className="code-line">
              <span className="line-number">{index * 10 + 6}</span>
              <span className="property-name">    description</span>: <span className="string">"{achievement.description}"</span>
            </div>
            <div className="code-line">
              <span className="line-number">{index * 10 + 7}</span>
              <span className="property-name">  {'}'}{index < achievements.length - 1 ? ',' : ''}</span>
            </div>
            {index < achievements.length - 1 && (
              <div className="code-line">
                <span className="line-number">{index * 10 + 8}</span>
              </div>
            )}
          </React.Fragment>
        ))}
        
        <div className="code-line">
          <span className="line-number">{achievements.length * 10 + 3}</span>
          <span className="property-name">]</span>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
