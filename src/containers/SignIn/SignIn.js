import React from "react";
import { Box, Center, Flex, Image } from "@chakra-ui/react";
import SignInForm from "./SignInForm/SignInForm";

export const SignIn = () => {
  return (
    <Flex h="100vh">
      <Center flex={{ base: 1, md: 1.2, lg: 1 }} bg="gray.100">
        <SignInForm />
      </Center>
      <Box flex={{ base: 0, md: 1, lg: 1 }}>
        <Image
          height="100%"
          fit="cover"
          src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
        />
      </Box>
    </Flex>
  );
};
