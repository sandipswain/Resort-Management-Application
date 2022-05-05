import {
  Button,
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
} from "@material-ui/core";
import React from "react";
import "./Form.css";
import { personDetails } from "./formConfig";
function FormPersonalDetails({ values, nextStep, prevStep, handleChange }) {
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
    <>
      <Grid container className="textContainer" spacing={3}>
        {personDetails.map((person) => (
          <Grid item xs={6} sm={6} key={person.name} className="gridItems">
            <FormControl variant="filled" className="formControl">
              <InputLabel htmlFor={person.name} shrink={true} className="label">
                {person.label}
              </InputLabel>
              <FilledInput
                className="textFields"
                id={person.name}
                onChange={(e) => handleChange(e)}
                type={person.type}
                placeholder={person.placeholder}
                defaultValue={extractValue(values, person.name)}
              />
            </FormControl>
          </Grid>
        ))}
      </Grid>
      <br />
      <div className="btnContainer">
        <Button
          variant="contained"
          color="primary"
          onClick={continueNext}
          className="btn continueBtn"
        >
          Continue
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

export default FormPersonalDetails;
