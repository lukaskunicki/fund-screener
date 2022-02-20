import styled from "styled-components";
import SelectArrow from "../../../../assets/icons/SelectArrow.svg";

const StyledSelectWrapper = styled.div`
  font-family: Libre Franklin;
  color: #9c9c9c;

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
    color: #9c9c9c;
    border-radius: 8px;
    background: url('${SelectArrow}') no-repeat 94%;
    appearance: none;
  }
`;

export { StyledSelectWrapper, StyledSelect };
