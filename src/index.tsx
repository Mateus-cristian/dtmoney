import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

interface Transactions {
  id: number;
  title: string;
  category: string;
  amount: number;
  type: string;
  createdAt: string;
}

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Densevolvimento de sites",
          amount: "10000",
          category: "vendas",
          type: "deposit",
          data: new Date(),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: "1000",
          category: "Casa",
          type: "withdraw",
          data: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
