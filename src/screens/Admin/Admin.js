import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import Login from "../Register/Login";
import { isMobile } from "react-device-detect";
import PhotosUploader from "./UploadVideo";
import { addCycle } from "../../api/videoApi";
import { isDOMComponentElement } from "react-dom/test-utils";
import { loadThemeInfo } from "../../actions/theme/themeActions";
import { getAllTheme } from "../../api/themeApi";
import styled from "styled-components";
const MainContainer = styled.main`
  padding-top: 50px;
`;

const Title = styled.main`
  color: white;
  font-size: 40px;
`;

const AgeContainer = styled.div`
  margin: 10px 0;
`;

const VideoTitle = styled.div`
  color: white;
  margin-right: 10px;
  font-size: 20px;
`;

const VideoContainer = styled.div`
  display: flex;
  padding: 5px;
`;

const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
const form = document.querySelector("form");

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      duration: "20",
      category: "1",
      age_min: "",
      age_max: "",
      lang: "FR",
      type: "normal",
      step: 11,
      video: [null, null, null, null, null, null, null, null, null, null, null],
      error: null,
    };
  }
  componentDidMount = () => {
    if (this.props.theme.allTheme.length == 0) {
      getAllTheme().then((res) => {
        this.props.loadThemeInfo(res.result);
      });
    }
  };
  componentDidUpdate = () => {
    if (this.state.video.length != this.state.step) {
      let arr = [];

      for (let i = 0; i < this.state.step; i++) {
        arr.push(null);
      }
      this.setState({ video: arr });
    }
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      duration: this.state.duration,
      theme_id: this.state.category,
      age_min: this.state.age_min,
      age_max: this.state.age_max,
      lang: this.state.lang,
      type: this.state.type,
      video: JSON.stringify(this.state.video),
    };

    if (this.state.video.indexOf(null) == -1) {
      addCycle(data).then((res) => {
        if (res.status == 200) {
          this.setState({ error: "Enregistrement reussi avec succes" });
        } else {
          this.setState({ error: "Une erreur s'est produite." });
        }
      });
    }
  };

  changeVideoID = (index, id) => {
    let array = this.state.video;
    array[index] = id;
    this.setState({ video: array });
  };

  render() {
    return (
      <MainContainer>
        {this.props.user.infos && (
          <Title>
            Bienvenue {this.props.user.infos.firstName} sur votre portail admin
          </Title>
        )}
        {this.state.error !== null && (
          <p style={{ color: "red" }}>{this.state.error}</p>
        )}
        <Form
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center ",
          }}
          className={`registerForm ${isMobile ? "" : "desktop-form"}`}
        >
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label style={{ fontSize: 20 }}>
              Ajouter un nouveau cycle :
            </Form.Label>
            <Form.Control
              onChange={(e) => this.setState({ name: e.currentTarget.value })}
              type="text"
              placeholder="Titre"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Catégorie :</Form.Label>
            {this.props.theme.allTheme && (
              <select
                value={this.state.category}
                onChange={(e) => {
                  this.setState({
                    category: e.currentTarget.value,
                    step: this.props.theme.allTheme.filter(
                      (item) => item.id == e.currentTarget.value
                    )[0].step,
                  });
                }}
              >
                {this.props.theme.allTheme.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </select>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Langue :</Form.Label>
            <select
              value={this.state.lang}
              onChange={(e) => this.setState({ lang: e.currentTarget.value })}
            >
              <option value="FR">FR</option>
              <option value="EN">EN</option>
              <option value="ES">ES</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Durée :</Form.Label>
            <select
              value={this.state.duration}
              onChange={(e) =>
                this.setState({ duration: e.currentTarget.value })
              }
            >
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </Form.Group>
          <AgeContainer>
            <input
              className="age"
              type="text"
              placeholder="Age min"
              onChange={(e) => {
                this.setState({ age_min: e.currentTarget.value });
              }}
            />
            <input
              className="age"
              type="text"
              placeholder="Age max"
              onChange={(e) => {
                this.setState({ age_max: e.currentTarget.value });
              }}
            />
          </AgeContainer>
          {this.state.video.map((video, index) => {
            return (
              <VideoContainer key={index}>
                <VideoTitle>Video {index + 1}</VideoTitle>
                <PhotosUploader
                  isPresentation={false}
                  name={this.state.name}
                  index={index}
                  changeVideoID={this.changeVideoID}
                />
              </VideoContainer>
            );
          })}
          <Button
            onClick={this.onSubmitForm}
            style={{ marginTop: 15 }}
            variant="primary"
            type="submit"
          >
            Enregister
          </Button>
        </Form>
        <Form.Label style={{ fontSize: 20, color: "white" }}>
          Modifier la video de presentation :
        </Form.Label>
        <PhotosUploader
          isPresentation={true}
          changeVideoID={this.changeVideoID}
        />
      </MainContainer>
    );
  }
}

const mapDispatchToProps = {
  loadThemeInfo,
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    theme: store.theme,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
