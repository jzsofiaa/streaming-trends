import { createUseStyles } from 'react-jss';
import { theme } from '../../theme/theme.js';

export const useStyles = createUseStyles({
    topThree_section: {
        ...theme.flex.center,
        marginTop: '5rem'
    },
    photo_container: {
        ...theme.flex.row,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '60%',
        marginBottom: '5rem'
    },
    photo_card: {
        ...theme.flex.column,
        alignItems: 'center',
        justifyContent: 'center',
        height: '17rem',
        width: '13rem',
        background: theme.colors.primaryGrey,
        borderRadius: '4px'
    },
    photo: {
        marginTop: '0.7rem',
        marginBottom: '0.5rem'
    },
    name_container: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '11rem',
        'z-index': '1'
    },
    name: {
        color: theme.colors.secondaryLight,
        fontSize: '1.3rem',
        fontFamily: theme.fonts.winnersFont,
        letterSpacing: '0.05rem',
        marginTop: '-2.6rem'
    },
    place_container: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '10.5rem'
    },
    place: {
        fontSize: '3rem',
        color: theme.colors.secondaryGrey,
        fontFamily: theme.fonts.placeFont
    },
    '@media (max-width: 600px)': {
        photo_container: {
            ...theme.flex.center
        },
        photo_card: {
          marginBottom: '2rem'
        }
    },
    '@media(min-width: 601px) and (max-width: 700px)': {
        photo_container: {
            ...theme.flex.center
        },
        photo_card: {
            marginBottom: '2rem'
        }
    },
    '@media(min-width: 701px) and (max-width: 1200px)': {
        photo_container: {
            width: '45rem'
        },
        photo_card: {
            marginBottom: '2rem'
        }
    }
});