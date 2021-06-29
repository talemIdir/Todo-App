import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Project = ({ name }) => {
  return (
    <Flex
      as="a"
      pl="25"
      alignItems="center"
      h="16"
      w="100%"
      _hover={{
        background: "gray.700",
      }}
    >
      <Text fontSize="2xl" color="whiteAlpha.800">
        {name}
      </Text>
    </Flex>
  );
};

export default Project;
