import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./Form.css";

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
    <>
      <Typography variant="h3">Confirm User Details</Typography>
      <List className="confirmContainer">
        {listConfig.map((list) => (
          <ListItem className="listItem" key={list.primary}>
            <ListItemText primary={list.primary} secondary={list.secondary} />
          </ListItem>
        ))}
      </List>

      <br />
      <div className="btnContainer">
        <Button
          variant="contained"
          color="primary"
          onClick={continueNext}
          className="btn continueBtn"
        >
          Confirm & Continue
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={backPrev}
          className="continueBtn"
        >
          Back
        </Button>
      </div>
    </>
  );
}

export default FormUserDetails;
