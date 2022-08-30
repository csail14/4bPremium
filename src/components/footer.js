import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { loadLang } from "../actions/lang/langActions";

const CopyrightContainer = styled.div`
  color: white;

  font-size: 12px;
`;
const LangContainer = styled.div`
  display: flex;
  gap: 10%;
  color: white;
  padding: 9px;
  cursor: pointer;
`;
const RightSideContainer = styled.div`
  display: flex;
  alignitems: center;
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
            <RightSideContainer>
              <LangContainer>
                {this.props.lang && this.props.lang.value !== "en" && (
                  <div onClick={() => this.props.loadLang("en")}>EN </div>
                )}
                {this.props.lang && this.props.lang.value !== "es" && (
                  <div onClick={() => this.props.loadLang("es")}> ES</div>
                )}
                {this.props.lang && this.props.lang.value !== "fr" && (
                  <div onClick={() => this.props.loadLang("fr")}>FR</div>
                )}
              </LangContainer>{" "}
              <Nav.Link>
                <Link className="header-link" to="/cgu">
                  CGU
                </Link>
              </Nav.Link>
            </RightSideContainer>
          </Container>
        </Navbar>
      </header>
    );
  }
}

const mapDispatchToProps = { loadLang };

const mapStateToProps = (store) => {
  return { lang: store.lang };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
