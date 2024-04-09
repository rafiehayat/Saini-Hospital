import { React } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="container-fluid service pt-4 mt-4 py-5">
        <div className="container pt-4 mt-4 py-5">
          <div className="section-title text-left mb-5 wow fadeInUp" data-wow-delay="0.2s">
            <img src="img/mmr.jpg" className="img-fluid rounded w-100 py-3" alt="xx" />

            <h1 className="display-3 mb-4">MMR vaccine</h1>
            <p>MMR vaccine can prevent measles, mumps, and rubella.</p>

            <p>Before vaccines, these diseases were very common in the United States, especially among children</p>
            <ul>
              <li>
                <p><strong>MEASLES</strong>(<strong>M</strong>) can cause fever, cough, runny nose, and red, watery eyes, commonly followed by a rash that covers the whole body. It can lead to seizures (often associated with fever), ear infections, diarrhea, and pneumonia. Rarely, measles can cause brain damage or death.</p>
              </li>
              <li>
                <p><strong>MUMPS</strong>(<strong>M</strong>) can cause fever, headache, muscle aches, tiredness, loss of appetite, and swollen and tender salivary glands under the ears. It can lead to deafness, swelling of the brain and/or spinal cord covering, painful swelling of the testicles or ovaries, and, very rarely, death.</p>
              </li>
              <li>
                <p><strong>RUBELLA</strong>(<strong>R</strong>) can cause fever, sore throat, rash, headache, and eye irritation. It can cause arthritis in up to half of teenage and adult women. If a woman gets rubella while she is pregnant, she could have a miscarriage or her baby could be born with serious birth defects. </p>
              </li>
            </ul>
            <p>Most people who are vaccinated with MMR will be protected for life. Vaccines and high rates of vaccination have made these diseases much less common in the United States.</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Services