import styled from "styled-components";
import SelectArrow from "../../../../assets/icons/SelectArrow.svg";
import ProjectTheme from "../../../../assets/global-styles/ProjectTheme";

const StyledSelectWrapper = styled.div`
  font-family: ${ProjectTheme.fonts.primary};
  color: ${ProjectTheme.colors.darkGrey};
  max-width: 255px;

  @media (max-width: ${ProjectTheme.breakPoints.lg}) {
    padding: 10px 5px;
  }
  @media (max-width: ${ProjectTheme.breakPoints.sm}) {
    max-width: 100%;
    width: 100%;
  }
  & > label {
    width: 100%;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    display: inline-block;
    margin-bottom: 10px;
  }
`;

const StyledSelect = styled.select`
    padding: 18.5px 68px 18.5px 14px;
    min-width: 255px;
    font-size: 16px;
    line-height: 19px;
    color: ${ProjectTheme.colors.darkGrey};
    border-radius: 8px;
    cursor: pointer;
    background: url('${SelectArrow}') no-repeat 94%;
    appearance: none;
    @media (max-width: ${ProjectTheme.breakPoints.sm}) {
      width: 100%;
    }
  }
`;

export { StyledSelectWrapper, StyledSelect };
