import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <LogoWrapper>TODOS</LogoWrapper>;
};

const LogoWrapper = styled.div`
  color: var(--color-white);
  font-size: 2rem;
  padding: 1rem;
  font-weight: 700;
`;

export default Logo;
