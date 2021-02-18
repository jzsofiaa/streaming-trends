import React from 'react';
import { useStyles } from './Style';
import TopThreeWinners from '../../components/topThreeWinners/TopThreeWinners';
import { ARTISTS } from '../../constans/artistsData.js';
import FemaleArtistsChart from '../../components/charts/FemaleArtistsChart';
import Zoom from 'react-reveal/Zoom';

function FemaleArtists() {
    const classes = useStyles();
    function render() {
        return (
            <>
                <div className={classes.title_container}>
                    <div className={classes.title}>
                        Most Streamed <span className={classes.category}>Female Artists</span> Globally
                    </div>
                </div>
                <TopThreeWinners
                    firstPhoto={ARTISTS[0].photo}
                    secondPhoto={ARTISTS[5].photo}
                    thirdPhoto={ARTISTS[6].photo}
                    firstName={ARTISTS[0].name}
                    secondName={ARTISTS[5].name}
                    thirdName={ARTISTS[6].name}
                />
                <Zoom>
                    <div className={classes.chartTitle_container}>
                        <div className={classes.chartTitle}>
                            Top 10 Female Artists By Monthly Listeners
                    </div>
                    </div>
                    <div className={classes.chart_container}>
                        <div className={classes.chart}>
                            <FemaleArtistsChart />
                        </div>
                    </div>
                </Zoom>
            </>
        )
    }
    return render();
}

export default FemaleArtists