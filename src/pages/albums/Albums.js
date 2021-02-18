import React from 'react';
import { useStyles } from './Style';
import IFrame from '../../components/iframe/IFrame';
import { ALBUMS } from '../../constans/url.js';

function Albums() {
    const classes = useStyles();

    function render() {
        return (
            <>
                <div className={classes.title_container}>
                    <div className={classes.title}>
                        Most Streamed <span className={classes.category}>Albums</span> Globally
                    </div>
                </div>
                <IFrame
                    firstTitle={ALBUMS[0].title}
                    secondTitle={ALBUMS[1].title}
                    thirdTitle={ALBUMS[2].title}
                    firstSrc={ALBUMS[0].src}
                    secondSrc={ALBUMS[1].src}
                    thirdSrc={ALBUMS[2].src}
                />
            </>
        )
    }
    return render();
}

export default Albums