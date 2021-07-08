import { Checkbox } from "@chakra-ui/react";
import React from "react";
import firebase from "../../../../Firebase";

const Todo = ({ todo }) => {
  const onCheckHandle = (e) => {
    e.preventDefault();
    firebase.firestore().collection("todos").doc(todo.docId).update({
      completed: !todo.completed,
    });
  };

  return (
    <Checkbox
      width="100%"
      colorScheme="pink"
      backgroundColor="#21212B"
      padding="15"
      borderRadius="10"
      size="lg"
      spacing="5"
      onChange={(e) => onCheckHandle(e)}
      isChecked={todo.completed}
    >
      {todo.todo}
    </Checkbox>
  );
};

export default Todo;
