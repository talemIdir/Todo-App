import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

import firebase from "../../../../Firebase";

const AddTodoModal = ({ todo, isOpen, onClose }) => {
  const onConfirm = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("todos")
      .doc(todo.docId)
      .update({
        completed: !todo.completed,
      })
      .then(() => onClose());
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody fontSize="3xl" m="9">
          Are you sure to set the todo as{" "}
          {todo.completed ? "On Going" : "Completed"}?
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onConfirm} fontSize="2xl">
            Confirm
          </Button>
          <Button fontSize="2xl" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTodoModal;
