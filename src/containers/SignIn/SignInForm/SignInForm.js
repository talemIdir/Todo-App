import React, { useState } from "react";
import MyFormControl from "../../../components/FormComponent/MyFormControl";
import { VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { signIn } from "../../../store/actions/authActions";
import { connect } from "react-redux";

const SignInForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    props.signIn({ email: email, password: password });
  };
  return (
    <VStack
      spacing="5"
      boxShadow="2xl"
      p="20"
      rounded="md"
      bg="white"
      borderRadius="xl"
      flex={{ base: 0.8, sm: 0.6, md: 0.6, lg: 0.6 }}
    >
      <Heading size="4xl">Sign In</Heading>
      <HStack fontSize="xl">
        <Text>Don't have an account?</Text>
        <Text
          textDecoration="underline"
          color="blue.500"
          fontWeight="extrabold"
        >
          <Link to="/SignUp">Sign up</Link>
        </Text>
      </HStack>
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
        Sign In
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
    signIn: (credentials) =>
      dispatch(
        signIn({ email: credentials.email, password: credentials.password })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
