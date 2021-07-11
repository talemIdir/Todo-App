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

const DeleteTodoModal = ({ todo, isOpen, onClose }) => {
  const onDeleteTask = () => {
    firebase
      .firestore()
      .collection("todos")
      .doc(todo.docId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody fontSize="3xl" m="9">
          Are you sure you want to delete the task ?
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            mr={3}
            onClick={onDeleteTask}
            fontSize="2xl"
            size="lg"
          >
            Confirm
          </Button>
          <Button fontSize="2xl" onClick={onClose} size="lg">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteTodoModal;
