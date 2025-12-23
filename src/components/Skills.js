import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I specialize in building modern web applications using the MERN
                stack and WordPress. I focus on writing clean, maintainable
                code, creating responsive designs, and delivering fast, scalable
                solutions with great user experience.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>React Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Node.js & Express</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>MongoDB Databases</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Pug.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Three.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Gsap</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>WordPress Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Clean Code</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
