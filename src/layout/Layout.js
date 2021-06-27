import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Navbar from "../Navigation/Navbar/Navbar";

const Layout = (props) => {
  return (
    <>
      {props.uid && <Navbar />}
      <MainWrapper>{props.children}</MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
`;

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

export default connect(mapStateToProps)(Layout);
