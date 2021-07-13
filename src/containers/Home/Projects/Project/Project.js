import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Flex, HStack, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import DeleteProjectModal from "../../../../components/Modal/DeleteProjectModal";

const Project = ({ project, handleSelectProject }) => {
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
    >
      <DeleteProjectModal
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        project={project}
        handleSelectProject={handleSelectProject}
      />
      <Text
        fontSize="2xl"
        color="whiteAlpha.800"
        onClick={() => handleSelectProject(project)}
        flex="1"
      >
        {project.name}
      </Text>
      <HStack spacing="5">
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

export default Project;
