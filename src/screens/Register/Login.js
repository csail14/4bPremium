import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateInputField } from "../../helpers/form-validator";
import { isMobile } from "react-device-detect";
import { buildI18n } from "../../i18n/index";
import { loginUser } from "../../api/userApi";

const Title = styled.p`
  color: white;
  font-size: 40px;
  margin: 0 5px;
`;
const MainContainer = styled.main``;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      error: null,
    };
    this.email = "";
    this.password = "";
  }
  i18n = buildI18n(this.props.lang.value);

  onChangeText(type, text) {
    this[type] = text;
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    let data = {
      email: this.email,
      password: this.password,
    };
    loginUser(data).then((res) => {
      if (res.status === 200) {
        window.localStorage.setItem("4brntoken", res.token);
        this.setState({ redirect: true });
      } else if (res.status === 404) {
        this.setState({ error: res.msg });
      } else if (res.status === 401) {
        this.setState({ error: res.msg });
      } else {
        this.setState({ error: this.i18n.t("error.reessayer") });
      }
    });
  };

  render() {
    return (
      <MainContainer>
        {this.state.redirect && <Redirect to="/account" />}
        <Title>{this.i18n.t("desktopLogin.login")} </Title>
        {this.state.error !== null && (
          <p style={{ color: "red" }}>{this.state.error}</p>
        )}
        <Form className={`registerForm ${isMobile ? "" : "desktop-form"}`}>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Control
              onChange={(e) =>
                this.onChangeText("email", e.currentTarget.value)
              }
              type="text"
              placeholder={this.i18n.t("desktopLogin.yourmail")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Control
              type="password"
              onChange={(e) => {
                this.onChangeText("password", e.currentTarget.value);
              }}
              placeholder={this.i18n.t("desktopLogin.mdp")}
            />
          </Form.Group>

          <Button
            onClick={this.onSubmitForm}
            style={{ marginTop: 15 }}
            variant="primary"
            type="submit"
          >
            {this.i18n.t("header.login")}
          </Button>
        </Form>
      </MainContainer>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {
    lang: store.lang,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
