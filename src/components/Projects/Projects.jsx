import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="WHAT WE LOVE TO DO"/>
          <Title title="{ our expertise and passion }"/>
          <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={800}
                    delay={300}
                    distance="50px"
                  >
            </Fade>
        
          {projects.map((project) => {
            const { title, title2, title3, title4, title5, title6, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={800}
                    delay={300}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <h3 className="project-wrapper__text-title">{title2 || 'Project Title'}</h3>
                      <h3 className="project-wrapper__text-title">{title3 || 'Project Title'}</h3>
                      <h3 className="project-wrapper__text-title">{title4 || 'Project Title'}</h3>
                      <h3 className="project-wrapper__text-title">{title5 || 'Project Title'}</h3>
                      <h3 className="project-wrapper__text-title">{title6 || 'Project Title'}</h3>
                      

                      <p>If you are interested in the work that we do and you have something in mind or a current challenge, even something small, we are happy to chat and to help you however we can 🖤</p>

                    </div>
                  </Fade>
                </Col>

              </Row>
);

          })}
        </div>
                </Container>
    </section>
  );
};

export default Projects;
