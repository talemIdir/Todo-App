import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../store/actions/authActions";
import styled from "styled-components";

const SignUp = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    props.signIn();
  };

  return (
    <Container>
      <FormContainer></FormContainer>
      <ImageContainer>
        <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 6rem);
`;

const FormContainer = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () =>
      dispatch(signIn({ email: "idir.talem@gmail.com", password: "123456" })),
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
