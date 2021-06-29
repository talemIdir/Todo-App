import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import Projects from "./Projects/Projects";
import { HStack } from "@chakra-ui/react";
import Todos from "./Todos/Todos";

const Home = (props) => {
  const handleSignOut = (e) => {
    e.preventDefault();
    console.log("Sign Out");
    props.signOut();
  };

  return (
    <HStack height="calc(100vh - 6rem)">
      <Projects userUID={props.uid} />
      <Todos />
    </HStack>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
