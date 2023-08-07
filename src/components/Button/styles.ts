import { styled } from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #081B4E;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:disabled {
    background-color: #C3C3C3;
    cursor: auto;
  }
  &:active {
    background-color: #0D2C6C;
  }
`;