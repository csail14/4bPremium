import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { config } from "../../config";
import { connect } from "react-redux";
import { getVideo } from "../../api/videoApi";
import { buildI18n } from "../../i18n/index";
import { isMobile } from "react-device-detect";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ipad from "../../assets/ipad.png";
import ReactPlayer from "react-player";
import appStore from "../../assets/apple-app-store-icon.png";
import androidStore from "../../assets/android-app-store.png";
import motivation from "../../assets/motivation.png";
import concentration from "../../assets/concentration.png";
import efficiency from "../../assets/efficiency.png";
import success from "../../assets/success.png";

const MainContainer = styled.body`
  background-color: transparent;
`;

const FirstView = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const SecondView = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const MainTitle = styled.h1`
  color: white;
  font-size: 45px;

  padding: ${(props) => (props.isMobile ? "10px 0px 40px 0px" : "0px 80px")};
`;

const TextContainer = styled.h1`
  display: flex;
  color: white;
  flex-direction: column;
  padding: 20px;
  margin: auto;
  font-size: 20px;
  text-align: ${(props) => (props.isMobile ? "center" : "justify")};
  max-width: ${(props) => (props.isMobile ? "" : "32%")};
`;
const ImageContainer = styled.h1`
  display: flex;
  color: white;
  flex-direction: column;
  padding: 20px;
  margin: auto;
`;
const TitleContainer = styled.h1`
  display: flex;
  color: white;
  flex-direction: column;
  padding: 20px;
  margin: auto;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  text-align: left;
  font-size: 26px;
  text-align: center;
`;

const ViewTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

const BodyView = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
`;

const GoToQG = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: ${(props) => (props.isMobile ? "110px" : "40px")};
  width: ${(props) => (props.isMobile ? "110px" : "40px")};
  background-color: yellow;
  border-radius: 50%;
  position: absolute;
  font-size: ${(props) => (props.isMobile ? "40px" : "20px")};
  bottom: ${(props) => (props.isMobile ? "" : "10px")};
  top: ${(props) => (props.isMobile ? "550px" : "")};
  left: ${(props) => (props.isMobile ? "20px" : "10px")};
  cursor: pointer;
`;

const FreeTrialContainer = styled.div`
  color: white;
  font-size: ${(props) => (props.isMobile ? "22px" : "22px")};
  text-decoration: underline;
  margin-bottom: 15px;
`;

const Home = (props) => {
  const i18n = buildI18n(props.lang.value);
  const [videoUrl, setVideoUrl] = useState(null);
  useEffect(() => {
    getVideo(741).then((res) => {
      if (res.status === 200) {
        setVideoUrl(config.video_url + res.result[0].url);
      } else {
        console.log("error", res);
      }
    });
  });
  return (
    <MainContainer>
      <FirstView isMobile={isMobile}>
        <TitleContainer>
          <MainTitle isMobile={isMobile}>
            <div style={{ fontSize: "45px", fontWeight: 700 }}>
              {i18n.t("home.brain")}
            </div>
            <h3>{i18n.t("home.art")}</h3>
          </MainTitle>
          <MenuContainer>
            {i18n.t("home.improve")}

            <HashLink
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
                textAlign: "center",
              }}
              to="#concentration"
            >
              {i18n.t("home.concentration")}
            </HashLink>

            <HashLink
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
                textAlign: "center",
              }}
              to="#motivation"
            >
              {i18n.t("home.motivation")}
            </HashLink>

            <HashLink
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
                textAlign: "center",
              }}
              to="#efficiency"
            >
              {i18n.t("home.efficiency")}
            </HashLink>
          </MenuContainer>
        </TitleContainer>
        <ImageContainer>
          {" "}
          <img
            src={ipad}
            alt={"imageipad"}
            style={{
              maxHeight: "250px",
              maxWidth: "90%",
              margin: "15px",
              width: isMobile ? "fit-content" : "auto",
            }}
          />
          {!isMobile && (
            <FreeTrialContainer>
              <Link style={{ color: "white" }} to="/register">
                {i18n.t("home.trial")}
              </Link>
            </FreeTrialContainer>
          )}
          {!isMobile && (
            <div>
              <button
                style={{
                  margin: 5,
                  padding: 0,
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                }}
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/us/app/4bpremium/id1571508135?itsct=apps_box_link&itscg=30200",
                    "_blank" // <- This is what makes it open in a new window.
                  )
                }
              >
                <img
                  alt="apple"
                  style={{
                    margin: 0,
                    padding: 0,
                    borderRadius: "12px",
                    maxWidth: "200px",
                    cursor: "pointer",
                  }}
                  src={appStore}
                />
              </button>
              <button
                style={{
                  margin: 5,
                  backgroundColor: "transparent",
                  padding: 0,
                  borderRadius: "12px",
                }}
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.premium4b.app",
                    "_blank" // <- This is what makes it open in a new window.
                  )
                }
              >
                <img
                  alt="android"
                  style={{
                    margin: 0,
                    padding: 0,
                    borderRadius: "12px",
                    height: "58px",
                    cursor: "pointer",
                  }}
                  src={androidStore}
                />
              </button>
            </div>
          )}
        </ImageContainer>
      </FirstView>

      <FirstView id="presentation">
        <ReactPlayer
          className="react-player"
          url={videoUrl}
          controls={true}
          playing={false}
          width="65%"
          height="50%"
        />
      </FirstView>

      <SecondView id="concentration">
        <ViewTitle> {i18n.t("home.artConcentration")}</ViewTitle>
        <BodyView isMobile={isMobile}>
          <TextContainer isMobile={isMobile}>
            <p>{i18n.t("home.neuro")}</p>
            <p> {i18n.t("home.built")}</p>
            <p>{i18n.t("home.possible")}</p>
          </TextContainer>
          <TextContainer isMobile={isMobile}>
            {" "}
            <img
              src={concentration}
              alt="concentration"
              style={{
                maxHeight: isMobile ? "200px" : "550px",
                borderRadius: "20%",
                margin: 15,
              }}
            />
          </TextContainer>
        </BodyView>
      </SecondView>
      <SecondView id="motivation">
        <ViewTitle>{i18n.t("home.artMotivation")}</ViewTitle>
        <BodyView isMobile={isMobile}>
          <TextContainer isMobile={isMobile}>
            {" "}
            <img
              src={motivation}
              alt="concentration"
              style={{
                maxHeight: isMobile ? "200px" : "450px",
                borderRadius: "20%",
                margin: 15,
              }}
            />
          </TextContainer>
          <TextContainer isMobile={isMobile}>
            <p>{i18n.t("home.challenge")}</p>
            <p>{i18n.t("home.every")}</p>
            <p> {i18n.t("home.improving")}</p>
          </TextContainer>
        </BodyView>
      </SecondView>
      <SecondView id="efficiency">
        <ViewTitle>{i18n.t("home.artEff")}</ViewTitle>
        <BodyView isMobile={isMobile}>
          <TextContainer isMobile={isMobile}>
            <p>{i18n.t("home.method")}</p>
            <p>{i18n.t("home.universal")}</p>
            <p>{i18n.t("home.personal")}</p>
          </TextContainer>
          <TextContainer isMobile={isMobile}>
            {" "}
            <img
              src={efficiency}
              alt="concentration"
              style={{
                maxHeight: isMobile ? "200px" : "450px",
                borderRadius: "20%",
                margin: 15,
              }}
            />
          </TextContainer>
        </BodyView>
      </SecondView>
      <SecondView id="sucess">
        <ViewTitle>{i18n.t("home.artSuccess")}</ViewTitle>
        <BodyView isMobile={isMobile}>
          <TextContainer isMobile={isMobile}>
            {" "}
            <img
              src={success}
              alt="concentration"
              style={{
                maxHeight: isMobile ? "200px" : "450px",
                maxWidth: "90%",
                borderRadius: "20%",
                margin: 15,
              }}
            />
          </TextContainer>
          <TextContainer isMobile={isMobile}>
            <p>{i18n.t("home.accessible")}</p>
            <p> {i18n.t("home.organ")}</p>
            <p>{i18n.t("home.team")}</p>
          </TextContainer>
        </BodyView>
      </SecondView>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return { lang: store.lang };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
