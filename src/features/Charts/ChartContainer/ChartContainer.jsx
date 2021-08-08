import React from 'react';
import PropTypes from 'prop-types';
import SingleChart from '../SingleChart/SingleChart';
import './ChartContainer.css';

const ChartContainer = ({ chartsData }) => {
  const chartList = chartsData.map((chunk) => <SingleChart chartData={chunk} key={chunk.code} />);

  return (
    <div className="charts-container">
      {chartList}
    </div>
  );
};

ChartContainer.propTypes = {
  chartsData: PropTypes.objectOf.isRequired,
};
export default ChartContainer;
