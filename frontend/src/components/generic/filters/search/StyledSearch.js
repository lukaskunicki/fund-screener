import styled from "styled-components";
import ProjectTheme from "../../../../assets/global-styles/ProjectTheme";
const SearchWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  max-width: 265px;
  @media (max-width: ${ProjectTheme.breakPoints.lg}) {
    padding: 10px 5px;
  }
  @media (max-width: ${ProjectTheme.breakPoints.sm}) {
    max-width: 100%;
    width: 100%;
  }
`;
const StyledSearch = styled.input`
  font-family: ${ProjectTheme.fonts.primary};
  padding: 18.5px 42px 18.5px 14px;
  font-size: 16px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  background: inherit;
  border: 1px solid ${ProjectTheme.colors.transparentGrey};
  @media (max-width: ${ProjectTheme.breakPoints.sm}) {
    width: 100%;
  }
`;

export { SearchWrapper, StyledSearch };
