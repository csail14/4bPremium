import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import { buildI18n } from "../i18n/index";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  i18n = buildI18n("fr");

  render() {
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
                    {this.i18n.t("header.accueil")}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="header-link" to="#presentation">
                    {this.i18n.t("header.presentation")}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="header-link" to="/pack">
                    {this.i18n.t("header.pack")}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="header-link" to="/warroom">
                    {this.i18n.t("header.qg")}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="header-link" to="/account">
                    {this.i18n.t("header.compte")}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="header-link" to="/contact">
                    {this.i18n.t("header.contact")}
                  </Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link>
                  <Link className="header-link" to="/Logout">
                    {this.i18n.t("header.logout")}
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link className="header-link" to="/register">
                    {this.i18n.t("header.register")}
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
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
