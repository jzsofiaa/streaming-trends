import React from 'react';
import { useStyles } from './Style';
import TopThreeWinners from '../../components/topThreeWinners/TopThreeWinners';
import { ARTISTS } from '../../constans/artistsData.js';
import ArtistsChart from '../../components/charts/ArtistsChart';
import Zoom from 'react-reveal/Zoom';


function Artists() {
    const classes = useStyles();
   
    function render() {
        return (
            <>
            <div className={classes.title_container}>
                <div className={classes.title}>
                    Most Streamed <span className={classes.category}>Artists</span> Globally
                </div>
            </div>
            <TopThreeWinners
                firstPhoto={ARTISTS[0].photo}
                secondPhoto={ARTISTS[1].photo}
                thirdPhoto={ARTISTS[2].photo}
                firstName={ARTISTS[0].name}
                secondName={ARTISTS[1].name}
                thirdName={ARTISTS[2].name}
            />
            <Zoom>
                <div className={classes.chartTitle_container}>
                    <div className={classes.chartTitle}>
                        Top 10 Artists By Monthly Listeners
                    </div>
                </div>
                <div className={classes.chart_container}>
                    <div className={classes.chart}>
                        <ArtistsChart />
                    </div>  
                </div>
            </Zoom>
        </>
        )
    }
    return render();
}

export default Artists