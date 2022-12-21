import "./MostViewed.scss";
import { Button } from "../Button";
const MostViewed = ({ bgImg, headline, subtitle }) => {
  return (
    <div
      className="mostviewed__section"
      style={
        bgImg ? { backgroundImage: `url(${bgImg})` } : { backgroundImage: "" }
      }
    >
      <div className="container">
        <h1>{headline}</h1>
        <h3>{subtitle}</h3>

        <Button buttonStyle="btn--secondary">Check it out!</Button>
      </div>
    </div>
  );
};

export default MostViewed;
