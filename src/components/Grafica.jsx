import { Line } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
Chart.register(LinearScale, LineElement, PointElement, Tooltip, Legend);
// X= Tiempo
// Y= Voltaje

const valueOnda1 = [
  { x: 0, y: -2 },
  { x: 6, y: 2 },
  { x: 8, y: -2 },
];

const valueOnda2 = [
  { x: 0, y: 2 },
  { x: 2, y: 1.5 },
  { x: 2, y: -2 },
  { x: 4, y: -1.5 },
  { x: 4, y: 2 },
  { x: 6, y: 1.5 },
  { x: 6, y: -2 },
  { x: 8, y: -1.5 },
  { x: 8, y: 2 },
];

const valueOndas = [
  { x: -2, y: 2 },
  { x: -0.66, y: 1.5 },
  { x: -0.66, y: -2 },
  { x: 0.66, y: -1.5 },
  { x: 0.66, y: 2 },
  { x: 2, y: 1.5 },
  { x: 2, y: -2 },
  { x: -2, y: -1.5 },
  { x: -2, y: 2 },
];

const Onda1 = () => {
  // Data points
  const dataPoints = valueOnda1;

  // Prepare data for the chart
  const data = {
    datasets: [
      {
        label: "Voltage",
        data: dataPoints,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0, // No smoothing for straight lines
        pointRadius: 3, // Size of the points
      },
    ],
  };

  // Define the y-axis range and ticks
  const options = {
    scales: {
      x: {
        type: "linear", // Set the x-axis to linear
        position: "bottom",
        title: {
          display: true,
          text: "Time (s)",
        },
        min: 0,
        max: 12,
        ticks: {
          stepSize: 1, // Step size for x-axis ticks
        },
      },
      y: {
        title: {
          display: true,
          text: "Voltage (V)",
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
      <Line data={data} options={options} width={1000} height={500} />
    </div>
  );
};

const Onda2 = () => {
  // Data points
  const dataPoints = valueOnda2;

  // Prepare data for the chart
  const data = {
    datasets: [
      {
        label: "Voltage over Time",
        data: dataPoints,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0, // No smoothing for straight lines
        pointRadius: 5, // Size of the points
      },
    ],
  };

  // Define the y-axis range and ticks
  const options = {
    scales: {
      x: {
        type: "linear", // Set the x-axis to linear
        position: "bottom",
        title: {
          display: true,
          text: "Time (s)",
        },
        min: 0,
        max: 12,
        ticks: {
          stepSize: 1, // Step size for x-axis ticks
        },
      },
      y: {
        title: {
          display: true,
          text: "Voltage (V)",
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
      <Line data={data} options={options} width={1000} height={500} />
    </div>
  );
};

const GraficasOndas = () => {
  // Data points
  const dataPoints = valueOndas;
  // Prepare data for the chart
  const data = {
    datasets: [
      {
        label: "Voltage",
        data: dataPoints,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0, // No smoothing for straight lines
        pointRadius: 3, // Size of the points
      },
    ],
  };

  // Define the y-axis range and ticks
  const options = {
    scales: {
      x: {
        type: "linear", // Set the x-axis to linear
        position: "bottom",
        title: {
          display: true,
          text: "Voltaje Onda 1",
        },
        min: -3,
        max: 3,
        ticks: {
          stepSize: 0.5, // Step size for x-axis ticks
        },
      },
      y: {
        title: {
          display: true,
          text: "Voltaje Onda 2",
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
      <Line data={data} options={options} width={1000} height={500} />
    </div>
  );
};

const Graficas = () => {
  return (
    <div>
      <h2>Onda 1</h2>
      <Onda1 />
      <h2>Onda 2</h2>
      <Onda2 />
      <h2>Ondas</h2>
      <GraficasOndas />
    </div>
  );
};

export default Graficas;
/* import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los componentes necesarios
Chart.register(LinearScale, LineElement, PointElement, Tooltip, Legend);

const valueOnda1 = [
  { x: 0, y: -2 },
  { x: 6, y: 2 },
  { x: 8, y: -2 },
];

const valueOnda2 = [
  { x: 0, y: 2 },
  { x: 2, y: 1.5 },
  { x: 2, y: -2 },
  { x: 4, y: -1.5 },
  { x: 4, y: 2 },
  { x: 6, y: 1.5 },
  { x: 6, y: -2 },
  { x: 8, y: -1.5 },
  { x: 8, y: 2 },
];

const valueOndas = [
  { x: -2, y: 2 },
  { x: -0.66, y: 1.5 },
  { x: -0.66, y: -2 },
  { x: 0.66, y: -1.5 },
  { x: 0.66, y: 2 },
  { x: 2, y: 1.5 },
  { x: 2, y: -2 },
  { x: -2, y: -1.5 },
  { x: -2, y: 2 },
];

const Graficas = () => {
  const [selectedWave, setSelectedWave] = useState("onda1");

  const dataPoints =
    selectedWave === "onda1"
      ? valueOnda1
      : selectedWave === "onda2"
      ? valueOnda2
      : valueOndas;

  const minX = Math.min(...dataPoints.map((point) => point.x)) - 1;
  const maxX = Math.max(...dataPoints.map((point) => point.x)) + 1;
  const minY = Math.min(...dataPoints.map((point) => point.y)) - 1;
  const maxY = Math.max(...dataPoints.map((point) => point.y)) + 1;

  const data = {
    datasets: [
      {
        label: "Voltage",
        data: dataPoints,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Time (s)",
        },
        min: minX,
        max: maxX,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        title: {
          display: true,
          text: "Voltage (V)",
        },
        min: minY,
        max: maxY,
        ticks: {
          stepSize: 0.5,
        },
      },
    },
  };

  return (
    <div>
      <div>
        <button onClick={() => setSelectedWave("onda1")} aria-label="Seleccionar Onda 1">Onda 1</button>
        <button onClick={() => setSelectedWave("onda2")} aria-label="Seleccionar Onda 2">Onda 2</button>
        <button onClick={() => setSelectedWave("ondas")} aria-label="Seleccionar Ondas (X-Y)">Ondas (X-Y)</button>
      </div>
      <Line data={data} options={options} width={1000} height={500} />
    </div>
  );
};

export default Graficas;
 */