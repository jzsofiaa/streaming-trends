import React from 'react';
import { useStyles } from './Style';
import Zoom from 'react-reveal/Zoom';

function IFrame({firstTitle, secondTitle, thirdTitle, firstSrc, secondSrc, thirdSrc}) {
    const classes = useStyles();

    function renderIFrame(place, title, src) {
        return (
            <Zoom>
                <div className={classes.iframe_card}>
                    <div className={classes.place}>{place}</div>
                    <iframe
                        title={title}
                        src={src}
                        width="300"
                        height="380"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    />
                </div>
            </Zoom>
        )
    }

    function render() {
        return (
            <div className={classes.topThree_section}>
                <div className={classes.iframe_container}>
                    {renderIFrame('1.', firstTitle, firstSrc)}
                    {renderIFrame('2.', secondTitle, secondSrc)}
                    {renderIFrame('3.', thirdTitle, thirdSrc)}
                </div>
            </div>
        )
    }
    return render();
}

export default IFrame