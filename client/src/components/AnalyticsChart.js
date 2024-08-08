import React, { forwardRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalyticsChart = forwardRef((props, ref) => {
  const { data, options } = props;
  return <Bar ref={ref} data={data} options={options} />;
});

export default AnalyticsChart;
