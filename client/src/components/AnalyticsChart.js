import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './AnalyticsChart.css';

const AnalyticsChart = ({ type, title }) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: title,
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-container">
      <h2>{title}</h2>
      {type === 'line' && <Line data={data} options={options} />}
      {type === 'bar' && <Bar data={data} options={options} />}
    </div>
  );
};

export default AnalyticsChart;
