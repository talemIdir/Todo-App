import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { connect } from "react-redux";
import { selectProject } from "../../../store/actions/projectActions";

const Todos = ({ projects, selectedProject, selectProject }) => {
  const handleSelectProject = (previous, index) => {
    if (previous) {
      if (index >= 0 && projects.data.length > 0)
        selectProject({
          name: projects.data[index].name,
          docId: projects.data[index].docId,
        });
    } else {
      if (index < projects.data.length && projects.data.length > 0)
        selectProject({
          name: projects.data[index].name,
          docId: projects.data[index].docId,
        });
    }
  };

  const projectIndex = projects.data.findIndex((project) => {
    if (project.docId === selectedProject.docId) return project;
  });

  return (
    <Flex
      flex="3"
      bg="var(--color-main)"
      height="calc(100vh - 6rem)"
      justifyContent="center"
    >
      <VStack
        width="80%"
        height="100%"
        p={10}
        justifyContent="flex-start"
        color="white"
      >
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <HStack
            p={5}
            _hover={{
              background: "gray.700",
              cursor: "pointer",
            }}
            onClick={() => handleSelectProject(true, projectIndex - 1)}
          >
            <ChevronLeftIcon w={6} h={6} boxSize={8} />
            {projectIndex > 0 && projects.data.length > 0 && (
              <Text fontSize="2xl">{projects.data[projectIndex - 1].name}</Text>
            )}
          </HStack>
          <Heading>{selectedProject.name}</Heading>
          <HStack
            p={5}
            _hover={{
              background: "gray.700",
              cursor: "pointer",
            }}
            onClick={() => handleSelectProject(false, projectIndex + 1)}
          >
            {projectIndex < projects.data.length - 1 &&
              projects.data.length > 0 && (
                <Text fontSize="2xl">
                  {projects.data[projectIndex + 1].name}
                </Text>
              )}
            <ChevronRightIcon w={6} h={6} boxSize={8} />
          </HStack>
        </Flex>
      </VStack>
    </Flex>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedProject: state.project,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectProject: ({ name, docId }) => dispatch(selectProject(name, docId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
