import styled, { css } from "styled-components";
import ProjectTheme from "../../../assets/global-styles/ProjectTheme";

const StyledTab = styled.button`
  font-family: ${ProjectTheme.fonts.primary};
  font-size: 20px;
  padding: 10px 30px;
  text-align: center;
  color: #2c4959;
  text-transform: uppercase;
  background: ${ProjectTheme.colors.white};
  border: none;
  cursor: pointer;
  ${(props) =>
    !!props.active &&
    css`
      font-weight: 600;
      border-bottom: 3px solid ${ProjectTheme.colors.orange};
      color: #222222;
    `};
  @media (max-width: ${ProjectTheme.breakPoints.md}) {
    width: 100%;
  }
`;

export default StyledTab;
