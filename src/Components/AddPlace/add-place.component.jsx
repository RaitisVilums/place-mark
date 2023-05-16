import React from "react";

import "./add-place.styles.scss";
import MainWrapper from "../Common/Wrapper/wrapper";
import Input from "../Common/Input/input";
import Button from "../Common/Button/button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../Utils/validators";
import { useForm } from "../../Hooks/useForm.hook";

const AddPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <MainWrapper>
      <form className="place-form" onSubmit={submitHandler}>
        <Input
          id="title"
          element="input"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title"
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid descriptions ( at least 5 words )"
          onInput={inputHandler}
        />
        <Input
          id="address"
          element="input"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD PLACE
        </Button>
      </form>
    </MainWrapper>
  );
};
export default AddPlace;
