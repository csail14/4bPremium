import React from "react";
import { connect } from "react-redux";
import { forgotPassword } from "../../api/userApi";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { buildI18n } from "../../i18n/index";

const MainContainer = styled.main``;
const Title = styled.p`
  color: white;
  font-size: 40px;
  margin: 0 5px;
`;
class AskNewPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isMobile: false,
      text: "",
    };
  }

  i18n = buildI18n(this.props.lang.value);

  componentDidMount = () => {
    window.addEventListener("resize", this.handleResize);
  };
  handleResize = () => {
    if (window.innerWidth < 720) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };
  onchangeEmail = (value) => {
    this.setState({ email: value });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.email !== "") {
      let data = {
        email: this.state.email,
      };
      forgotPassword(data).then((res) => {
        this.setState({ text: "" });
        console.log(res);
        if (res.status === 200) {
          window.alert("Un email vous a été envoyé");
        } else {
          this.setState({
            text: this.i18n.t("error.reessayer"),
          });
        }
      });
    } else {
      this.setState({ text: this.i18n.t("desktopError.noMail") });
    }
  };
  render() {
    return (
      <MainContainer>
        <Title> {this.i18n.t("desktopLogin.mail")} </Title>

        <Form className={`registerForm ${isMobile ? "" : "desktop-form"}`}>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Control
              onChange={(e) => this.onchangeEmail(e.currentTarget.value)}
              type="password"
            />
          </Form.Group>

          <Button
            onClick={this.onSubmitForm}
            style={{ marginTop: 15 }}
            variant="primary"
            type="submit"
          >
            {this.i18n.t("login.send")}
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
    lang: store.lang,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AskNewPassword);
