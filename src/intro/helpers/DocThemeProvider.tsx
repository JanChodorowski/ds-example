import { FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { theme } from '../../theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;800&display=swap');

  ${reset}

  body {
    font-family: 'Inter', sans-serif;
  }

  h2 {
    border-bottom: 0 !important;
    margin: 40px 0 20px !important;
  }
`;

// adding ThemeProvider in docs (.mdx)
export const DocThemeProvider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
