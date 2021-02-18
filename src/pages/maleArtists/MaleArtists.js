import React from 'react';
import { useStyles } from './Style';
import TopThreeWinners from '../../components/topThreeWinners/TopThreeWinners';
import { ARTISTS } from '../../constans/artistsData.js';
import MaleArtistsChart from '../../components/charts/MaleArtistsChart';
import Zoom from 'react-reveal/Zoom';

function MaleArtists() {
    const classes = useStyles();
    function render() {
        return (
            <>
                <div className={classes.title_container}>
                    <div className={classes.title}>
                        Most Streamed <span className={classes.category}>Male Artists</span> Globally
                    </div>
                </div>
                <TopThreeWinners
                    firstPhoto={ARTISTS[1].photo}
                    secondPhoto={ARTISTS[2].photo}
                    thirdPhoto={ARTISTS[4].photo}
                    firstName={ARTISTS[1].name}
                    secondName={ARTISTS[2].name}
                    thirdName={ARTISTS[4].name}
                />
                <Zoom>
                    <div className={classes.chartTitle_container}>
                        <div className={classes.chartTitle}>
                            Top 10 Male Artists By Monthly Listeners
                    </div>
                    </div>
                    <div className={classes.chart_container}>
                        <div className={classes.chart}>
                            <MaleArtistsChart />
                        </div>
                    </div>
                </Zoom>
            </>
        )
    }
    return render();
}

export default MaleArtists