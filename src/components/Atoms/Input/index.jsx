import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.value = defaultValue;
    ref.current.focus();
    ref.current.onblur = () => {
      if (ref.current === null) return;
      onEditComplete(ref.current.value);
    };
    ref.current.onkeydown = () => {
      if (event.key === "Enter") {
        onEditComplete(ref.current.value);
      }
    };
  }, []);

  return <StyledInput ref={ref} />;
};
export default Input;

const StyledInput = styled.input`
  width: 100%;
  padding: 0 4px;
  border: none;
  ${TEXT.S};
  background-color: ${COLOR.BLACK};
  outline: none;
  color: ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
`;
