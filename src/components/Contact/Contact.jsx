import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { info, cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="CONTACT US" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
            <p>
                          {info ||
                            ' '}
                        </p>
              {cta || 'Would you like to work with us? Great!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:astone@ss.com` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's chat"}
            </a>
            
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
