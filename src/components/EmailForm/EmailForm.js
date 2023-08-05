import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { StyledButton, StyledText, StyledInput } from "./styles";
import { Button, Checkbox, Form } from "semantic-ui-react";

function EmailForm() {
  const [state, handleSubmit] = useForm("mqkwrvly");
  if (state.succeeded) {
    return (
      <StyledText style={{ background: "black", paddingTop: "20px" }}>
        Thanks for signing up!
      </StyledText>
    );
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <span>
          <StyledInput
            placeholder="Your email"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <StyledButton type="submit" disabled={state.submitting}>
            <StyledText>Sign up</StyledText>
          </StyledButton>
        </span>
      </Form>
    </div>
  );
}

export default EmailForm;
