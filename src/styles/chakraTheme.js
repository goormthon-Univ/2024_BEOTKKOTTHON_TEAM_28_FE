import { extendTheme } from '@chakra-ui/react';

const chakraTheme = extendTheme({
  colors: {
    black: '#000000',
    white: '#ffffff',
    primary: '#0A0A0D',
    secondary: '#334155',
    tertiary: '#64748B',
    brand: '#10B981',
    brandBold: '#065F46',
    info: '#4F46E5',
    infoBold: '#3730A3',
    success: '#0D9488',
    successBold: '#065F46',
    warning: '#F59E0B',
    warningBold: '#B45309',
    background: '#36e7bd',
  },
  components: {
    Button: {
      variants: {
        greenGreen: { bg: '#F0FDFA', color: '#047857' },
        grayWhite: { bg: '#475569', color: '#FFFFFF' },
      },
    },
  },
});

export default chakraTheme;
