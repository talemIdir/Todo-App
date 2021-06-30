import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItem = ({ link, children, handleSignOut }) => {
  return (
    <Li>
      {link ? (
        <A to={link}>{children}</A>
      ) : (
        <SignOut onClick={handleSignOut}>{children}</SignOut>
      )}
    </Li>
  );
};

const Li = styled.li`
  display: flex;
`;

const SignOut = styled.a`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  border-bottom: 2px solid transparent;
  font-size: 1.2rem;
  padding: 1rem;
  margin: 0 1rem;
  font-weight: 400;
  color: var(--color-white);
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid var(--color-white);
  }
`;

const A = styled(NavLink)`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  border-bottom: 2px solid transparent;
  font-size: 1.2rem;
  padding: 1rem;
  margin: 0 1rem;
  font-weight: 400;
  color: var(--color-white);
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid var(--color-white);
  }
`;

export default NavItem;
