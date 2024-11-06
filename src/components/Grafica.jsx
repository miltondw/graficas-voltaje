import { Line } from 'react-chartjs-2';
import { Chart, LinearScale, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
Chart.register(LinearScale, LineElement, PointElement, Tooltip, Legend);

const OscilloscopeChart = () => {
  // Data points
  const dataPoints = [
    { x: 0, y: 2 },
    { x: 2, y: 1.5 },
    { x: 2, y: -2 },
    { x: 4, y: -1.5 },
    { x: 4, y: 2 },
  ];

  // Prepare data for the chart
  const data = {
    datasets: [
      {
        label: 'Voltage over Time',
        data: dataPoints,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0, // No smoothing for straight lines
        pointRadius: 5, // Size of the points
      },
    ],
  };

  // Define the y-axis range and ticks
  const options = {
    scales: {
      x: {
        type: 'linear', // Set the x-axis to linear
        position: 'bottom',
        title: {
          display: true,
          text: 'Time (s)',
        },
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1, // Step size for x-axis ticks
        },
      },
      y: {
        title: {
          display: true,
          text: 'Voltage (V)',
        },
        min: -3,
        max: 3,
        ticks: {
          stepSize: 0.5, // Step size for y-axis ticks
        },
      },
    },
  };

  return (
    <div>
      <h2>Oscilloscope Simulation</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default OscilloscopeChart;
