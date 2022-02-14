import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { changePassword } from "../../api/userApi";
import styled from "styled-components";
import { buildI18n } from "../../i18n/index";
import { isMobile } from "react-device-detect";

const MainContainer = styled.main``;
const Title = styled.p`
  color: white;
  font-size: 40px;
  margin: 0 5px;
`;
class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      secondNewpassword: "",
      text: "",
    };
  }

  i18n = buildI18n(this.props.lang.value);

  onchangeNewPassword = (value) => {
    this.setState({ newPassword: value });
  };

  onchangeSecondNewPassword = (value) => {
    this.setState({ secondNewpassword: value });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    let key_id = this.props.match.params.key_id;
    if (
      this.state.newPassword !== "" &&
      this.state.newPassword === this.state.secondNewpassword
    ) {
      let data = {
        password1: this.state.newPassword,
        password2: this.state.secondNewpassword,
      };
      changePassword(data, key_id).then((res) => {
        if (res.status === 200) {
          this.setState({ text: this.i18n.t("desktopError.modifmdp") });
        }
      });
    } else {
      this.setState({ text: this.i18n.t("desktopError.noEgal") });
    }
  };
  render() {
    return (
      <MainContainer>
        <Title>{this.i18n.t("desktopLogin.modifmdp")} </Title>

        <Form className={`registerForm ${isMobile ? "" : "desktop-form"}`}>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>{this.i18n.t("desktopLogin.newmdp")}</Form.Label>
            <Form.Control
              onChange={(e) => this.onchangeNewPassword(e.currentTarget.value)}
              type="password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>{this.i18n.t("desktopLogin.repeatmdp")}</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) =>
                this.onchangeSecondNewPassword(e.currentTarget.value)
              }
            />
          </Form.Group>

          <Button
            onClick={this.onSubmitForm}
            style={{ marginTop: 15 }}
            variant="primary"
            type="submit"
          >
            {this.i18n.t("register.save")}
          </Button>
          {this.state.text !== "" && <p className="text">{this.state.text} </p>}
        </Form>
      </MainContainer>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    lang: store.lang.value,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);
