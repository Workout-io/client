import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Kanit', // Replace with your custom font stack
      'Arial', // Fallback font in case your custom font is not available
      'sans-serif',
    ].join(','),
  },
  // other customizations like palette, breakpoints, etc.
});

export default theme;