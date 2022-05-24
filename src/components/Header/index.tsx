import React from "react";
import Logo from "../../assets/Logo.svg";
import { Container,Content } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dtMoney" />
        <button>Nova transação</button>
      </Content>
    </Container>
  );
}
