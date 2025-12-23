import {
  Col,
  Container,
  Nav,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import { ProjectsCard } from "./ProjectCard";
import apple from "../assets/projects/apple.png";
import corianHouse from "../assets/projects/corian house.png";
import magicano from "../assets/projects/magicano.png";
import natours from "../assets/projects/Natours.png";
import raheeq from "../assets/projects/raheeq.png";
import shekoomedia from "../assets/projects/SekooMedia.png";
import zulfa from "../assets/projects/zulfa.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const frontEndProjects = [
    {
      title: "Apple Clone",
      description: "React Application",
      imgUrl: apple,
    },

    {
      title: "Sekoo Media",
      description: "React Application",
      imgUrl: shekoomedia,
    },
  ];
  const backEndProjects = [
    {
      title: "Natours ",
      description: "Node.js + Pug.js Application",
      imgUrl: natours,
    },
  ];
  const wordpressProjects = [
    {
      title: "Corian House",
      description: "WordPress Website",
      imgUrl: corianHouse,
    },
    {
      title: "Magicano",
      description: "WordPress Website",
      imgUrl: magicano,
    },
    {
      title: "Raheeq Academy",
      description: "WordPress Website",
      imgUrl: raheeq,
    },
    {
      title: "Zulfa insttute",
      description: "WordPress Website",
      imgUrl: zulfa,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    In this section, you’ll find a collection of projects I’ve
                    developed, each showcasing my skills in programming, UI
                    design, and problem-solving. These projects highlight my
                    ability to turn ideas into effective technical solutions,
                    with a strong focus on quality and attention to detail to
                    ensure an outstanding user experience. Explore the projects
                    to see my expertise in web development, database management,
                    and system integration.
                  </p>
                </div>
              )}
            </TrackVisibility>

            <TabContainer id="projects-tap" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="flex-lg-row nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Front-End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Back-End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">WordPress</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {frontEndProjects.map((project, index) => {
                      return <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="second">
                  {" "}
                  <Row>
                    {backEndProjects.map((project, index) => {
                      return <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="third">
                  {" "}
                  <Row>
                    {wordpressProjects.map((project, index) => {
                      return <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
