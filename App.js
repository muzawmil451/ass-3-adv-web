import React, { useState } from "react";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";
import Typography from "@mui/material/Typography";
import "./styles.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const getIncome = () =>
    transactions
      .filter((item) => item.amount > 0)
      .reduce((acc, item) => (acc += item.amount), 0);

  const getExpense = () =>
    transactions
      .filter((item) => item.amount < 0)
      .reduce((acc, item) => (acc += item.amount), 0);

  const getBalance = () =>
    transactions.reduce((acc, item) => (acc += item.amount), 0);

  return (
    <div className="app-container">
      <Typography variant="h6" gutterBottom color={"primary"}>
        Submitted by: Muhammad Muzammil - F2020266451
      </Typography>
      <div className="app">
        <Balance balance={getBalance()} />
        <IncomeExpenses income={getIncome()} expense={getExpense()} />
        <TransactionHistory
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
};

export default App;
