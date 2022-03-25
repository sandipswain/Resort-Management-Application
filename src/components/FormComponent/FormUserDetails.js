import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { AppBar, Toolbar, TextField, Button } from "@material-ui/core";

function FormUserDetails({ values, nextStep, handleChange }) {
  const continueNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const userDetailsConfig = [
    {
      placeholder: "Enter Your First Name",
      name: "firstName",
      label: "First Name",
    },
    {
      placeholder: "Enter Your Last Name",
      name: "lastName",
      label: "Last Name",
    },
    {
      placeholder: "Enter Your Email",
      name: "email",
      label: "Email",
    },
  ];
  const extractValue = (values, name) => values.name;

  return (
    <MuiThemeProvider>
      <>
        <AppBar position="static">
          <Toolbar>Enter User Details</Toolbar>
        </AppBar>
        {userDetailsConfig.map((userDetails) => (
          <TextField
            fullWidth
            placeholder={userDetails.placeholder}
            name={userDetails.name}
            label={userDetails.label}
            onChange={(e) => handleChange(e)}
            defaultValue={extractValue(values, userDetails.name)}
          />
        ))}
        <br />
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={continueNext}
        >
          Continue
        </Button>
      </>
    </MuiThemeProvider>
  );
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
