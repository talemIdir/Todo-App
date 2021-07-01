import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import { selectProject } from "../../../../store/actions/projectActions";

const Project = (props) => {
  const handleSelectProject = (e) => {
    e.preventDefault();
    props.selectProject({ name: props.name, docId: props.docId });
  };

  return (
    <Flex
      as="a"
      pl="25"
      alignItems="center"
      h="16"
      w="100%"
      _hover={{
        background: "gray.700",
      }}
      onClick={handleSelectProject}
    >
      <Text fontSize="2xl" color="whiteAlpha.800">
        {props.name}
      </Text>
    </Flex>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectProject: ({ name, docId }) => dispatch(selectProject(name, docId)),
  };
};

export default connect(null, mapDispatchToProps)(Project);
