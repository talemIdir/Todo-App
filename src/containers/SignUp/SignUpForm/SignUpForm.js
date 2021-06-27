import { VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";
import MyFormControl from "./FormComponent/MyFormControl";
import React, { useState } from "react";
import { signUp } from "../../../store/actions/authActions";
import { connect } from "react-redux";

const SignUpForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    props.signUp({ email: email, password: password });
  };

  return (
    <VStack
      spacing="5"
      bg="white.300"
      p="20"
      border="1px"
      borderColor="gray.300"
      borderRadius="xl"
    >
      <Heading size="4xl">Create account</Heading>
      <HStack fontSize="xl">
        <Text>Already have an account?</Text>
        <Text
          as="a"
          textDecoration="underline"
          color="blue.500"
          fontWeight="extrabold"
        >
          Sign in
        </Text>
      </HStack>
      <MyFormControl
        id="firstName"
        label="First name"
        type="text"
        placeholder="Enter your first name"
      />
      <MyFormControl
        id="lastName"
        label="Last name"
        type="text"
        placeholder="Enter your last name"
      />
      <MyFormControl
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={emailChange}
      />
      <MyFormControl
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={passwordChange}
      />
      <Button
        isLoading={props.isLoading}
        size="lg"
        fontSize="2xl"
        loadingText="Loading"
        colorScheme="teal"
        variant="outline"
        spinnerPlacement="start"
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credentials) =>
      dispatch(
        signUp({ email: credentials.email, password: credentials.password })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
