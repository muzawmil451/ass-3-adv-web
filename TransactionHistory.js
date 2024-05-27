import React from "react";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

const TransactionHistory = ({ transactions, deleteTransaction }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        History
      </Typography>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`transaction-item ${
              transaction.amount >= 0 ? "positive" : "negative"
            }`}
          >
            <span>
              <Typography variant="h6" gutterBottom>
                {transaction.text}
              </Typography>
            </span>
            <span>
              <Typography variant="h6" gutterBottom>
                {transaction.amount >= 0 ? "+" : "-"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </Typography>
            </span>

            <Fab
              size="small"
              color="primary"
              aria-label="delete"
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              <DeleteIcon />
            </Fab>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionHistory;
