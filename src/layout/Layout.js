import React from "react";
import styled from "styled-components";

import Navbar from "../Navigation/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
`;

export default Layout;
