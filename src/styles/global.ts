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

  @font-face {
    font-family: 'Inter-bold';
    src: url(${InterBold}) format('ttf');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Inter-bold';
    src: url(${InterSemiBold}) format('ttf');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Inter-bold';
    src: url(${InterMedium}) format('ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Inter-bold';
    src: url(${InterRegular}) format('ttf');
    font-weight: 400;
  }

  #root {
    width: 1280px;
    margin: auto;
  }
`