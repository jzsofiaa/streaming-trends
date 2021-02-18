import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './Style';

function Landing() {
    const classes = useStyles();

    function renderButtons(route, button) {
        return(
            <Link to={route}>
                <button type="button" className={classes.button}>{button}</button>
            </Link>
        )
    }

    return (
        <div>
            <div className={classes.header}>
                <div className={classes.title_container}>
                    <div className={classes.year_container}>
                        <div className={classes.year}>2020</div>
                    </div>
                    <div className={classes.title}>
                        <div> Global Streaming Trends</div>
                        <div className={classes.subtitle}>
                            <span className={classes.on}>on </span> Spotify
                            <span className={classes.dot}>.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.main_container}>
                <div className={classes.buttons_container}>
                    {renderButtons("/artists", "Artists")}
                    {renderButtons("/female-artists", "Female Artists")}
                    {renderButtons("/male-artists", "Male Artists")}
                    {renderButtons("/groups", "Groups")}
                    {renderButtons("/albums", "Albums")}
                    {renderButtons("/songs", "Songs")}
                </div>
            </div>
        </div>
    )
}

export default Landing