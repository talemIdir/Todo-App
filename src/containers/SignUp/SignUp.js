import React from "react";
import { connect } from "react-redux";
import { Box, Center, Flex, HStack, Image } from "@chakra-ui/react";

import { signIn, signOut } from "../../store/actions/authActions";
import SignUpForm from "./SignUpForm/SignUpForm";

const SignUp = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    props.signIn();
  };

  return (
    <Flex h="100vh">
      <Center flex={{ base: 1, md: 1.2, lg: 1 }}>
        <SignUpForm />
      </Center>
      <Box flex={{ base: 0, md: 1, lg: 1 }}>
        <Image
          height="100%"
          fit="cover"
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
        />
      </Box>
    </Flex>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () =>
      dispatch(signIn({ email: "idir.talem@gmail.com", password: "123456" })),
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
