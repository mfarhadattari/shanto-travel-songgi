import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#101010',
    },
    secondary: {
      main: 'rgba(16, 16, 16, 0.05)',
    },
    text: {
      primary: '#101010',
      secondary: 'rgba(16, 16, 16, 0.6)',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        style: {
          backgroundColor: '#101010',
          color: '#FFFFFF',
        },
      },
      styleOverrides: {
        root: {
          padding: '8px 20px',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
  typography: {
    fontFamily: '"SUSE", system-ui',
  },
});

export default theme;
