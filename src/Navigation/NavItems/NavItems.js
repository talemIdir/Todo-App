import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { signOut } from "../../store/actions/authActions";
import { selectProject } from "../../store/actions/projectActions";

import NavItem from "./NavItem/NavItem";

const NavItems = (props) => {
  const handleSignOut = (e) => {
    e.preventDefault();
    props.signOut();
  };

  return (
    <Nav>
      <Ul>
        <NavItem link="/">home</NavItem>
        <NavItem handleSignOut={handleSignOut}>Sign out</NavItem>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(NavItems);
