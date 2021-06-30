import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Collapse,
  HStack,
  Text,
  useDisclosure,
  VStack,
  Stack,
  Skeleton,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { useProjects } from "../../../hooks/useProjects";
import Addproject from "./Project/AddProject/Addproject";
import Project from "./Project/Project";

const Projects = ({ userUID }) => {
  const { data: projects, isLoading } = useProjects(userUID);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack
      flex="1"
      bg="#181820"
      borderTop="3px solid black"
      height="calc(100vh - 6rem)"
      color="gray.400"
      alignItems="flex-start"
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

      <Skeleton isLoaded={!isLoading} h="16" alignSelf="center" w="90%">
        {projects.map((project) => {
          return <Project key={project.docId} name={project.name} />;
        })}
      </Skeleton>
    </VStack>
  );
};

export default Projects;
