import { createUseStyles } from 'react-jss';
import { theme } from '../../theme/theme';

export const useStyles = createUseStyles({
    title_container: {
        ...theme.flex.center,
        marginTop: '3rem'
    },
    title: {
        color: theme.colors.primaryLight,
        fontSize: '2.5rem',
        letterSpacing: '0.05rem'
    },
    category: {
        color: theme.colors.highlightColor
    },
    chartTitle_container: {
        ...theme.flex.center,
        marginBottom: '1rem'
    },
    chartTitle: {
        width: '60%',
        fontSize: '1.4rem',
        color: theme.colors.secondaryLight
    },
    chart_container: {
        ...theme.flex.center,
        alignItems: 'center',
        marginBottom: '3rem'
    },
    chart: {
        width: '57%',
        background: theme.colors.primaryGrey,
        borderRadius: '4px',
        padding: '1.5rem'
    },
    '@media (max-width: 600px)': {
        title: {
            textAlign: 'center'
        },
        chartTitle: {
            width: '90%',
            fontSize: '1.2rem'
        },
        chart: {
            width: '100%',
            padding: '1.5rem 0 0 0'
        }
    },
    '@media (min-width: 601px) and (max-width: 1200px)': {
        title: {
            textAlign: 'center'
        },
        chartTitle: {
            width: '45rem',
            fontSize: '1.2rem'
        },
        chart: {
            width: '45rem',
            padding: '1.5rem 0 0 0'
        }
    }
});