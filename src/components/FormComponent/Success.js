import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

function Success() {
  return (
    <div>
      <AppBar>
        <Toolbar>Success</Toolbar>
      </AppBar>
      <br />
      <br />
      <h1>Thank you for your submission</h1>
      <p>You will get an email with further instructions</p>
    </div>
  );
}

export default Success;
