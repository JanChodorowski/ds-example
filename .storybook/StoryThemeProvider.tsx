import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { theme } from "../src/theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;800&display=swap');

  ${reset}

  body {
    font-family: 'Inter', sans-serif;
  }
`;

export const StoryThemeProvider = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
);
