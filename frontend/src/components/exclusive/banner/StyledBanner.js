import styled from "styled-components";
import ProjectTheme from "../../../assets/global-styles/ProjectTheme";

const StyledHeading = styled.h1`
  font-weight: 600;
  font-size: 48px;
  color: ${ProjectTheme.colors.white};
  margin-bottom: 0;
  @media (max-width: ${ProjectTheme.breakPoints.md}) {
    margin-bottom: 30px;
  }
`;
const StyledParagraph = styled.p`
  font-size: 18px;
  max-width: 445px;
  line-height: 160%;
  color: ${ProjectTheme.colors.white};
  margin-top: 10px;
`;
const BannerWrapper = styled.div`
  padding: 60px 0 40px;
`;

export { StyledHeading, StyledParagraph, BannerWrapper };
