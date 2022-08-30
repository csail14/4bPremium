import React from "react";
import { connect } from "react-redux";
import { loadUserInfo } from "../../actions/user/userActions";
import { loadEvent } from "../../actions/event/eventActions";
import { getAllEvent } from "../../api/eventApi";

import styled from "styled-components";
import { buildI18n } from "../../i18n/index";

const MainContainer = styled.main`
  padding-top: 100px;
`;

class ChangeAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  i18n = buildI18n(this.props.lang.value);

  changeUser = (index) => {
    this.props.loadUserInfo(
      true,
      this.props.user.infos,
      this.props.user.subuser,
      index
    );
    getAllEvent(
      this.props.user &&
        this.props.user.subuser &&
        this.props.user.subuser[index].id
    ).then((res) => {
      this.props.loadEvent(res.result);
    });
    this.props.history.push("/warroom");
  };

  render() {
    return (
      <MainContainer>
        <p className="title">{this.i18n.t("desktopRegister.change")}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {this.props.user &&
            this.props.user.subuser &&
            this.props.user.subuser.map((item, index) => {
              return (
                <p
                  style={{
                    border: "1px white solid",
                    width: "fit-content",
                    padding: "10px",
                    color: "white",
                    borderRadius: "12px",
                    margin: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => this.changeUser(index)}
                >
                  {item.name}
                </p>
              );
            })}
        </div>
      </MainContainer>
    );
  }
}

const mapDispatchToProps = {
  loadUserInfo,
  loadEvent,
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    lang: store.lang,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAccount);
