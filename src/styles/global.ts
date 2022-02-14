import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,html{height:100%;width:100%;}


body {
	line-height: 1;
  background: ${props => props.theme.colors.light002};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.family.body};
}

ol, ul, menu {
  list-style: none;
}

img,svg {
  display: block;
  max-width: 100%;
}

table {
  border-collapse: collapse;
}

textarea {
  white-space: revert;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
  color: inherit;
  text-decoration: inherit; /* no underline */
}

button{
  background-color: transparent;
  border: none;
  outline: none;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.text};
  border: 0px none ${props => props.theme.colors.light002};
}
::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.colors.blue001};
}
::-webkit-scrollbar-thumb:active {
  background: ${props => props.theme.colors.blue001};
}
::-webkit-scrollbar-track {
  background: ${props => props.theme.colors.light001};
  border: 0px none ${props => props.theme.colors.light002};
}
::-webkit-scrollbar-track:hover {
  background: ${props => props.theme.colors.light001};
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
`;
