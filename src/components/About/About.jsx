import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import Tilt from 'react-tilt';


const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Row className="about-wrapper">
          <Col md={3} sm={6}>
            <Fade bottom duration={1000} delay={600} distance="30px">
             
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="40px">
            <div className="about-wrapper__info">
                <p className="about-wrapper__info-text" align="center">
                  {paragraphOne ||
                    ''} a specialist Organisational Development and Business Psychology consultancy based in Melbourne, Australia.
                </p>
             <p><i className="fa fa-times fa-1x" aria-hidden="true" /></p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    ''} with our clients to develop tailored, expert solutions across Assessment, Leadership & Team Performance, Wellbeing and Career that are aligned with strategy.
                </p>
                <p><i className="fa fa-times fa-1x" aria-hidden="true" /></p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || ''} that awesome teams and organisational cultures are best built by attending effectively, thoughtfully and persistently to these elements.
                </p>
               
              </div>
              <Title title="" />
              </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;