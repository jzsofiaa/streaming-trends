import React from 'react';
import { useStyles } from './Style';
import Zoom from 'react-reveal/Zoom';

function TopThreeWinners({firstPhoto, secondPhoto, thirdPhoto, firstName, secondName, thirdName}) {
    const classes = useStyles();

    function renderWinners(src, alt, place, name) {
        return (
            <Zoom>
                <div className={classes.photo_card}>
                    <img src={src} alt={alt} className={classes.photo} />
                    <div className={classes.place_container}>
                        <div className={classes.place}>{place}</div>
                    </div>
                    <div className={classes.name_container}>
                        <div className={classes.name}>{name}</div>
                    </div>
                </div>
            </Zoom>
        )
    }

    function render() {
        return (
            <>
            <div className={classes.topThree_section}>
                <div className={classes.photo_container}>
                   {renderWinners(firstPhoto, firstName, '1.', firstName)}
                   {renderWinners(secondPhoto, secondName, '2.', secondName)}
                   {renderWinners(thirdPhoto, thirdName, '3.', thirdName)}
                </div>
            </div>
            </>
        )
    }
    return render();
}

export default TopThreeWinners