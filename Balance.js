import React from "react";
import Typography from "@mui/material/Typography";

const Balance = ({ balance }) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Personal Account Manager
      </Typography>
      <br></br>
      <br></br>
      <Typography variant="h7" gutterBottom>
        YOUR BALANCE
      </Typography>
      <Typography variant="h3">${balance.toFixed(2)}</Typography>
    </>
  );
};

export default Balance;
