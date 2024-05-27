import React from "react";
import Typography from "@mui/material/Typography";

const IncomeExpenses = ({ income, expense }) => {
  return (
    <div className="income-expenses-container">
      <div className="income-expenses-box income-box">
        <Typography variant="h6" gutterBottom>
          Income
        </Typography>
        <Typography variant="h6" color={"green"} gutterBottom>
          ${income.toFixed(2)}
        </Typography>
      </div>
      <div className="income-expenses-box expense-box">
        <Typography variant="h6" gutterBottom>
          Expense
        </Typography>
        <Typography variant="h6" color={"red"} gutterBottom>
          ${expense.toFixed(2)}
        </Typography>
      </div>
    </div>
  );
};

export default IncomeExpenses;
