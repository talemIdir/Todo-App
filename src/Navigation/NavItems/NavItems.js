import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem/NavItem";

const NavItems = () => {
  return (
    <Nav>
      <Ul>
        <NavItem link="/">home</NavItem>
        <NavItem link="/todos">todos</NavItem>
      </Ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

export default NavItems;
