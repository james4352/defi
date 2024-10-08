import { SHAPE } from '@/theme/MuiThemeProvider/muiTheme';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();

  return {
    container: css`
      display: flex;
      align-items: center;
    `,
    icon: css`
      margin-right: ${theme.spacing(2)};
      width: ${SHAPE.iconSize.xLarge}px;
      height: ${SHAPE.iconSize.xLarge}px;
    `,
  };
};
