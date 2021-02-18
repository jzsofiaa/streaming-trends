import { createUseStyles } from 'react-jss';
import { theme } from '../../theme/theme.js';

export const useStyles = createUseStyles({
   icons_container: {
       display: 'flex',
       justifyContent: 'space-between',
       flexWrap: 'wrap',
       width: '100%'
   },
   drawerPaper: {
       backgroundColor: ['#192d2a', '!important'],
       width: '20rem'
   },
   closeIcon_container: {
       display: 'flex',
       justifyContent: 'flex-end',
       margin: '1rem 1rem 3rem 0'
   },
   links_container: {
       ...theme.flex.column,
       textAlign: 'right',
       marginRight: '1rem',
   },
   link: {
       textDecoration: 'none',
       color: theme.colors.primaryLight,
       fontSize: '2rem',
       paddingBottom: '1.4rem',
       '&:hover': {
            paddingRight: '2rem'
       }
   }
})