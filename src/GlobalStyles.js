import { createGlobalStyle, keyframes } from "styled-components";
import { colors } from "./colors";

const fadeIn = keyframes`
  from {
    pointer-events: none;
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    pointer-events: all;
    opacity: 1;
    transform: translateY(0%);
  }
`;

const GlobalStyles = createGlobalStyle`
  html {
    background: ${colors.dark};
  }
  html {
	  scroll-behavior: smooth;
    @media (prefers-reduced-motion) {
      scroll-behavior: none;
    }
  }
  button {
    border: none;
    cursor: pointer;
  }
  body, html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  /* Positioning classes */
  .pos-full {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .pos-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .pos-horiz-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  h1, h2 {
    font-size: 2rem;
    color: #fff;
    text-shadow: -.05em .05em #000;
    font-family: UrbaneAdscriptBoldItalic, sans-serif;
  }
  h1 {
    text-shadow: -10px 10px #000;
  }
  h3, h4, h5, h6 {
    font-size: 1.5rem;
    color: #fff;
    font-family: 'Source Sans Pro', sans-serif;
  }
  body {
    //font-family: Sriracha, sans-serif;
    font-family: 'Source Sans Pro', sans-serif;
    color: #fff;
  }
  .animateIn {
    opacity: 0;
    transform: translateY(8px);
    pointer-events: none;
  }
  .animateIn.start {
    animation: ${fadeIn} .225s cubic-bezier(0.645, 0.045, 0.355, 1) both;
    pointer-events: all;
  }
  .diagram {
    width: 39rem;
    margin: 0 auto;
  }
  .diagram img {
    width: 100%;
  }
`;

export default GlobalStyles;
