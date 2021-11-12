import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import HeroImg from '../Image/HeroImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, img, cta } = hero;

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
    <section id="hero" className="jumbotron">
<Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <p className="hero-wrapper__image"> 
       <HeroImg alt="profile picture" filename={img}/></p>
<p>
            <span className="to-about">
          <Link to="about" smooth duration={1000}>
            <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
          </Link>
        </span>            
          </p>

        </Fade>
</Container>
    </section>
  );
};

export default Header;
