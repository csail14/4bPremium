import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { validateUser } from "../../api/userApi";
import styled from "styled-components";
import { buildI18n } from "../../i18n/index";

const MainContainer = styled.main``;
const Title = styled.p`
  color: white;
  font-size: 40px;
  margin: 0 5px;
`;

const SubTitle = styled.p`
  color: white;
  font-size: 20px;
  margin: 0 5px;
`;

class ValidateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validate: false,
    };
  }
  i18n = buildI18n(this.props.lang.value);

  render() {
    return (
      <MainContainer>
        <Title> {this.i18n.t("desktopRegister.validate")} </Title>
        <SubTitle>{this.i18n.t("desktopRegister.welcome")}</SubTitle>

        {!this.state.validate && (
          <>
            <SubTitle>{this.i18n.t("desktopRegister.click")}</SubTitle>
            <Button
              onClick={() => {
                validateUser(this.props.match.params.key_id).then((res) => {
                  if (res.status === 200) {
                    this.setState({ validate: true });
                  }
                });
              }}
              style={{ marginTop: 15 }}
              variant="primary"
              type="submit"
            >
              {this.i18n.t("login.send")}
            </Button>
          </>
        )}
        {this.state.validate && (
          <SubTitle>{this.i18n.t("desktopRegister.done")}</SubTitle>
        )}
      </MainContainer>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    theme: store.theme,
    lang: store.lang,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidateAccount);
