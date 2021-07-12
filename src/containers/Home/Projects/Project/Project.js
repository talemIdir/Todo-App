import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Container, Flex, HStack, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import DeleteProjectModal from "../../../../components/Modal/DeleteProjectModal";
import { selectProject } from "../../../../store/actions/projectActions";

const Project = (props) => {
  const handleSelectProject = (e) => {
    e.preventDefault();
    props.selectProject({ name: props.name, docId: props.docId });
  };

  const deleteModal = useDisclosure();

  return (
    <Flex
      as="a"
      pl="15"
      pr="5"
      alignItems="center"
      justifyContent="space-between"
      h="16"
      w="100%"
      _hover={{
        background: "gray.700",
      }}
      onClick={handleSelectProject}
    >
      <DeleteProjectModal
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        project={{ name: props.name, docId: props.docId }}
      />
      <Text fontSize="2xl" color="whiteAlpha.800">
        {props.name}
      </Text>
      <HStack>
        <EditIcon
          w={6}
          h={6}
          _hover={{
            color: "white",
            cursor: "pointer",
          }}
        />
        <DeleteIcon
          onClick={deleteModal.onOpen}
          w={6}
          h={6}
          _hover={{
            color: "red.300",
            cursor: "pointer",
          }}
        />
      </HStack>
    </Flex>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectProject: ({ name, docId }) => dispatch(selectProject(name, docId)),
  };
};

export default connect(null, mapDispatchToProps)(Project);
