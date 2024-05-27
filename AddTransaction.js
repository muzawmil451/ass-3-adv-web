import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // Check if text or amount is empty
    if (!text || !amount) {
      alert("Please enter both text and amount.");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseFloat(amount),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Add Transaction
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          type="text"
          label="Enter Text"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        />

        <Typography variant="h7" gutterBottom color={"primary"}>
          Note: negative - expense, positive - income
        </Typography>

        <TextField
          type="number"
          label="Enter Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "105%" }}
        >
          Add transaction
        </Button>
      </Box>
    </>
  );
};

export default AddTransaction;
