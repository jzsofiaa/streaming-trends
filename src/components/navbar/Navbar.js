import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import { useStyles } from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    function renderLinks(route, menuItem) {
        return (
            <Link 
                to={route} 
                onClick={handleDrawerClose}
                className={classes.link}
            >
                {menuItem}
            </Link>
        )
    }
    
    return (
        <>
        <div className={classes.root}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <div className={classes.icons_container}>
                        <Link to='/'>
                            <FontAwesomeIcon icon={faHome} color='#f4f9ec' size="2x"/>
                        </Link>
                        <FontAwesomeIcon 
                            icon={faBars} 
                            color='#f4f9ec' 
                            size="2x"
                            cursor='pointer'
                            onClick={handleDrawerOpen}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{ paper: classes.drawerPaper }}
        >
            <div className={classes.closeIcon_container}>
                <FontAwesomeIcon
                    icon={faTimes}
                    color='#fa734d'
                    size="3x"
                    cursor="pointer"
                    onClick={handleDrawerClose}
                />
            </div>
            <div className={classes.links_container}>
                {renderLinks("/artists", "Artists")}
                {renderLinks("/female-artists", "Female Artists")}
                {renderLinks("/male-artists", "Male Artists")}
                {renderLinks("/groups", "Groups")}
                {renderLinks("/albums", "Albums")}
                {renderLinks("/songs", "Songs")}
            </div>
        </Drawer>
        </>
    )
}

export default Navbar