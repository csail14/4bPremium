import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import { buildI18n } from "../i18n/index";
import { HashLink } from "react-router-hash-link";

const Header = (props) => {
  const i18n = buildI18n(props.lang.value);
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/home">
              <img style={{ maxWidth: "70px" }} src={logo} alt="logo_amala" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="header-link" to="/home">
                  {i18n.t("header.accueil")}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <HashLink className="header-link" to="/home#presentation">
                  {i18n.t("header.presentation")}
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/pack">
                  {i18n.t("header.pack")}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/warroom">
                  {i18n.t("header.qg")}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/account">
                  {i18n.t("header.compte")}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="header-link" to="/contact">
                  {i18n.t("header.contact")}
                </Link>
              </Nav.Link>
            </Nav>
            {props.user && props.user.isLogged ? (
              <Nav>
                <Nav.Link>
                  <Link className="header-link" to="/Logout">
                    {i18n.t("header.logout")}
                  </Link>
                </Nav.Link>{" "}
              </Nav>
            ) : (
              <Nav>
                <Nav.Link>
                  <Link className="header-link" to="/login">
                    {i18n.t("header.login")}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="header-link" to="/register">
                    {i18n.t("header.register")}
                  </Link>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { user: store.user, lang: store.lang };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
