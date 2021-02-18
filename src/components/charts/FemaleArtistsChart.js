import React from 'react';
import ReactApexCharts from 'react-apexcharts';
import { theme } from '../../theme/theme.js';

function FemaleArtistsChart() {
    const series = [
        {
            name: 'Monthly listeners',
            data: [
                80492809,
                61895920,
                56606197,
                52332090,
                51779483,
                51103872,
                44076776,
                42578982,
                41051441 ,
                40923068 
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
                'Ariana Grande',
                'Dua Lipa',
                'Mariah Carey',
                'Sia',
                'Taylor Swift',
                'Billie Eilish',
                'Miley Cyrus',
                'Lady Gaga',
                'Halsey',
                'Nicki Minaj'
            ],
            labels: {
                style: {
                    colors: [theme.colors.secondaryLight],
                    fontFamily: theme.fonts.defaultFont
                },
            },
            axisBorder: {
                show: false
            },
        },
        colors: theme.colors.chartPalette2[0],
        chart: {
            foreColor: theme.colors.secondaryLight,
            fontFamily: theme.fonts.defaultFont
        },
        fill: {
            type: 'gradient',
            gradient: {
                gradientToColors: [theme.colors.chartPalette2[1]]
            },
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
                    colors: theme.colors.chartPalette2[0],
                    fill: {
                        type: 'gradient',
                        gradient: {
                            gradientToColors: [theme.colors.chartPalette2[0]]
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

export default FemaleArtistsChart