import { createGlobalStyle } from "styled-components";

import LibreFranklinWoff from "./libre-franklin.woff";
import LibreFranklinWoff2 from "./libre-franklin.woff2";
import RobotoWoff from "./roboto.woff";
import RobotoWoff2 from "./roboto.woff2";

export default createGlobalStyle`
    @font-face {
      font-family: 'Libre Franklin';
      src: local('Libre Franklin'), local('LibreFranklin'),
      url(${LibreFranklinWoff2}) format('woff2'),
      url(${LibreFranklinWoff}) format('woff');
      font-style: normal;
    }
    @font-face {
      font-family: 'Roboto';
      src: local('Roboto'), local('Roboto'),
      url(${RobotoWoff2}) format('woff2'),
      url(${RobotoWoff}) format('woff');
      font-style: normal;
    }
    body {
      margin: 0;
      font-family: Libre Franklin;
      font-weight: 500;
    }
`;
