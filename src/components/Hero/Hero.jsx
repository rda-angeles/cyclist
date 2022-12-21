import "./Hero.scss";
import { Button } from "../Button";
const Hero = () => {
  return (
    <div className="hero__section">
      <div className="hero-content container">
        <div className="left-side">
          <h1 className="hero-title">Get to know more about bikes.</h1>

          <p className="hero-subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur exercitationem fuga quidem corporis asperiores laborum
            veniam doloremque dolore id error!
          </p>

          <Button buttonStyle="btn--secondary" buttonSize="btn-medium">
            Learn More
          </Button>
        </div>
        <div className="right-side">
          <img src="images/bike1.jpg" alt="Bicycle" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
