import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  CircularProgress,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import { useTodos } from "../../../hooks/useTodos";

import { selectProject } from "../../../store/actions/projectActions";
import CompletedTodos from "./CompletedTodos";
import OnGoingTodos from "./OnGoingTodos";

const Todos = ({ projects, selectedProject, selectProject }) => {
  const { completedTasks, onGoingTasks, isLoading, isError } = useTodos(
    selectedProject
  );

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

  const projectIndex = projects.data.findIndex(
    (project) => project.docId === selectedProject.docId
  );

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
        <Flex width="100%" alignItems="center">
          <HStack
            flex="1"
            justifyContent="flex-start"
            overflow="hidden"
            textOverflow="ellipsis"
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

          <Heading flex="2" textAlign="center">
            {selectedProject.name}
          </Heading>
          <HStack
            flex="1"
            justifyContent="flex-end"
            p={5}
            overflow="hidden"
            textOverflow="ellipsis"
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
        {isLoading ? (
          <Center flex="1">
            <CircularProgress isIndeterminate color="pink.400" />
          </Center>
        ) : (
          <>
            <OnGoingTodos tasks={onGoingTasks} />
            <CompletedTodos tasks={completedTasks} />
          </>
        )}
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
