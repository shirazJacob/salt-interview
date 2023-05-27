import { createTheme } from '@mui/material/styles';

const palette = {
  primary: '#7D3CE9',
  secondary: '#E5DDF8',
  info: '#5D94A0',
  primaryLight: '#DED8E8',
  text: '#3D3D3D',
  grey100: '#D5D4D8',
  grey200: '#EDEDED',
  grey300: '#A1A0A3',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
      light: palette.primaryLight,
    },
    secondary: { main: palette.secondary },
    grey: {
      '100': palette.grey100,
      '200': palette.grey200,
      '300': palette.grey300,
    },
    info: { main: palette.info },
    text: { primary: palette.text },
  },
  typography: {
    allVariants: {
      fontFamily: 'Inter',
      color: palette.text,
    },
    h1: {
      fontWeight: 700,
      fontSize: '26px',
      lineHeight: '39px',
    },
    subtitle1: {
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '18px',
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '18px',
      color: palette.primary,
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          textTransform: 'none',
          fontSize: '14px',
          lineHeight: '22px',
          fontWeight: 'normal',
          color: palette.text,
          '&.Mui-selected': {
            fontWeight: 600,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderTop: `1px solid ${palette.primaryLight}`,
          borderBottom: `1px solid ${palette.primaryLight}`,
          marginTop: '100px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'normal',
          textTransform: 'none',
          borderRadius: '6px',
          boxShadow: 'none',
        },
      },
    },
  },
});
