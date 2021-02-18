import { createUseStyles } from 'react-jss';
import { theme } from '../../theme/theme.js';

export const useStyles = createUseStyles({
    topThree_section: {
        ...theme.flex.center
    },
    iframe_container: {
        ...theme.flex.center,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '90%',
        marginTop: '4rem'
    },
    iframe_card: {
        ...theme.flex.center,
        flexDirection: 'column',
        alignItems: 'center',
        height: '29rem',
        width: '22rem',
        background: theme.colors.primaryGrey,
        borderRadius: '4px'    
    },
    place: {
        fontSize: '2.5rem',
        color: theme.colors.secondaryGrey,
        fontFamily: theme.fonts.placeFont,
        marginTop: '-1rem'
    },
    '@media(max-width: 750px)': {
        iframe_container: {
            ...theme.flex.center,
            width: '50rem'
        },
        iframe_card: {
            marginBottom: '3rem'
        }
    },
    '@media(min-width: 751px) and (max-width: 1070px)': {
        iframe_container: {
            ...theme.flex.center,
            width: '50%'
        },
        iframe_card: {
            marginBottom: '3rem'        
        }
    },
    '@media(min-width: 1071px) and (max-width: 1200px)': {
        iframe_container: { 
            width: '100%'
        },
        iframe_card: {
            marginBottom: '3rem',
            background: 'orange'
        }
    },
});
