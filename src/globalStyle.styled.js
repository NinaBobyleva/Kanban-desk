import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}
html,
body {
  background-color: ${props => props.theme.body};
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: ${props => props.theme.text};
}
`;

export const Wrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${props => props.theme.bgLog};
`;

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    @media screen and (max-width: 495px) {
      width: 100%;
      padding: 0 16px;
    }
`;

export const Hover1 = css`
  &:hover {
    background-color: #33399b;
    
  }
`;

export const Hover2 = css`
  &:hover {
    color: #33399b;
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const Hover3 = css`
  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
    a {
      color: #FFFFFF;
    }
  }
`;

export const Hover3A = styled.a`
  color: #FFFFFF;
`;

export const Subttl = css`
  color: ${props => props.theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Orange = css`
  background: ${props => props.theme.bgOrange};
  color: ${props => props.theme.colorOrange};
`;

export const Green = css`
  background: ${props => props.theme.bgGreen};
  color: ${props => props.theme.colorGreen};
`;

export const Purple = css`
  background: ${props => props.theme.bgPurple};
  color: ${props => props.theme.colorPurple};
`;

export const ColorTheme = (color) => css`
  ${color === "_orange" && Orange}
  ${color === "_green" && Green}
  ${color === "_purple" && Purple}
`;