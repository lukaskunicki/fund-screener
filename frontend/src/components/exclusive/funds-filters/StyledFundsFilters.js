import styled from "styled-components";
import ProjectTheme from "../../../assets/global-styles/ProjectTheme";

const StyledFiltersBackground = styled.div`
  background: ${ProjectTheme.colors.greyBackground};
  padding: 0 0 55px;
`;

const StyledClearFiltersButtonWrapper = styled.div`
  top: 20px;
  right: 0;
  position: absolute;
  @media (max-width: ${ProjectTheme.breakPoints.lg}) {
    right: 5px;
  }
`;

const StyledClearFiltersButton = styled.button`
  font-family: ${ProjectTheme.fonts.tertiary};
  padding: 4px 10px;
  border: 1px solid ${ProjectTheme.colors.red};
  border-radius: 4px;
  font-size: 13px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${ProjectTheme.colors.red};
  cursor: pointer;
  background: transparent;
  transition-duration: 0.2s;

  &:hover {
    background: ${ProjectTheme.colors.red};
    color: ${ProjectTheme.colors.white};
  }
`;

export {
  StyledFiltersBackground,
  StyledClearFiltersButtonWrapper,
  StyledClearFiltersButton,
};
