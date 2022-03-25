import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import {
  List,
  AppBar,
  Toolbar,
  Button,
  ListItemText,
  ListItem,
} from "@material-ui/core";

function FormUserDetails({ values, nextStep, prevStep }) {
  const continueNext = (e) => {
    e.preventDefault();
    // Procees data for backend
    nextStep();
  };
  const backPrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const { firstName, lastName, email, occupation, city, bio } = values;
  const listConfig = [
    {
      primary: "First Name",
      secondary: firstName,
    },
    {
      primary: "Last Name",
      secondary: lastName,
    },
    {
      primary: "Email",
      secondary: email,
    },
    {
      primary: "Occupation",
      secondary: occupation,
    },
    {
      primary: "City",
      secondary: city,
    },
    {
      primary: "Bio",
      secondary: bio,
    },
  ];

  return (
    <MuiThemeProvider>
      <>
        <AppBar position="static">
          <Toolbar>Confirm User Data</Toolbar>
        </AppBar>
        <List>
          {listConfig.map((list) => (
            <ListItem>
              <ListItemText primary={list.primary} secondary={list.secondary} />
            </ListItem>
          ))}
        </List>

        <br />
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={continueNext}
        >
          Confirm & Continue
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={styles.button}
          onClick={backPrev}
        >
          Back
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
