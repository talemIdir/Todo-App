import { Button, FormControl, Input, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import firebase from "../../../../../Firebase";

const Addproject = ({ userUID }) => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const addProject = (e) => {
    setIsLoading(true);

    firebase
      .firestore()
      .collection("projects")
      .add({
        name: name,
        userUID: userUID,
      })
      .then((docRef) => {
        toast({
          position: "top",
          title: "Project created.",
          description: "The project was succesfuly added",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    setName("");
    setIsLoading(false);
  };

  return (
    <VStack width="100%" spacing={5} mb={5} mt={5}>
      <FormControl>
        <Input
          size="lg"
          fontSize="2xl"
          variant="filled"
          id="name"
          type="text"
          placeholder="Enter the project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <Button
        isLoading={isLoading}
        size="lg"
        fontSize="2xl"
        loadingText="Loading"
        colorScheme="white"
        variant="outline"
        spinnerPlacement="start"
        onClick={addProject}
      >
        Add project
      </Button>
    </VStack>
  );
};

export default Addproject;
