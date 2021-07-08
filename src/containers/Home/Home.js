import React from "react";
import { connect } from "react-redux";
import { HStack } from "@chakra-ui/react";

import Todos from "./Todos/Todos";
import { useProjects } from "../../hooks/useProjects";
import Projects from "./Projects/Projects";

const Home = (props) => {
  const projects = useProjects(props.uid);

  return (
    <HStack height="100%" spacing="0">
      <Projects userUID={props.uid} projects={projects} />
      <Todos projects={projects} />
    </HStack>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(Home);
