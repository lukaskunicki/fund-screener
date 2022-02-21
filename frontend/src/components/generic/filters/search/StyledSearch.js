import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  max-width: 265px;
  @media (max-width: 1200px) {
    padding: 10px 5px;
  }
  @media (max-width: 590px) {
    max-width: 100%;
    width: 100%;
  }
`;
const StyledSearch = styled.input`
  font-family: Libre Franklin;
  padding: 18.5px 42px 18.5px 14px;
  font-size: 16px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  @media (max-width: 590px) {
    width: 100%;
  }
`;

export { SearchWrapper, StyledSearch };
