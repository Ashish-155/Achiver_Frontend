// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Chart from 'react-apexcharts';

// const LagChart = ({ lagExecutionScores, lagExecutionScoresRaw }) => {

//     // Chart options
//     const options = {
//         chart: {
//             type: 'area',
//             sparkline: {
//                 enabled: true,
//             },
//         },
//         stroke: {
//             curve: 'smooth',
//             width: 2,
//         },
//         fill: {
//             type: 'gradient',
//             gradient: {
//                 shadeIntensity: 1,
//                 opacityFrom: 0.4,
//                 opacityTo: 0.2,
//             },
//         },
//         colors: ['#04af96'],
//         tooltip: {
//             enabled: true,
//             x: {
//                 formatter: (value) => `Week ${value}`, // Prepend "Week" to the X-axis value
//             },
//             y: {
//                 formatter: (value, { dataPointIndex }) => lagExecutionScoresRaw[dataPointIndex], // Use raw score with % symbol
//             },
//         },
//         grid: {
//             show: false,
//         },
//         yaxis: {
//             show: false,
//         },
//         xaxis: {
//             show: false,
//         },
//     };

//     // Chart series
//     const series = [
//         {
//             name: 'Lead Execution Score',
//             data: lagExecutionScores, // Numeric data for the chart
//         },
//     ];

//     return (
//         <div className="chart-container">
//             <Chart options={options} series={series} type="area" height={100} width={600} />
//         </div>
//     );
// };

// export default LagChart;

import React from 'react';
import Chart from 'react-apexcharts';

const LagChart = ({ goalData }) => {
    const weekGoals = goalData?.Week_Goal || [];

    const leadExecutionScores = weekGoals.map(week => {
        return week.lag_execution_score
            ? parseFloat(week.lag_execution_score.replace('%', ''))
            : null;
    }).filter(score => score !== null);

    const leadExecutionScoresRaw = weekGoals.map(week => week.lag_execution_score || '');

    if (leadExecutionScores.length < 2) {
        return <div>No sufficient data to display chart</div>;
    }

    const weekLabels = leadExecutionScores.map((_, index) => `Week ${index + 1}`);

    const options = {
        chart: {
            type: 'area',
            sparkline: {
                enabled: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.2,
            },
        },
        colors: ['#04af96'],
        tooltip: {
            enabled: true,
            x: {
                formatter: (value) => `Week ${value}`,
            },
            y: {
                formatter: (value, { dataPointIndex }) =>
                    leadExecutionScoresRaw[dataPointIndex]
                        ? `${leadExecutionScoresRaw[dataPointIndex]}%`
                        : ''
            },
        },
        grid: {
            show: true,
        },
        yaxis: {
            show: true,
        },
        xaxis: {
            categories: weekLabels,
            show: true,
        },
        dataLabels: {
            enabled: true,
            formatter: (val) => `${val >= 0 ? '+' : ''}${val.toFixed(2)}%`, // Display + for positive values
        },
    };

    const series = [
        {
            name: 'Lead Execution Score',
            data: leadExecutionScores,
        },
    ];

    return (
        <div className="chart-container">
            <Chart options={options} series={series} type="area"  />
        </div>
    );
};

export default LagChart;