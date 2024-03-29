import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import DeleteTodoModal from "../../../../components/Modal/DeleteTodoModal";

import TodoCheckModal from "../../../../components/Modal/TodoCheckModal";

const Todo = ({ todo }) => {
  const checkModal = useDisclosure();

  const deleteModal = useDisclosure();

  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="#21212B"
      padding="15"
      spacing={15}
      borderRadius="10"
    >
      <TodoCheckModal
        isOpen={checkModal.isOpen}
        onClose={checkModal.onClose}
        todo={todo}
      />
      <DeleteTodoModal
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        todo={todo}
      />
      <Checkbox
        flex="1"
        colorScheme="pink"
        size="lg"
        spacing="5"
        onChange={checkModal.onOpen}
        isChecked={todo.completed}
      >
        {todo.todo}
      </Checkbox>
      <DeleteIcon
        onClick={deleteModal.onOpen}
        w={6}
        h={6}
        color="gray.300"
        _hover={{
          color: "red.300",
          cursor: "pointer",
        }}
      />
    </HStack>
  );
};

export default Todo;
