import styled from "styled-components";

const StyledHeading = styled.h1`
  font-weight: 600;
  font-size: 48px;
  color: #ffffff;
  margin-bottom: 0;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
const StyledParagraph = styled.p`
  font-size: 18px;
  max-width: 445px;
  line-height: 160%;
  color: #ffffff;
  margin-top: 10px;
`;
const BannerWrapper = styled.div`
  padding: 60px 0 40px;
`;

export { StyledHeading, StyledParagraph, BannerWrapper };
