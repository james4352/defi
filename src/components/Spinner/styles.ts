import { useTheme } from '@mui/material';

export const useStyles = ({ variant }: { variant: 'large' | 'small' }) => {
  const theme = useTheme();
  const isLarge = variant === 'large';
  const size = isLarge ? 6.5 : 5;
  return {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      ...(isLarge && { width: '100%', height: '100%' }),
    },
    spinner: {
      height: theme.spacing(size),
      width: theme.spacing(size),
    },
  };
};
