import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import TodoCard from "../../Organisms/TodoCard";
import Title from "../../Atoms/Title";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <StyledCardWrapper>
        <TodoCard />
      </StyledCardWrapper>
    </StyledWrapper>
  );
};
export default MainPage;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 20px;
  }
`;
const StyledCardWrapper = styled.div`
  width: 500px;
  padding-top: 20px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 100%;
  }
`;
