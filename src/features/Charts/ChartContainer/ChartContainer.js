import React from 'react';
import SingleChart from '../SingleChart/SingleChart';
import './ChartContainer.css'

const ChartContainer = ({ chartsData }) => {

    const chartList = chartsData.map(chunk => {
        return <SingleChart chartData={chunk} key={chunk.code} />
    })

    return (
        <div className="charts-container">
            {chartList}
        </div>
    );
}

export default ChartContainer; 