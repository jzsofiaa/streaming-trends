import React from 'react';
import { useStyles } from './Style';
import TopThreeWinners from '../../components/topThreeWinners/TopThreeWinners';
import { ARTISTS } from '../../constans/artistsData.js';
import GroupsChart from '../../components/charts/GroupsChart';
import Zoom from 'react-reveal/Zoom';

function Groups() {
    const classes = useStyles();

    function render() {
        return (
            <>
                <div className={classes.title_container}>
                    <div className={classes.title}>
                        Most Streamed <span className={classes.category}>Groups</span> Globally
                </div>
                </div>
                <TopThreeWinners
                    firstPhoto={ARTISTS[7].photo}
                    secondPhoto={ARTISTS[8].photo}
                    thirdPhoto={ARTISTS[9].photo}
                    firstName={ARTISTS[7].name}
                    secondName={ARTISTS[8].name}
                    thirdName={ARTISTS[9].name}
                />
                <Zoom>
                    <div className={classes.chartTitle_container}>
                        <div className={classes.chartTitle}>
                            Top 10 Groups By Monthly Listeners
                    </div>
                    </div>
                    <div className={classes.chart_container}>
                        <div className={classes.chart}>
                            <GroupsChart />
                        </div>
                    </div>
                </Zoom>
            </>
        )
    }
    return render();
}

export default Groups