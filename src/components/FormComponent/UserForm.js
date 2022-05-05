import React, { useState } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { obj } from "./formConfig";

function UserForm() {
  const [details, setDetails] = useState(obj);
  // Proceed to the next step
  const nextStep = () => {
    const { step } = details;
    setDetails((prev) => ({ ...prev, step: step + 1 }));
  };

  // Proceed to the previous step
  const prevStep = () => {
    const { step } = details;
    setDetails((prev) => ({ ...prev, step: step - 1 }));
  };

  // handle field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };
  const { step } = details;
  const { firstName, lastName, doB, email, occupation, city, bio } = details;
  const values = { firstName, lastName, doB, email, occupation, city, bio };
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 4:
      return <Success />;
    default:
      return;
  }
}

export default UserForm;
