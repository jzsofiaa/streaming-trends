import React from 'react';
import { useStyles } from './Style';
import IFrame from '../../components/iframe/IFrame';
import { SONGS } from '../../constans/url.js';

function Songs() {
    const classes = useStyles();

    function render() {
        return (
            <>
                <div className={classes.title_container}>
                    <div className={classes.title}>
                        Most Streamed <span className={classes.category}>Songs</span> Globally
                    </div>
                </div>
                <IFrame
                    firstTitle={SONGS[0].title}
                    secondTitle={SONGS[1].title}
                    thirdTitle={SONGS[2].title}
                    firstSrc={SONGS[0].src}
                    secondSrc={SONGS[1].src}
                    thirdSrc={SONGS[2].src}
                 />
            </>
        )
    }
    return render();
}

export default Songs