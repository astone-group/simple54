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
          <Title title="Our Expertise & Passion"/>
          <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={800}
                    delay={300}
                    distance="50px"
                  >
        <p><mark>Psychometric Assessment</mark></p>
        <p><mark>Leadership Coaching and Development</mark></p>
        <p><mark>Team Performance and Dynamics</mark></p>
        <p><mark>360s and other Assessments for Development</mark></p>
        <p><mark>Positive Mental Health and Wellbeing</mark></p>
        <p><mark>Career Alignment and Transition</mark></p>
</Fade>
        
        </div>
                </Container>
    </section>
  );
};

export default Projects;
