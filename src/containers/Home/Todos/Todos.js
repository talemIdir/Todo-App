import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  CircularProgress,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Center,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useTodos } from "../../../hooks/useTodos";

import { selectProject } from "../../../store/actions/projectActions";
import CompletedTodos from "./CompletedTodos";
import OnGoingTodos from "./OnGoingTodos";
import firebase from "../../../Firebase";
import { toast } from "react-toastify";

const Todos = ({ projects, selectedProject, selectProject }) => {
  const { completedTasks, onGoingTasks, isLoading } = useTodos(selectedProject);
  const [isAdding, setIsAdding] = useState(false);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    setIsAdding(true);
    firebase
      .firestore()
      .collection("todos")
      .add({
        todo: task,
        projectID: selectedProject.docId,
        completed: false,
      })
      .then((docRef) => {
        toast({
          position: "top",
          title: "Task created.",
          description: "The task was succesfuly created",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    setTask("");
    setIsAdding(false);
  };

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
    <VStack
      flex="3"
      bg="var(--color-main)"
      height="calc(100vh - 6rem)"
      overflowY="auto"
      justifyContent="center"
    >
      <VStack
        width="80%"
        height="100%"
        p={10}
        pt={5}
        justifyContent="flex-start"
        color="white"
        spacing={10}
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
        ) : selectedProject.name === "" ? (
          <Center>
            <Heading>No selected project</Heading>
          </Center>
        ) : (
          <>
            <HStack width="100%" spacing={5} mb={5} mt={5}>
              <FormControl>
                <Input
                  size="lg"
                  fontSize="2xl"
                  variant="filled"
                  id="name"
                  type="text"
                  placeholder="Enter task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </FormControl>
              <Button
                isLoading={isAdding}
                size="lg"
                fontSize="2xl"
                loadingText="Loading"
                colorScheme="white"
                variant="outline"
                spinnerPlacement="start"
                onClick={handleAddTask}
              >
                Add task
              </Button>
            </HStack>

            <OnGoingTodos tasks={onGoingTasks} />
            <CompletedTodos tasks={completedTasks} />
          </>
        )}
      </VStack>
    </VStack>
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
