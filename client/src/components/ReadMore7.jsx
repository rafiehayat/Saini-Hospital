import { React } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="container-fluid service pt-4 mt-4 py-5">
        <div className="container pt-4 mt-4 py-5">
          <div className="section-title text-left mb-5 wow fadeInUp" data-wow-delay="0.2s">
            <img src="img/pcv13.jpg" className="img-fluid rounded w-100 py-3" alt="xx" />

            <h1 className="display-3 mb-4">PNEUMOCOCCAL Vaccine</h1>
            <p>Pneumococcal disease is any type of infection caused by Streptococcus pneumoniae bacteria. It's a common cause of ear infections, pneumonia and bloodstream infections.</p>

            <p>It gives immunity to the 13 different strains of pneumococcal bacteria that cause the most serious infections in children.</p>
            <p>Four doses of PCV13 are recommended. They're given at:</p>
            <ul>
              <li>2 months old</li>
              <li>4 months old</li>
              <li>6 months old</li>
              <li>Between 12 and 15 months old</li>
            </ul>
            <p>If your child misses a shot or starts the PCV13 series later, he should still get the vaccine.</p>

            <h2>Things to Tell Your Doctor Before Giving the Vaccine</h2>
            <p>If any of the following conditions have occurred, inform your doctor before the vaccine is administered to your baby:</p>

            <ul>
              <li>If your baby has been sick, or has experienced high fever</li>
              <li>Previous allergic reactions to a medicine or vaccine</li>
              <li>If your baby has haemophilia, or bleeds more than normal</li>
              <li>If it has been pointed out that your child has a weak immune system</li>
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Services