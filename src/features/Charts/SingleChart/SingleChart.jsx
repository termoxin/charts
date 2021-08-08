import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart, Line, YAxis, Tooltip, Legend,
} from 'recharts';
import './SingleChart.css';

const SingleChart = ({ chartData }) => (
  <div className="single-container">
    <h3>{chartData.name}</h3>
    <LineChart
      width={300}
      height={150}
      data={chartData.value}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </div>
);

SingleChart.propTypes = {
  chartData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SingleChart;
