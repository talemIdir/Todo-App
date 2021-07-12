import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import Todo from "./Todo/Todo";

const CompletedTodos = ({ tasks }) => {
  return (
    <VStack flex="1" width="100%">
      <Text alignSelf="flex-start" fontSize="2xl">
        Completed Todos - {tasks.length}
      </Text>
      {tasks.map((todo) => {
        return <Todo key={todo.docId} todo={todo} />;
      })}
    </VStack>
  );
};

export default CompletedTodos;
