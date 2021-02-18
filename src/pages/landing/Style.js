import { createUseStyles } from 'react-jss';
import { theme } from '../../theme/theme.js';

export const useStyles = createUseStyles({
    header: {
        ...theme.flex.center,
        height: '20rem',
        width: '100%',
        backgroundImage: 'linear-gradient(#325b54, #191919)'
    },
    title_container: {
        ...theme.flex.row,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '70%'
    },
    year_container: {
        ...theme.flex.column,
        alignItems: 'center'
    },
    year: {
        fontSize: '7rem',
        color: '#dcedc2'
    },
    title: {
        fontSize: '2.5rem',
        textAlign: 'right',
        color: theme.colors.primaryLight,
    },
    subtitle: {
        marginTop: '-1.5rem'
    },
    on: {
        fontSize: '2.3rem'
    },
    dot: {
        color: theme.colors.highlightColor,
        fontSize: '4rem'
    },
    main_container: {
        ...theme.flex.center,
        marginTop: '6rem'
    },
    buttons_container: {
        ...theme.flex.row,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '70%'
    },
    button: {
        border: '2px solid #f4f9ec',
        background: 'transparent',
        color: theme.colors.primaryLight,
        outline: 'none',
        fontSize: '0.9rem',
        letterSpacing: '0.05rem',
        fontWeight: 'bold',
        padding: '0.7rem 0rem 0.7rem 0rem',
        borderRadius: '2rem',
        width: '15rem',
        marginBottom: '2rem',
        cursor: 'pointer',
        textTransform: 'uppercase',
        '&:hover': {
            background: theme.colors.primaryLight,
            color: theme.colors.backgroundColor
        }
    },
    contact_container: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        position: 'fixed'
    },
    '@media (max-width: 376px)': {
        header: {
            height: '15rem'
        },
        main_container: {
            height: '70vh',
            marginTop: '0'
        },
        buttons_container: {
            ...theme.flex.center,
            marginTop: '2rem',
            width: '0'
        },
        title_container: {
            ...theme.flex.center,
             width: '90%',
             marginTop: '-2rem'
        },
        year: {
            fontSize: '5rem'
        },
        title: {
            marginTop: '-5rem',
            flexDirection: "column",
            fontSize: '1.5rem',
        },
        subtitle: {
            marginTop: '-0.3rem'
        },
        on: {
            fontSize: '1rem'
        },
        dot: {
            fontSize: '2.5rem'
        }
    },
    
    '@media (min-width: 377px) and (max-width: 659px)': {
        header: {
            height: '15rem'
        },
        main_container: {
            height: '80vh',
            marginTop: '2rem'
        },
        title_container: {
            ...theme.flex.center,
            width: '60%',
            marginTop: '-2rem'
        },
        year: {
            fontSize: '5rem'
        },
        title: {
            marginTop: '-5rem',
            flexDirection: "column",
            fontSize: '1.5rem',
        },
        subtitle: {
            marginTop: '-0.3rem'
        },
        on: {
            fontSize: '1rem'
        },
        dot: {
            fontSize: '2rem'
        },
        buttons_container: {
            ...theme.flex.center,
            width: '0'
        }
    },
    '@media (min-width: 660px) and (max-width: 739px)': {
        header: {
            height: '17rem'
        },
        title_container: {
            ...theme.flex.center,
            width: '40%'
        },
        year: {
            fontSize: '5.5rem'
        },
        title: {
            marginTop: '-5rem',
            flexDirection: "column",
            fontSize: '1.5rem',
        },
        subtitle: {
            marginTop: '-1.5rem'
        },
        on: {
            fontSize: '1rem'
        },
        dot: {
            fontSize: '3rem'
        },
        main_container: {
            marginTop: '2rem'
        },
        buttons_container: {
            ...theme.flex.center,
            width: '0'
        }
    },
    '@media (min-width: 740px) and (max-width: 899px)': {
        header: {
            height: '17rem'
        },
        year: {
            fontSize: '5.5rem'
        },
        title_container: {
            width: '35rem'
        },
        title: {
            fontSize: '1.7rem'
        },
        subtitle: {
            marginTop: '-0.2rem'
        },
        on: {
            fontSize: '1.3rem'
        },
        dot: {
            fontSize: '2.5rem'
        },
        main_container: {
            marginTop: '4rem'
        },
        buttons_container: {
            width: '35rem'
        }
    },
    '@media (min-width: 900px) and (max-width: 1100px)': {
        header: {
            height: '17rem'
        },
        year: {
            fontSize: '5.5rem'
        },
        title_container: {
            width: '35rem'
        },
        title: {
            fontSize: '1.7rem'
        },
        subtitle: {
            marginTop: '-0.2rem'
        },
        on: {
            fontSize: '1.3rem'
        },
        dot: {
            fontSize: '2.5rem'
        },
        main_container: {
            marginTop: '3rem'
        },
        buttons_container: {
            width: '35rem'
        }
    },
    '@media (min-width: 1400px) and (max-width: 1499px)': {
        year: {
            fontSize: '8rem'
        },
        title: {
            fontSize: '3rem'
        },
        header: {
            height: '25rem'
        },
        main_container: {
            marginTop: '8rem'
        },
        button: {
            fontSize: '1rem',
            padding: '0.8rem 0rem 0.8rem 0rem',
            letterSpacing: '0.06rem',
            width: '17rem'
        }
    },
    '@media (min-width: 1500px) and (max-width: 1799px)': {
        header: {
            height: '28rem'
        },
        year: {
            fontSize: '10rem'
        },
        title: {
            fontSize: '3rem'
        },
        dot: {
            fontSize: '2.5rem'
        },
        main_container: {
            marginTop: '8rem'
        },
        button: {
            fontSize: '1.3rem',
            padding: '1rem 0rem 1rem 0rem',
            letterSpacing: '0.06rem',
            width: '20rem'
        },
        buttons_container: {
            width: '70rem'
        }
    }
    ,
    '@media (min-width: 1800px)': {
        header: {
            height: '33rem'
        }
    }
})