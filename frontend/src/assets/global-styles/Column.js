import styled from "styled-components";

const Column = styled.div`
  width: ${(props) => (props.colWidth ? props.colWidth : "100%")};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export default Column;
