import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";

interface HeaderProps {
  handleOpenNewTransactionModel: () => void;
}

export default function Header({ handleOpenNewTransactionModel }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dtMoney" />
        <button onClick={handleOpenNewTransactionModel}>Nova transação</button>
      </Content>
    </Container>
  );
}
