import React, { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Modal from "react-modal";
import NewTransactionModal from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModel() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModel() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header handleOpenNewTransactionModel={handleOpenNewTransactionModel} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModel}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
