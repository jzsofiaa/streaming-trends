import React from 'react';
import ReactApexCharts from 'react-apexcharts';
import { theme } from '../../theme/theme.js';

function ArtistsChart() {
    const series = [
        {
            name: 'Monthly listeners',
            data: [
                80492809,
                77198204,
                65776930,
                61895920,
                57395556,
                56606197,
                56906575,
                54276885,
                52332090,
                51779483
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
                'Justin Bieber', 
                'The Weeknd', 
                'Dua Lipa', 
                'J Balvin', 
                'Mariah Carey', 
                'Ed Sheeran',
                'Shawn Mendes', 
                'Sia', 
                'Taylor Swift'
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
        colors: theme.colors.chartPalette1[0],
        chart: {
            foreColor: theme.colors.secondaryLight,
            fontFamily: theme.fonts.defaultFont
        },
        fill: {
            type: 'gradient',
            gradient: {
                gradientToColors: [theme.colors.chartPalette1[1]]
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
                    colors: theme.colors.chartPalette1[1],
                    fill: {
                        type: 'gradient',
                        gradient: {
                            gradientToColors: [theme.colors.chartPalette1[1]]
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

export default ArtistsChart