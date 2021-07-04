import { Checkbox, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const OnGoingTodos = () => {
  const todos = [
    { completed: false, todo: "Write a movie web app" },
    { completed: false, todo: "Write a movie web app" },
    { completed: true, todo: "Write a movie web app" },
  ];

  return (
    <VStack width="100%">
      <Text alignSelf="flex-start" fontSize="2xl">
        Todos - {todos.length}
      </Text>
      {todos.map((todo) => {
        return (
          <Checkbox
            width="100%"
            colorScheme="pink"
            backgroundColor="#21212B"
            padding="15"
            borderRadius="10"
            size="lg"
            spacing="5"
            isChecked={todo.completed}
            onChange={() => (todo.completed = !todo.completed)}
          >
            Checkbox
          </Checkbox>
        );
      })}
    </VStack>
  );
};

export default OnGoingTodos;
