import {
  Button,
  Center,
  CircularProgress,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";

import firebase from "../../Firebase";

const DeleteProjectModal = ({
  project,
  isOpen,
  onClose,
  handleSelectProject,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onDeleteTask = () => {
    setIsLoading(true);
    firebase
      .firestore()
      .collection("todos")
      .where("projectID", "==", project.docId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      })
      .finally(() => {
        firebase
          .firestore()
          .collection("projects")
          .doc(project.docId)
          .delete()
          .then(() => {
            handleSelectProject(null);
          })
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader />
        <ModalCloseButton />
        {isLoading ? (
          <>
            <ModalBody fontSize="3xl" m="9">
              <Center>
                <CircularProgress isIndeterminate color="pink.400" />
              </Center>
            </ModalBody>
            <ModalFooter />
          </>
        ) : (
          <>
            <ModalBody fontSize="3xl" m="9">
              Are you sure you want to delete the project ?
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
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteProjectModal;
