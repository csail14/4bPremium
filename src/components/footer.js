import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const CopyrightContainer = styled.div`
  color: white;
  font-size: 12px;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="footer">
        <Navbar>
          <Container>
            <CopyrightContainer>© Copyright 2021 4bPremium</CopyrightContainer>
            <Nav.Link>
              <Link className="header-link" to="/cgu">
                CGU
              </Link>
            </Nav.Link>
          </Container>
        </Navbar>
      </header>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
