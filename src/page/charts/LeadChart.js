import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

const LeadChart = ({ leadExecutionScores, leadExecutionScoresRaw }) => {

    // Chart options
    const options = {
        chart: {
            type: 'area',
            sparkline: {
                enabled: true,
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
                formatter: (value) => `Week ${value}`, // Prepend "Week" to the X-axis value
            },
            y: {
                formatter: (value, { dataPointIndex }) => leadExecutionScoresRaw[dataPointIndex], // Use raw score with % symbol
            },
        },
        grid: {
            show: false,
        },
        yaxis: {
            show: false,
        },
        xaxis: {
            show: false,
        },
    };

    // Chart series
    const series = [
        {
            name: 'Lead Execution Score',
            data: leadExecutionScores, // Numeric data for the chart
        },
    ];

    return (
        <div className="chart-container">
            <Chart options={options} series={series} type="area" height={100} width={600} />
        </div>
    );
};

export default LeadChart;