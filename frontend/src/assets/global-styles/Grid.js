import styled from "styled-components";

const Column = styled.div`
  width: ${(props) => (props.colWidth ? props.colWidth : "100%")};
  display: flex;
  justify-content: ${(props) => (props.alignLeft ? "start" : "center")};
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    min-width: 50%;
  }

  @media (max-width: 768px) {
    justify-content: start;
    padding: 10px 0;
    width: 100%;
  }
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: ${(props) => (props.spacing ? props.spacing : "60px 0")};

  @media (max-width: 1200px) {
    padding: 60px 20px;
  }
  @media (max-width: 768px) {
    padding: 50px 10px;
  }
`;

const Row = styled.div`
  display: ${(props) => (props.block ? "block" : "flex")};
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
`;

export { Row, Container, Column };
