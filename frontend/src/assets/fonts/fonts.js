import { createGlobalStyle } from "styled-components";

import LibreFranklinWoff from "./libre-franklin.woff";
import LibreFranklinWoff2 from "./libre-franklin.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Libre Franklin';
        src: local('Libre Franklin'), local('LibreFranklin'),
        url(${LibreFranklinWoff2}) format('woff2'),
        url(${LibreFranklinWoff}) format('woff');
        font-style: normal;
    }
`;
