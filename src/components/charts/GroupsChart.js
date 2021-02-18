import React from 'react';
import ReactApexCharts from 'react-apexcharts';
import { theme } from '../../theme/theme.js';

function GroupsChart() {
    const series = [
        {
            name: 'Monthly listeners',
            data: [
                43463700,
                42637623,
                41544617,
                35545808,
                32528017,
                31328369,
                28930649,
                26856733,
                26412463,
                23227226
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
                'Coldplay',
                'Queen',
                'Maroon 5',
                'Black Eyed Peas',
                'Image Dragons',
                'BTS',
                'The Chainsmokers',
                'Jonas Brothers',
                'OneRepublic',
                'The Beatles'
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
        colors: theme.colors.chartPalette4[0],
        chart: {
            foreColor: theme.colors.secondaryLight,
            fontFamily: theme.fonts.defaultFont
        },
        fill: {
            type: 'gradient',
            gradient: {
                gradientToColors: [theme.colors.chartPalette4[1]]
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
                    colors: theme.colors.chartPalette4[0],
                    fill: {
                        type: 'gradient',
                        gradient: {
                            gradientToColors: [theme.colors.chartPalette4[0]]
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

export default GroupsChart