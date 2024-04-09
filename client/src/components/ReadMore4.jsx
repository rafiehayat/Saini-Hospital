import { React } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="container-fluid service pt-4 mt-4 py-5">
        <div className="container pt-4 mt-4 py-5">
          <div className="section-title text-left mb-5 wow fadeInUp" data-wow-delay="0.2s">
            <h1 className="display-3 mb-4">Typhoid Vaccine</h1>
            <img src="img/typhoid.jpg" className="img-fluid rounded w-100 py-3" alt="xx" />

            <h2>What is Typhoid?</h2>
            <p>Typhoid is a highly contagious infection caused by eating food or water contaminated by the bacteria Salmonella enterica serovar Typhi. Typhoid is common in parts of the world that have poor sanitation and limited access to clean water.</p>

            <h2>Who is at risk from Typhoid?     </h2>
            <p>Worldwide, children are at most at risk of developing typhoid fever because their body&rsquo;s natural defences against infection and illness is still developing. However, children experience milder symptoms compared with adults.</p>

            <h2>What are the symptoms?</h2>
            <p>Symptoms of typhoid fever usually develop 1 or 2 weeks after a person becomes infected. The main symptoms are:</p>
            <ul>
              <li>persistent high temperature that gradually increases each day</li>
              <li>headache</li>
              <li>General aches and pains</li>
              <li>Extreme tiredness (fatigue)</li>
              <li>Cough</li>
              <li>Constipation</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services