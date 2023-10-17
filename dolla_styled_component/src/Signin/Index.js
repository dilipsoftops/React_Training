import React, { Component } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElement";

export default class SignIn extends Component {
  render() {
    return (
      <>
        <Container>
          <FormWrap>
            <Icon to="/">dolla</Icon>
            <FormContent>
              <Form action="#">
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" required />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type="password" required />
                <FormButton type="submit"> Continue</FormButton>
                <Text>Forgot Password</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }
}
