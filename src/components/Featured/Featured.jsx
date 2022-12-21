import "./Featured.scss";
import { Button } from "../Button";

const Featured = ({ featured }) => {
  return (
    <div className="featured__section">
      <div className="featured-content container">
        {featured.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.title}</h1>

              <div className="cards">
                {item.bicycles.map((bike) => {
                  return (
                    <div className="card-wrapper" key={bike.id}>
                      <div className="card-content">
                        <img src={bike.img} alt="" />
                        <div className="card-details">
                          <h3>{bike.bike}</h3>
                          <p>{bike.desc}</p>

                          <Button>Read More</Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Featured;
