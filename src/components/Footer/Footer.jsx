import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
<p> </p>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} {''}
        </p>
        <h3>ODx</h3>
        <i className="fa fa-hand-peace-o fa-2x" aria-hidden="true" />
        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
