import styled from "styled-components";

const Row = styled.div`
  display: ${(props) => (props.block ? "block" : "flex")};
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Row;
