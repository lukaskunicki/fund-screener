import React from "react";
import FullWidthBackground from "../../../assets/global-styles/FullWidthBackground";
import Logo from "../../../assets/icons/Logo.svg";
import { BannerWrapper, StyledHeading, StyledParagraph } from "./StyledBanner";
import { Container, Row } from "../../../assets/global-styles/Grid";

const Banner = () => {
  return (
    <FullWidthBackground>
      <Container>
        <Row>
          <img src={Logo} alt="Website Logo" />
        </Row>
        <Row>
          <BannerWrapper>
            <StyledHeading>Our funds</StyledHeading>
            <StyledParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum ultricies nisi, fermentum bibendum lacus fermentum
              venenatis.
            </StyledParagraph>
          </BannerWrapper>
        </Row>
      </Container>
    </FullWidthBackground>
  );
};

export default React.memo(Banner);
