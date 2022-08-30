import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { config } from "../../config";
import { Link } from "react-router-dom";
import { setStripeProduct } from "../../api/stripeApi";
import styled from "styled-components";
import { buildI18n } from "../../i18n/index";
import { isMobile } from "react-device-detect";

const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const MainContainer = styled.main``;

const Text = styled.div`
  color: white;
  font-size: 20px;
  padding: 10px;
`;
const SubTitle = styled.div`
  color: white;
  font-size: 20px;
  padding: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PackDivContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PackContainer = styled.div`
  margin: 10px;
  border: 2px solid white;
  height: 300px
  width: 260px
  border-radius: 10px;
  padding: 20px;
`;

const Button = styled.div`
  display: flex;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: -webkit-fill-available;
  color: black;
  border-radius: 12px;
  background-color: white;
  cursor: pointer;
  height: auto;
`;

const Price = styled.div`
  color: white;
  font-size: 20px;
`;

class Admin extends React.Component {
  paiement = (priceId, product) => {
    let data = {
      email: this.props.user.infos.email,
      priceId: priceId,
      product: product,
    };
    const apiCall = async () => {
      try {
        axios
          .post(config.api_url + "/api/v1/paiment/checkout", data)
          .then((res) => {
            window.open(
              "https://paiment-4brn.herokuapp.com/" + res.data.sessionId,
              "_blank"
            );
          });
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  };

  i18n = buildI18n(this.props.lang.value);

  setProduct = (priceId) => {
    let data = {
      priceId: priceId,
      stripe_id: this.props.user.infos.subscription_id,
      email: this.props.user.infos.email,
    };
    setStripeProduct(data).then((res) => {
      if (res.status == 200) {
        window.location.reload();
      }
    });
  };

  checkAcount = () => {
    let data = {
      customerId: this.props.user.infos.stripe_id,
    };
    const apiCall = async () => {
      try {
        axios.post(config.api_url + "/customer-portal", data).then((res) => {
          window.location.href = res.data.url;
        });
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  };

  render() {
    return (
      <MainContainer>
        <Title>{this.i18n.t("desktopAccount.welcome")}</Title>
        {this.props.user.infos && (
          <>
            {this.props.user.infos.isPaid === 1 && (
              <>
                <Text>
                  {this.i18n.t("desktopAccount.choose")}
                  {this.props.user.infos
                    ? this.props.user.infos.product
                    : null}{" "}
                </Text>
                <Button
                  className="buy-button"
                  onClick={() => this.checkAcount()}
                >
                  {this.i18n.t("desktopAccount.info")}
                </Button>
              </>
            )}

            <>
              {this.props.user.infos.isPaid === 0 ? (
                <SubTitle>{this.i18n.t("desktopAccount.notYet")}</SubTitle>
              ) : (
                <SubTitle>{this.i18n.t("desktopAccount.change")}</SubTitle>
              )}
              {this.props.user.infos.stripe_id === null ||
              this.props.user.infos.isPaid === 0 ? (
                <PackDivContainer>
                  <PackContainer>
                    <Text>Pack Kids</Text>
                    <Price>3€ {this.i18n.t("pack.mois")}</Price>
                    <ButtonContainer>
                      <Button
                        onClick={() => {
                          this.paiement(
                            "price_1IZDjWJwXSakrFau37sJondx",
                            "kids"
                          );
                        }}
                      >
                        {this.i18n.t("desktopAccount.thisOne")}
                      </Button>
                      <Button className="buy-button">
                        <Link to="/pack" style={{ textDecoration: "none" }}>
                          {this.i18n.t("desktopAccount.moreInfo")}
                        </Link>
                      </Button>
                    </ButtonContainer>
                  </PackContainer>
                  <PackContainer>
                    <Text>Pack Family</Text>
                    <Price>5€ {this.i18n.t("pack.mois")}</Price>
                    <p className="price">5€ {this.i18n.t("pack.mois")}</p>
                    <ButtonContainer>
                      <Button
                        className="buy-button"
                        onClick={() => {
                          this.paiement(
                            "price_1IZDkSJwXSakrFauYSsgNXAi",
                            "family"
                          );
                        }}
                      >
                        {this.i18n.t("desktopAccount.thisOne")}
                      </Button>
                      <Button className="buy-button">
                        <Link to="/pack" style={{ textDecoration: "none" }}>
                          {this.i18n.t("desktopAccount.moreInfo")}
                        </Link>
                      </Button>
                    </ButtonContainer>
                  </PackContainer>
                </PackDivContainer>
              ) : (
                <PackDivContainer>
                  {this.props.user.infos.product === "kids" ? (
                    <PackContainer>
                      <Text>Pack Family</Text>
                      <Price>5€ {this.i18n.t("pack.mois")}</Price>
                      <ButtonContainer>
                        <Button
                          className="buy-button"
                          onClick={() => {
                            this.setProduct("price_1IZDkSJwXSakrFauYSsgNXAi");
                          }}
                        >
                          {this.i18n.t("desktopAccount.changeFor")}
                        </Button>
                        <Button className="buy-button">
                          <Link to="/pack" style={{ textDecoration: "none" }}>
                            {this.i18n.t("desktopAccount.moreInfo")}
                          </Link>
                        </Button>
                      </ButtonContainer>
                    </PackContainer>
                  ) : (
                    <PackContainer>
                      <Text>Pack Kids</Text>
                      <Price>3€ {this.i18n.t("pack.mois")}</Price>
                      <ButtonContainer>
                        <Button
                          className="buy-button"
                          onClick={() => {
                            this.setProduct("price_1IZDjWJwXSakrFau37sJondx");
                          }}
                        >
                          {this.i18n.t("desktopAccount.changeFor")}
                        </Button>
                        <Button className="buy-button">
                          <Link to="/pack" style={{ textDecoration: "none" }}>
                            {this.i18n.t("desktopAccount.moreInfo")}
                          </Link>
                        </Button>
                      </ButtonContainer>
                    </PackContainer>
                  )}
                </PackDivContainer>
              )}
            </>
          </>
        )}{" "}
        <Link style={{ margin: "10px", color: "white" }} to="/admin">
          Admin
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
