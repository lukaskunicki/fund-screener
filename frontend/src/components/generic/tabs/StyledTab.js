import styled, { css } from "styled-components";

const StyledTab = styled.button`
  font-family: Libre Franklin;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  padding: 10px 30px;
  text-align: center;
  color: #2c4959;
  text-transform: uppercase;
  background: #ffffff;
  border: none;
  cursor: pointer;
  ${(props) =>
    !!props.active &&
    css`
      font-weight: 600;
      border-bottom: 3px solid #fab083;
      color: #222222;
    `};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default StyledTab;
