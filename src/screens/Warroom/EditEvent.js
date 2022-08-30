import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { validateInputField } from "../../helpers/form-validator";
import { modifyEvent, getAllEvent } from "../../api/eventApi";
import moment from "moment";
import { buildI18n } from "../../i18n/index";

const Title = styled.div`
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  height: 30px;
`;

const MainContainer = styled.div`
  text-align: center;
  padding: 20px;
  padding-left: 60px;
  padding-right: 60px;
`;

const EditEventComp = (props) => {
  const [title, setTitle] = useState(props.event.title);
  const [comment, setComment] = useState(props.event.comment);
  const [catSelected, setCatSelected] = useState(1);
  const [value, onChange] = useState(new Date(props.event.date));
  const [errorMessage, setErrorMessage] = useState("");
  const [duration, setDuration] = useState(props.event.duration);
  const [notifTime, setnotifTime] = useState(props.event.notifTime);

  const i18n = buildI18n(props.lang.value);

  const onSubmitForm = () => {
    let index = props.user.current_subuser;
    let data = {
      title: title,
      comment: comment,
      date: value,
      theme_id: catSelected,
      user_id: props.user.infos.id,
      subuser_id: props.user.subuser[index].id,
      notifTime: notifTime,
      duration: duration,
    };

    setErrorMessage("");
    let error = formValidator();

    if (error === "") {
      modifyEvent(data, props.event.id).then((res) => {
        if (res.status === 200) {
          props.setEventPopUp(false);
          props.setShowModal(false);
          getAllEvent(props.user.subuser[index].id).then((resp) => {
            if (resp.status === 200) {
              props.loadEvent(resp.result);
            }
          });
        } else {
          setErrorMessage(i18n.t("error.reessayer"));
        }
      });
    }
  };

  const formValidator = () => {
    let error = false;
    error = validateInputField("title", "string", title);
    if (error !== "") {
      setErrorMessage(i18n.t("error.titre"));
      return error;
    }
    return "";
  };

  useEffect(() => {
    let catId = props.theme.allTheme.filter(
      (item) => item.id == props.event.theme_id
    )[0].id;
    setCatSelected(catId);
  }, []);

  return (
    <MainContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm();
        }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          placeholder="Titre"
          type="text"
          value={title}
          name="name"
          style={{ padding: "10px" }}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <div
          style={{ display: "flex", margin: "20px", alignItems: "baseline" }}
        >
          <p style={{ display: "flex", marginRight: "10px" }}>
            {" "}
            {i18n.t("application.categorie")}
          </p>
          <select
            value={catSelected}
            onChange={(e) => setCatSelected(parseInt(e.currentTarget.value))}
          >
            {props.theme.allTheme.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <TextField
          id="datetime-local"
          type="datetime-local"
          defaultValue={
            moment(props.event.date).format("YYYY-MM-DD") +
            "T" +
            new Date(props.event.date).toLocaleTimeString()
          }
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div
          style={{ display: "flex", margin: "20px", alignItems: "baseline" }}
        >
          <p style={{ display: "flex", marginRight: "10px" }}>
            {" "}
            {i18n.t("component.Durée :")}
          </p>
          <select
            value={duration}
            onChange={(e) => setDuration(parseInt(e.currentTarget.value))}
          >
            <option value={20}>20 minutes</option>;
            <option value={30}>30 minutes</option>;
            <option value={40}>40 minutes</option>;
          </select>
        </div>
        <textarea
          placeholder={i18n.t("component.Commentaire")}
          value={comment}
          type="text"
          name="name"
          onChange={(e) => setComment(e.currentTarget.value)}
        />
        {props.user.infos.notification == 1 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "baseline",
              flexWrap: "wrap",
              marginTop: "5px",
            }}
          >
            <p> {i18n.t("component.M'alerter")} </p>
            <input
              style={{ width: "30px", textAlign: "center", margin: "0 10px" }}
              value={"" + notifTime}
              onChange={(e) => setnotifTime(e.currentTarget.value)}
            />
            <p>{i18n.t("component.min avant")} </p>
          </div>
        )}
        <p style={{ color: "red" }}>{errorMessage}</p>
        <input
          style={{
            margin: "10px",
            height: "40px",
            borderRadius: "12px",
          }}
          type="submit"
          value={i18n.t("register.save")}
        />
      </form>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {
    lang: store.lang,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEventComp);
