import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import NavItem from "./NavItem/NavItem";

const NavItems = (props) => {
  return (
    <Nav>
      <Ul>
        {props.uid ? (
          <>
            <NavItem link="/">home</NavItem>
            <NavItem link="/todos">todos</NavItem>
          </>
        ) : (
          <>
            <NavItem link="/SignUp">Sign Up</NavItem>
            <NavItem link="/SignIn">Sign In</NavItem>
          </>
        )}
      </Ul>
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

export default connect(mapStateToProps)(NavItems);
