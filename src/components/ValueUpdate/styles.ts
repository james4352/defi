import { SHAPE } from '@/theme/MuiThemeProvider/muiTheme';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = ({ isImprovement }: { isImprovement: boolean }) => {
  const theme = useTheme();

  return {
    container: css`
      display: flex;
      align-items: center;
    `,
    icon: css`
      color: ${isImprovement
        ? theme.palette.interactive.success
        : theme.palette.interactive.error};
      margin: 0 ${theme.spacing(2.5)};
      width: ${SHAPE.iconSize.medium}px;
      height: ${SHAPE.iconSize.medium}px;
    `,
  };
};
