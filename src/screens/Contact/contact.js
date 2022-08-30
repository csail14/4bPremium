import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { isMobile } from "react-device-detect";
import { sendContactMessage } from "../../api/userApi";
import { buildI18n } from "../../i18n/index";

const Contact = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const i18n = buildI18n(props.lang.value);

  const onSubmitForm = () => {
    let data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };

    if (message && email) {
      sendContactMessage(data).then((res) => {
        if (res.status === 200) {
          setError(i18n.t("error.Votre message a bien été envoyé."));
        } else {
          setError(
            this.i18n.t("error.Erreur lors de l'envoi de votre message.")
          );
        }
      });
    } else {
      setEmail(this.i18n.t("desktopError.noMessage"));
    }
  };

  const handleChange = (type, value) => {
    switch (type) {
      case "lastName":
        setLastName(value);
        break;
      case "firstName":
        setFirstName(value);

        break;
      case "email":
        setEmail(value);

        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Form className={`registerForm ${isMobile ? "" : "desktop-form"}`}>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Nom *</Form.Label>
          <Form.Control
            onChange={(e) => handleChange("lastName", e.target.value)}
            type="text"
            placeholder={i18n.t("desktopLogin.nom")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Prénom *</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder={i18n.t("desktopLogin.prenom")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse Email *</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder={i18n.t("desktopLogin.yourmail")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Message *</Form.Label>
          <Form.Control
            type="textArea"
            style={{ height: "200px" }}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder={i18n.t("desktopLogin.message")}
          />
        </Form.Group>

        <Button
          onClick={onSubmitForm}
          style={{ marginTop: 15 }}
          variant="primary"
          type="submit"
        >
          {i18n.t("login.send")}
        </Button>
      </Form>
    </div>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { lang: store.lang };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
