import styled from "styled-components";

const StyledSelectWrapper = styled.div`
  font-family: Libre Franklin;
  color: #9c9c9c;
  position: relative;

  & > label {
    width: 100%;
    position: absolute;
    display: inline-block;
    text-transform: uppercase;
    bottom: 70px;
  }
`;

const StyledSelect = styled.select`
    padding: 18.5px 68px 18.5px 14px;
    min-width: 255px;
    font-size: 16px;
    line-height: 19px;
    color: #9c9c9c;
    border-radius: 8px;
  }
`;

export { StyledSelectWrapper, StyledSelect };
