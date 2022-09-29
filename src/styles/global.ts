import { createGlobalStyle } from 'styled-components';
import InterBold from '../font/Inter-Bold.ttf';
import InterSemiBold from '../font/Inter-SemiBold.ttf';
import InterMedium from '../font/Inter-Medium.ttf';
import InterRegular from '../font/Inter-Regular.ttf';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 480px) {
    * {
      font-size: 12px;
    }
  }

  @media (min-width: 481px) {
    * {
      font-size: 16px;
    }
  }

  @font-face {
    font-family: 'Inter-bold';
    src: url(${InterBold});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-semibold';
    src: url(${InterSemiBold});
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-medium';
    src: url(${InterMedium});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter-regular';
    src: url(${InterRegular});
    font-weight: 400;
    font-style: normal;
  }

  #root {
    max-width: 1280px;
    margin: auto;
  }

  ul > li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`