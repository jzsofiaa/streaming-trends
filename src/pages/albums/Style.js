import { createUseStyles } from 'react-jss';
import { theme } from '../../theme/theme.js';

export const useStyles = createUseStyles({
    title_container: {
        ...theme.flex.center,
        marginTop: '2rem'
    },
    title: {
        color: theme.colors.primaryLight,
        fontSize: '2.5rem',
        letterSpacing: '0.05rem'
    },
    category: {
        color: theme.colors.highlightColor
    },
    '@media (max-width: 600px)': {
        title: {
            textAlign: 'center'
        }
    }
});