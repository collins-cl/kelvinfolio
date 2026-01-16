import "../hero/Hero.scss";
import Topbar from "../topbar/Topbar";

const Hero = () => {
  return (
    <div id="hero" className="hero-containter">
      <div className="container">
        <Topbar />
      </div>

      <div className="job-abbr">
        <p>CIV/CSE</p>
      </div>
    </div>
  );
};

export default Hero;
