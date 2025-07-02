import React from 'react';

interface VolunteerPosition {
  position: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const VolunteerExperience: React.FC = () => {
  const volunteerPositions: VolunteerPosition[] = [
    {
      position: "Generic Assistant & People Support",
      organization: "Open Doors NGO",
      location: "Rhodes, Greece",
      period: "09/2010 - 09/2017",
      responsibilities: [
        "Assist in handling large groups of people visiting historical places",
        "Informing the visitors about the Landmarks and collecting feedback",
        "Assist in Planning which Historical buildings to be Opened for visit to public",
        "Taking care and organising Opening & Closing of various Historical & Cultural Venues"
      ]
    },
    {
      position: "Medieval Knight & Theatrical Sword Fighter",
      organization: "Various Events & Performances",
      location: "Rhodes, Greece",
      period: "Ongoing",
      responsibilities: [
        "Performing as a medieval knight in historical reenactments and theatrical shows",
        "Demonstrating medieval combat techniques and sword fighting",
        "Educating the public about medieval history and culture",
        "Participating in cultural events and festivals"
      ]
    }
  ];

  // Calculate line numbers for the code block
  let currentLine = 1;
  const getLineNumbers = (count: number) => {
    const start = currentLine;
    currentLine += count;
    return Array.from({ length: count }, (_, i) => start + i);
  };

  // Reset line counter for the main render
  currentLine = 1;
  const lines = getLineNumbers(3); // Lines for the component definition
  const positionLines = volunteerPositions.flatMap((pos, idx) => {
    const startLine = currentLine;
    currentLine += 6 + pos.responsibilities.length; // Lines for each position
    return { ...pos, startLine };
  });

  return (
    <div className="page-content">
      <div className="code-block">
        {/* Component Definition */}
        <div className="code-line">
          <span className="line-number">{lines[0]}</span>
          <span className="keyword">const</span> <span className="identifier">VolunteerExperience</span> = () => {'{'}
        </div>
        <div className="code-line">
          <span className="line-number">{lines[1]}</span>
          <span className="comment">  // Volunteer Experience</span>
        </div>
        <div className="code-line">
          <span className="line-number">{lines[2]}</span>
          <span className="keyword">  const</span> <span className="identifier">volunteerPositions</span> = [
        </div>

        {/* Volunteer Positions */}
        {positionLines.map((pos, idx) => (
          <React.Fragment key={idx}>
            <div className="code-line">
              <span className="line-number">{pos.startLine}</span>
              <span className="property-name">    {'{'}</span>
            </div>
            <div className="code-line">
              <span className="line-number">{pos.startLine + 1}</span>
              <span className="property-name">      position:</span> <span className="string">"{pos.position}"</span>,
            </div>
            <div className="code-line">
              <span className="line-number">{pos.startLine + 2}</span>
              <span className="property-name">      organization:</span> <span className="string">"{pos.organization}"</span>,
            </div>
            <div className="code-line">
              <span className="line-number">{pos.startLine + 3}</span>
              <span className="property-name">      location:</span> <span className="string">"{pos.location}"</span>,
            </div>
            <div className="code-line">
              <span className="line-number">{pos.startLine + 4}</span>
              <span className="property-name">      period:</span> <span className="string">"{pos.period}"</span>,
            </div>
            <div className="code-line">
              <span className="line-number">{pos.startLine + 5}</span>
              <span className="property-name">      responsibilities:</span> [
            </div>
            {pos.responsibilities.map((resp, respIdx) => (
              <div className="code-line" key={`resp-${idx}-${respIdx}`}>
                <span className="line-number">{pos.startLine + 6 + respIdx}</span>
                <span className="string">        "{resp}"{respIdx < pos.responsibilities.length - 1 ? ',' : ''}</span>
              </div>
            ))}
            <div className="code-line">
              <span className="line-number">
                {pos.startLine + 5 + pos.responsibilities.length}
              </span>
              <span className="property-name">      ]</span>
            </div>
            <div className="code-line">
              <span className="line-number">
                {pos.startLine + 6 + pos.responsibilities.length}
              </span>
              <span className="property-name">    {'}'}{idx < positionLines.length - 1 ? ',' : ''}</span>
            </div>
          </React.Fragment>
        ))}

        {/* Closing brackets */}
        <div className="code-line">
          <span className="line-number">
            {positionLines.length > 0 
              ? positionLines[positionLines.length - 1].startLine + 7 + 
                positionLines[positionLines.length - 1].responsibilities.length
              : 4}
          </span>
          <span className="keyword">  ]</span>;
        </div>

        {/* Rendered Content */}
        <div className="volunteer-positions">
          {volunteerPositions.map((position, idx) => (
            <div key={`render-${idx}`} className="volunteer-position">
              <h3>{position.position} - {position.organization}</h3>
              <div className="position-details">
                <span className="location">{position.location}</span>
                <span className="period">{position.period}</span>
              </div>
              <ul className="responsibilities">
                {position.responsibilities.map((resp, respIdx) => (
                  <li key={`resp-render-${idx}-${respIdx}`}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Component closing */}
        <div className="code-line">
          <span className="line-number">
            {positionLines.length > 0 
              ? positionLines[positionLines.length - 1].startLine + 8 + 
                positionLines[positionLines.length - 1].responsibilities.length
              : 5}
          </span>
          <span className="keyword">  return</span> (
        </div>
        <div className="code-line">
          <span className="line-number">
            {positionLines.length > 0 
              ? positionLines[positionLines.length - 1].startLine + 9 + 
                positionLines[positionLines.length - 1].responsibilities.length
              : 6}
          </span>
          <span className="keyword">    &lt;div className=</span><span className="string">"volunteer-container"</span>&gt;
        </div>
        <div className="code-line">
          <span className="line-number">
            {positionLines.length > 0 
              ? positionLines[positionLines.length - 1].startLine + 10 + 
                positionLines[positionLines.length - 1].responsibilities.length
              : 7}
          </span>
          <span className="comment">      {/* Rendered content above */}</span>
        </div>
        <div className="code-line">
          <span className="line-number">
            {positionLines.length > 0 
              ? positionLines[positionLines.length - 1].startLine + 11 + 
                positionLines[positionLines.length - 1].responsibilities.length
              : 8}
          </span>
          <span className="keyword">    &lt;/div&gt;</span>
        </div>
        <div className="code-line">
          <span className="line-number">
            {positionLines.length > 0 
              ? positionLines[positionLines.length - 1].startLine + 12 + 
                positionLines[positionLines.length - 1].responsibilities.length
              : 9}
          </span>
          <span className="keyword">  )</span>;
        </div>
        <div className="code-line">
          <span className="line-number">
            {positionLines.length > 0 
              ? positionLines[positionLines.length - 1].startLine + 13 + 
                positionLines[positionLines.length - 1].responsibilities.length
              : 10}
          </span>
          <span className="keyword">}</span>;
        </div>
      </div>
    </div>
  );
};

export default VolunteerExperience;
