import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import Todo from "./Todo/Todo";

const CompletedTodos = ({ tasks }) => {
  return (
    <VStack width="100%" pb="5">
      <Text alignSelf="flex-start" fontSize="2xl">
        Completed Tasks - {tasks.length}
      </Text>
      <VStack overflowY="auto" width="100%">
        {tasks.map((todo) => {
          return <Todo key={todo.docId} todo={todo} />;
        })}
      </VStack>
    </VStack>
  );
};

export default CompletedTodos;
