import styled from "styled-components";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: ${(props) => (props.noSpacing ? "0" : "60px 0")};

  @media (max-width: 1200px) {
    padding: 60px 20px;
  }
`;

export default Container;
