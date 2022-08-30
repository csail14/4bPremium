import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getTextById } from "../../api/textApi";
import DOMPurify from "dompurify";
import TextEditor from "../../helpers/textEditor";
import { isMobile } from "react-device-detect";
import useMediaQuery from "@mui/material/useMediaQuery";
import { buildI18n } from "../../i18n/index";

const SecondView = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 50vh;
`;
const ViewTitle = styled.h2`
  color: white;
  font-size: 40px;
`;

const MainContainer = styled.div`
  padding-top: 50px;
`;

const BodyView = styled.div`
  display: flex;
`;
const TextContainer = styled.h1`
  display: flex;
  color: white;
  font-size: 20px;
  flex-direction: column;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: auto;
  text-align: justify;
  max-width: 80%;
`;

const SquareInfoTop = styled.div`
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  text-align: left;
  margin: ${isMobile ? "80px" : "50px"} 100px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-decoration: underline;
  text-align: center;
  padding-top: 5px;
`;
const Subtitle = styled.div`
  font-weight: 700;
  font-size: 16px;

  text-align: center;
  padding-top: 5px;
`;
const SquareInfo = styled.div`
  color: white;
  border: 1px solid white;
  border-radius: 12px;
  text-align: left;
  max-width: 500px;
  margin: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  margin: ${isMobile ? "0 100px" : ""};
  padding: ${isMobile ? "30px" : "10px"};
  height: fit-content;
`;
const EditButton = styled.div`
  padding: 20px;
  background-color: grey;
  color: white;
  width: fit-content;
  margin: auto;
  border: solid white 1px;
  margin-bottom: 5px;
  border-radius: 12px;
  cursor: pointer;
`;
const TextEditorContainer = styled.div`
  background-color: white;
  color: black;
`;
const PackDiv = styled.div`
  display: ${(props) => (props.isMobile ? "" : "flex")};
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  justify-content: center;
  padding-bottom: 30px;
`;
const createMarkup = (html) => {
  return {
    __html: DOMPurify.sanitize(html),
  };
};
const Pack = (props) => {
  const [bloc1, setbloc1] = useState("");
  const [bloc2, setbloc2] = useState("");
  const [bloc3, setbloc3] = useState("");
  const [isEditingBloc1, setIsEditingBloc1] = useState("");
  const [isEditingBloc2, setIsEditingBloc2] = useState("");
  const [isEditingBloc3, setIsEditingBloc3] = useState("");

  const i18n = buildI18n(props.lang.value);

  useEffect(() => {
    getTextById(51).then((res) => {
      if (res.text) {
        setbloc1(res.text.text);
      }
    });
    getTextById(61).then((res) => {
      if (res.text) {
        setbloc2(res.text.text);
      }
    });
    getTextById(71).then((res) => {
      if (res.text) {
        setbloc3(res.text.text);
      }
    });
  }, []);

  const isMobile = useMediaQuery(`(max-width:900px)`);

  const handleToggleEditBloc1Mode = () => {
    setIsEditingBloc1(!isEditingBloc1);
  };

  const handleToggleEditBloc2Mode = () => {
    setIsEditingBloc2(!isEditingBloc2);
  };

  const handleToggleEditBloc3Mode = () => {
    setIsEditingBloc3(!isEditingBloc3);
  };

  return (
    <MainContainer>
      <SecondView>
        <ViewTitle>{i18n.t("pack.explication")}</ViewTitle>
        <BodyView>
          {/* {isEditingBloc1 ? (
            <TextEditorContainer>
              <TextEditor
                id={51}
                toggle={handleToggleEditBloc1Mode}
                text={i18n.t("text.commun")}
              />
            </TextEditorContainer>
          ) : ( */}
          <TextContainer
            dangerouslySetInnerHTML={createMarkup(i18n.t("text.commun"))}
          ></TextContainer>
          {/* )} */}
        </BodyView>
        {/* {!isEditingBloc1 &&
          props.user.infos &&
          props.user.infos.role === "admin" && (
            <EditButton onClick={handleToggleEditBloc1Mode}>
              {i18n.t("pack.modif")}
            </EditButton>
          )} */}
      </SecondView>
      <PackDiv isMobile={isMobile}>
        <SquareInfo style={{ marginBottom: "45px" }}>
          <Title>Pack Kids</Title>
          <Subtitle>3€ {i18n.t("pack.mois")}</Subtitle>
          {/* {isEditingBloc2 ? (
            <TextEditorContainer>
              <TextEditor
                id={61}
                toggle={handleToggleEditBloc2Mode}
                text={bloc2}
              />
            </TextEditorContainer>
          ) : ( */}
          <div
            className="preview"
            dangerouslySetInnerHTML={createMarkup(i18n.t("text.kids"))}
          ></div>
          {/* )} */}
          {/* {!isEditingBloc2 &&
            props.user.infos &&
            props.user.infos.role === "admin" && (
              <EditButton onClick={handleToggleEditBloc2Mode}>
                {i18n.t("pack.modif")}
              </EditButton>
            )} */}
        </SquareInfo>
        <SquareInfo style={{ marginBottom: "45px" }}>
          <Title>Pack Family</Title>
          <Subtitle>5€ {i18n.t("pack.mois")}</Subtitle>
          {/* {isEditingBloc3 ? (
            <TextEditorContainer>
              <TextEditor
                id={71}
                toggle={handleToggleEditBloc3Mode}
                text={bloc3}
              />
            </TextEditorContainer>
          ) : ( */}
          <div
            className="preview"
            dangerouslySetInnerHTML={createMarkup(i18n.t("text.family"))}
          ></div>
          {/* )}
          {!isEditingBloc3 &&
            props.user.infos &&
            props.user.infos.role === "admin" && (
              <EditButton onClick={handleToggleEditBloc3Mode}>
                {i18n.t("pack.modif")}
              </EditButton>
            )} */}
        </SquareInfo>
      </PackDiv>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    lang: store.lang,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pack);
