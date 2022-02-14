import React from "react";
import styled from "styled-components";

const Title = styled.p`
  color: white;
  font-size: 40px;
  margin: 0 5px;
`;

class NonAuth extends React.Component {
  render() {
    return (
      <div className="Main">
        <Title>No admin</Title>
      </div>
    );
  }
}

export default NonAuth;
