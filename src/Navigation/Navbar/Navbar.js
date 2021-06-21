import React from "react";
import styled from "styled-components";

import Logo from "../../components/Logo/Logo";
import NavItems from "../NavItems/NavItems";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <NavItems />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: var(--color-main);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: 100rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Navbar;
