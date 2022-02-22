import styled from "styled-components";

const StyledFiltersBackground = styled.div`
  background: #fafafa;
  padding: 0 0 55px;
`;

const StyledClearFiltersButtonWrapper = styled.div`
  top: 20px;
  right: 0;
  position: absolute;
  @media (max-width: 1200px) {
    right: 5px;
  }
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

export {
  StyledFiltersBackground,
  StyledClearFiltersButtonWrapper,
  StyledClearFiltersButton,
};
