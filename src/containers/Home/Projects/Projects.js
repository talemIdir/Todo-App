import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useProjects } from "../../../hooks/useProjects";
import Project from "./Project/Project";

const Projects = ({ userUID }) => {
  const { data: projects } = useProjects(userUID);

  return (
    <VStack
      flex="1"
      bg="#181820"
      borderTop="3px solid black"
      height="calc(100vh - 6rem)"
      color="gray.400"
      alignItems="flex-start"
    >
      <Text fontSize="3xl" p="25">
        Projects
      </Text>
      {projects.map((project) => {
        return <Project key={project.docId} name={project.name} />;
      })}
    </VStack>
  );
};

export default Projects;
