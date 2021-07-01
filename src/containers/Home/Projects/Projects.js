import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Collapse,
  HStack,
  Text,
  useDisclosure,
  VStack,
  Skeleton,
  Container,
} from "@chakra-ui/react";
import React from "react";

import Addproject from "./Project/AddProject/Addproject";
import Project from "./Project/Project";

const Projects = ({ userUID, projects }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack
      flex="1"
      bg="#21212B"
      borderTop="3px solid black"
      height="calc(100vh - 6rem)"
      color="gray.400"
      alignItems="center"
    >
      <HStack
        width="100%"
        cursor="pointer"
        justifyContent="space-between"
        onClick={onToggle}
        pt="25"
        pr="25"
        pl="25"
      >
        <Text fontSize="3xl">Projects</Text>
        {!isOpen ? (
          <AddIcon focusable="true" w={6} h={6} />
        ) : (
          <CloseIcon
            cursor="pointer"
            focusable="true"
            w={6}
            h={6}
            onClick={onToggle}
          />
        )}
      </HStack>
      <Container>
        <Collapse in={isOpen} width="50%">
          <Addproject userUID={userUID} />
        </Collapse>
      </Container>

      <Skeleton
        isLoaded={!projects.isLoading}
        h="16"
        alignSelf="center"
        w="90%"
      >
        {projects.data.map((project) => {
          return (
            <Project
              key={project.docId}
              name={project.name}
              docId={project.docId}
            />
          );
        })}
      </Skeleton>
    </VStack>
  );
};

export default Projects;
