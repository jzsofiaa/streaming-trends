import { createUseStyles } from 'react-jss';
import { theme } from './theme/theme.js';

export const useStyles = createUseStyles({
    '@global': {
        body: {
            background: theme.colors.backgroundColor,
            fontFamily: theme.fonts.defaultFont,
            margin: '0'
        }
    }
})