import "./About.scss";

const About = () => {
  return (
    <div className="about__section">
      <div className="about-content container content-wrapper">
        <div className="left-side img-wrapper">
          <img src="images/about-bike.jpg" alt="" />
        </div>

        <div className="right-side">
          <div className="content ">
            <div className="headline">
              <span className="line"></span>
              <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur doloremque aspernatur sint recusandae? Iusto sit obcaecati enim, esse, iure dolore nostrum nihil, et repellat minus excepturi officia eos laudantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
