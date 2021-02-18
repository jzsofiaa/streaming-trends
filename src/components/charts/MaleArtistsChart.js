import React from 'react';
import ReactApexCharts from 'react-apexcharts';
import { theme } from '../../theme/theme.js';

function MaleArtistsChart() {
    const series = [
        {
            name: 'Monthly listeners',
            data: [
                77198204,
                65776930,
                57395556,
                56906575,
                54188642,
                51274262,
                50783830,
                45017534,
                44962666,
                44877875
            ]
        }
    ];

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: [
                'Justin Bieber',
                'The Weeknd',
                'J Balvin',
                'Ed Sheeran',
                'Shawn Mendes',
                'Drake',
                'Bad Bunny',
                'Sam Smith',
                'Michael Bublé',
                'DaBaby'
            ],
            labels: {
                style: {
                    colors: [theme.colors.secondaryLight],
                    fontFamily: 'Lato'
                },
            },
            axisBorder: {
                show: false
            },
        },
        colors: theme.colors.chartPalette3[0],
        chart: {
            foreColor: theme.colors.secondaryLight,
            fontFamily: theme.fonts.defaultFont
        },
        fill: {
            type: 'gradient',
            gradient: {
                gradientToColors: [theme.colors.chartPalette3[1]]
            }
        },
        grid: {
            borderColor: theme.colors.secondaryGrey
        },
        tooltip: {
            theme: "dark"
        },
        responsive: [
            {
                breakpoint: 420,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    colors: theme.colors.chartPalette3[1],
                    fill: {
                        type: 'gradient',
                        gradient: {
                            gradientToColors: [theme.colors.chartPalette3[1]]
                        },
                    }
                }
            }
        ]
    };

    return (
        <ReactApexCharts
            options={options}
            series={series}
            type="bar"
            height={500}
        />
    )
}

export default MaleArtistsChart