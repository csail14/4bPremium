import React from "react";
import { connect } from "react-redux";
import { saveUser } from "../../api/userApi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateInputField } from "../../helpers/form-validator";
import { isMobile } from "react-device-detect";
import { buildI18n } from "../../i18n/index";

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      lang: "fr",
      stripe_id: null,
      isPaid: false,
      isCGU: false,
    };
  }
  i18n = buildI18n(this.props.lang.value);

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ error: "" });
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
      lang: "FR",
      stripe_id: null,
      isPaid: false,
    };
    let error = this.formValidator(data);
    if (error === "") {
      saveUser(data).then((res) => {
        if (res.status === 501) {
          this.setState({
            error: this.i18n.t("desktopRegister.already"),
          });
        } else if (res.status === 200) {
          this.clearform();
          this.setState({
            error: this.i18n.t("desktopRegister.rdv"),
          });
        } else {
          this.setState({
            error: this.i18n.t("desktopRegister.error"),
          });
        }
      });
    }
  };

  clearform = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      passwordConfirm: "",
      password: "",
    });
  };

  handleChange = (type, value) => {
    switch (type) {
      case "lastName":
        this.setState({ lastName: value });
        break;
      case "firstName":
        this.setState({ firstName: value });

        break;
      case "email":
        this.setState({ email: value });
        break;
      case "password":
        this.setState({ password: value });
        break;
      case "confirmPassword":
        this.setState({ passwordConfirm: value });
        break;

      default:
        break;
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      isCGU: value,
    });
  };

  formValidator = (data) => {
    let error = false;

    for (let key in data) {
      error = validateInputField(key, "string", data[key]);
      if (error !== "") {
        this.setState({ error: error });

        return error;
      }
    }
    if (validateInputField("mail", "email", data.email) !== "") {
      this.setState({
        error: validateInputField("mail", "email", data.email, this.i18n),
      });
      return validateInputField("email", "email", data.email);
    }
    if (data.password !== data.passwordConfirm) {
      this.setState({
        error: this.i18n.t("desktopRegister.errorMdp"),
      });
      return this.i18n.t("desktopRegister.errorMdp");
    }
    return "";
  };

  render() {
    return (
      <MainContainer>
        <Title>{this.i18n.t("desktopRegister.create")} </Title>
        {this.state.error !== null && (
          <p style={{ color: "red" }}>{this.state.error}</p>
        )}
        <Form className={`registerForm ${isMobile ? "" : "desktop-form"}`}>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Nom *</Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange("lastName", e.target.value)}
              type="text"
              placeholder="Entrer votre nom"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Prénom *</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => this.handleChange("firstName", e.target.value)}
              placeholder="Entrer votre prénom"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse Email *</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => this.handleChange("email", e.target.value)}
              placeholder="Entrer votre email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de passe *</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => this.handleChange("password", e.target.value)}
              placeholder="Entrer votre mot de passe"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirmation du mot de passe *</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) =>
                this.handleChange("confirmPassword", e.target.value)
              }
              placeholder="Entrer votre mot de passe"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label={this.i18n.t("desktopRegister.accepte")}
            />
          </Form.Group>

          <Button
            onClick={this.onSubmitForm}
            style={{ marginTop: 15 }}
            variant="primary"
            type="submit"
          >
            Créer mon compte
          </Button>
        </Form>

        {/* <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: isMobile ? "80%" : "",
          }}
          className="b-form"
          onSubmit={(e) => {
            this.onSubmitForm(e);
          }}
        >
          <input
            type="text"
            style={{
              height: isMobile ? "60px" : "",
              fontSize: isMobile ? "35px" : "",
              fontFamily: "Verdana",
            }}
            placeholder={this.i18n.t("desktopLogin.prenom")}
            onChange={(e) => {
              this.setState({ firstName: e.currentTarget.value });
            }}
          />
          <input
            type="text"
            style={{
              height: isMobile ? "60px" : "",
              fontSize: isMobile ? "35px" : "",
              fontFamily: "Verdana",
            }}
            placeholder={this.i18n.t("desktopLogin.nom")}
            onChange={(e) => {
              this.setState({ lastName: e.currentTarget.value });
            }}
          />
          <input
            type="text"
            style={{
              height: isMobile ? "60px" : "",
              fontSize: isMobile ? "35px" : "",
              fontFamily: "Verdana",
            }}
            placeholder={this.i18n.t("desktopLogin.yourmail")}
            onChange={(e) => {
              this.setState({ email: e.currentTarget.value });
            }}
          />

          <input
            type="password"
            placeholder={this.i18n.t("desktopLogin.mdp")}
            style={{
              height: isMobile ? "60px" : "",
              fontSize: isMobile ? "35px" : "",
              fontFamily: "Verdana",
            }}
            onChange={(e) => {
              this.setState({ password: e.currentTarget.value });
            }}
          />
          <input
            type="password"
            style={{
              height: isMobile ? "60px" : "",
              fontSize: isMobile ? "35px" : "",
              fontFamily: "Verdana",
            }}
            placeholder={this.i18n.t("desktopRegister.confirmmdp")}
            onChange={(e) => {
              this.setState({ passwordConfirm: e.currentTarget.value });
            }}
          />
          <div style={{ display: "flex" }}>
            <Link
              to={"/condition"}
              style={{
                color: "white",
                marginTop: "15px",
                fontSize: isMobile ? "35px" : "",
              }}
            >
              {this.i18n.t("desktopRegister.accepte")}
            </Link>
            <input
              style={{ width: "10%" }}
              name="isGoing"
              type="checkbox"
              checked={this.state.isCGU}
              onChange={this.handleInputChange}
            />
          </div>

          <input
            style={{
              height: isMobile ? "60px" : "",
              fontSize: isMobile ? "35px" : "",
            }}
            type="submit"
            value={this.i18n.t("register.save")}
            name="Enregistrer"
          />
        </form> */}
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
