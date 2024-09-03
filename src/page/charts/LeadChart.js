// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Chart from 'react-apexcharts';

// const LeadChart = ({ leadExecutionScores, leadExecutionScoresRaw }) => {

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
//                 formatter: (value, { dataPointIndex }) => leadExecutionScoresRaw[dataPointIndex], // Use raw score with % symbol
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
//             data: leadExecutionScores, // Numeric data for the chart
//         },
//     ];

//     return (
//         <div className="chart-container">
//             <Chart options={options} series={series} type="area" height={100} width={600} />
//         </div>
//     );
// };

// export default LeadChart;



// import React from 'react';
// import Chart from 'react-apexcharts';

// const LeadChart = ({ goalData }) => {
//     // Extract data from the response
//     const weekGoals = goalData?.Week_Goal || [];

//     // Get lead execution scores and raw values
//     const leadExecutionScores = weekGoals.map(week => {
//         return week.lead_execution_score
//             ? parseFloat(week.lead_execution_score.replace('%', ''))
//             : null;
//     }).filter(score => score !== null);

//     const leadExecutionScoresRaw = weekGoals.map(week => week.lead_execution_score || '');

//     // Check if there are at least two data points to render the chart
//     if (leadExecutionScores.length < 2) {
//         return <div>No sufficient data to display chart</div>;
//     }

//     // Dynamically generate x-axis labels based on the number of data points
//     const weekLabels = leadExecutionScores.map((_, index) => `Week ${index + 1}`);

//     // Chart options
//     const options = {
//         chart: {
//             type: 'area',
//             sparkline: {
//                 enabled: false,
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
//                 formatter: (value) => `Week ${value + 1}`,
//             },
//             y: {
//                 formatter: (value, { dataPointIndex }) => leadExecutionScoresRaw[dataPointIndex] || '',
//             },
//         },
//         grid: {
//             show: true,
//         },
//         yaxis: {
//             show: true,
//         },
//         xaxis: {
//             categories: weekLabels,
//             show: true,
//         },
//     };

//     // Chart series
//     const series = [
//         {
//             name: 'Lead Execution Score',
//             data: leadExecutionScores,
//         },
//     ];

//     return (
//         <div className="chart-container">
//             <Chart options={options} series={series} type="area" height={300} width={600} />
//         </div>
//     );
// };

// export default LeadChart;


import React from 'react';
import Chart from 'react-apexcharts';

const LeadChart = ({ goalData }) => {
    const weekGoals = goalData?.Week_Goal || [];

    const leadExecutionScores = weekGoals.map(week => {
        return week.lead_execution_score
            ? parseFloat(week.lead_execution_score.replace('%', ''))
            : null;
    }).filter(score => score !== null);

    const leadExecutionScoresRaw = weekGoals.map(week => week.lead_execution_score || '');

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
            <Chart options={options} series={series} type="area" />
        </div>
    );
};

export default LeadChart;


