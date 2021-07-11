import { Skeleton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useTodos } from "../../../hooks/useTodos";
import Todo from "./Todo/Todo";

const OnGoingTodos = ({ selectedProject }) => {
  const { data: todos, isLoading, isError } = useTodos(selectedProject, false);

  return (
    <VStack flex="1" width="100%">
      <Text alignSelf="flex-start" fontSize="2xl">
        On Going Todos - {!isLoading && todos.length}
      </Text>
      {isLoading ? (
        <Skeleton
          h="16"
          alignSelf="center"
          w="100%"
          startColor="grey"
          endColor="#21212B"
        />
      ) : (
        todos.map((todo) => {
          return <Todo key={todo.docId} todo={todo} />;
        })
      )}
    </VStack>
  );
};

export default OnGoingTodos;
