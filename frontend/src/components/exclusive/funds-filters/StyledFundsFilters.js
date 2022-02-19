import styled from "styled-components";

const StyledClearFiltersButtonWrapper = styled.div`
  margin-left: auto;
  padding: 20px 0;
`;

const StyledClearFiltersButton = styled.button`
  font-family: Roboto;
  font-weight: 500;
  padding: 4px 10px;
  border: 1px solid #f7797d;
  border-radius: 4px;
  font-size: 13px;
  line-height: 22px;
  text-transform: uppercase;
  color: #f7797d;
  cursor: pointer;
  background: transparent;
  transition-duration: 0.2s;

  &:hover {
    background: #f7797d;
    color: #ffffff;
  }
`;

export { StyledClearFiltersButtonWrapper, StyledClearFiltersButton };
