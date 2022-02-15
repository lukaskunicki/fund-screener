import styled, { css } from "styled-components";

const StyledTab = styled.button`
  font-family: Libre Franklin;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.6;
  padding: 10px 25px;
  text-align: center;
  color: #2c4959;
  text-transform: uppercase;
  background: #ffffff;
  border: none;
  cursor: pointer;
  ${(props) =>
    !!props.active &&
    css`
      border-bottom: 3px solid #fab083;
      color: #222222;
    `};
`;

export default StyledTab;
