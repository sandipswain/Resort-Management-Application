import {
  Button,
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
} from "@material-ui/core";
import "./Form.css";
import { userDetailsConfig } from "./formConfig";

function FormUserDetails({ values, nextStep, handleChange }) {
  const continueNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const extractValue = (values, name) => values.name;

  return (
    <>
      <Grid container className="textContainer" spacing={3}>
        {userDetailsConfig.map((userDetails) => (
          <Grid item xs={6} sm={6} key={userDetails.name} className="gridItem">
            <FormControl variant="filled" className="formControl">
              <InputLabel
                htmlFor={userDetails.name}
                shrink={true}
                className="label"
              >
                {userDetails.label}
              </InputLabel>
              <FilledInput
                className="textFields"
                id={userDetails.name}
                onChange={(e) => handleChange(e)}
                type={userDetails.type}
                placeholder={userDetails.placeholder}
                defaultValue={extractValue(values, userDetails.name)}
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
          className="continueBtn"
          onClick={continueNext}
        >
          Continue
        </Button>
      </div>
    </>
  );
}

export default FormUserDetails;
