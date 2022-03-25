import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

function FormPersonalDetails({ values, nextStep, prevStep, handleChange }) {
  const personDetails = [
    {
      placeholder: "Enter Your Occupation",
      name: "occupation",
      label: "Occupation",
    },
    {
      placeholder: "Enter Your City",
      name: "city",
      label: "City",
    },
    {
      placeholder: "Enter Your Bio",
      name: "bio",
      label: "Bio",
    },
  ];
  const continueNext = (e) => {
    e.preventDefault();
    nextStep();
  };
  const backPrev = (e) => {
    e.preventDefault();
    prevStep();
  };
  const extractValue = (values, name) => values.name;
  return (
    <MuiThemeProvider>
      <>
        {personDetails.map((person) => (
          <TextField
            fullWidth
            placeholder={person.placeholder}
            name={person.name}
            label={person.label}
            onChange={(e) => handleChange(e)}
            defaultValue={extractValue(values, person.name)}
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

export default FormPersonalDetails;
