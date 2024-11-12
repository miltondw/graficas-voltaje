import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { calcularVoltajes, repetirSign } from "./utils";
import { handleInputChange, calcularTiempoMax, setDemoValues } from "./grafica";
import "./graficas.css";
// Registrar los componentes necesarios
Chart.register(LinearScale, LineElement, PointElement, Tooltip, Legend);

/**
 * Componente que visualiza dos señales y calcula sus puntos de intersección.
 * Permite al usuario introducir las coordenadas de las señales y mostrar
 * los resultados en un gráfico.
 *
 * @component
 * @returns {JSX.Element} Elemento del componente Graficas.
 */
const Graficas = () => {
  const [sign1, setSign1] = useState([]);
  const [sign2, setSign2] = useState([]);
  const [nuevaSign1, setNuevaSign1] = useState([]);
  const [nuevaSign2, setNuevaSign2] = useState([]);
  const [modoXY, setIntersecciones] = useState([]);
  const [mostrarModoXY, setMostrarModoXY] = useState(false); // Estado para controlar la visibilidad de modoXY

  // UseEffect para calcular señales extendidas y puntos de intersección
  // Modo X-Y

  const graficar=()=>{
    const tiempoMax = calcularTiempoMax(sign1, sign2);
    const nuevaSign1 = repetirSign(sign1, tiempoMax);
    const nuevaSign2 = repetirSign(sign2, tiempoMax);
    const modoXY = calcularVoltajes(nuevaSign1, nuevaSign2,tiempoMax);
    console.log(nuevaSign1)
    setNuevaSign1(nuevaSign1);
    setNuevaSign2(nuevaSign2);
    setIntersecciones(modoXY);
  }
  const cleanValues = () => {
    setSign1([]);
    setSign2([]);
    setNuevaSign1([]);
    setNuevaSign2([]);
    setIntersecciones([]);
  };
  // Preparar datos para el gráfico
  const data = {
    datasets: [
      {
        label: "Señal 1",
        data: nuevaSign1,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0,
        pointRadius: 3,
        pointStyle: (ctx) => {
          if (ctx.dataIndex === ctx.dataset.data.length - 1) {
            return 'arrow';
          }
          return 'circle';
        },
        hidden: mostrarModoXY, // Ocultar si se muestran modoXY
      },
      {
        label: "Señal 2",
        data: nuevaSign2,
        fill: false,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        tension: 0,
        pointRadius: 3,
        pointStyle: (ctx) => {
          if (ctx.dataIndex === ctx.dataset.data.length - 1) {
            return 'arrow';
          }
          return 'circle';
        },
        hidden: mostrarModoXY, // Ocultar si se muestran modoXY
      },
      {
        label: "Modo X-Y",
        data: modoXY,
        fill: true,
        backgroundColor: "rgba(255,206,86,0.6)",
        borderColor: "rgba(255,206,86,1)",
        pointRadius: 3,
        hidden: !mostrarModoXY, // Mostrar solo si se seleccionan
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        ticks: {
          callback: (value, index, ticks) => {
            if (index === ticks.length - 1) {
              return `${value} →`;
            }
            return value;
          },
        },
        title: {
          display: true,
          text: !mostrarModoXY ? "Time (s)" : "Voltaje(señal 2)",
        },
      },
      y: {
        ticks: {
          callback: (value, index, ticks) => {
            if (index === ticks.length - 1) {
              return `${value} ↑`;
            }
            return value;
          },
        },
        title: {
          display: true,
          text: !mostrarModoXY ? "Voltage (V)" : "Voltaje(señal 1)",
        },
      },
    },
  };

  const demo = () => {
    setDemoValues(setSign1, setSign2);
    graficar();
  };

  // Función para alternar la visibilidad de los puntos de intersección
  const toggleIntersecciones = () => {
    setMostrarModoXY(!mostrarModoXY);
  };

  return (
    <div className="graphics-content">
      <button onClick={demo} className="btn-demo">
        Demo
      </button>
      <div className="inputs-value">
        <div className="input-value">
          <h3>Señal 1 X</h3>
          <input
            type="text"
            onChange={(e) => handleInputChange(e, setSign1)}
            placeholder="Ej: 0:-2, 6:2, 8:-2"
          />
        </div>
        <div className="input-value">
          <h3>Señal 2 Y</h3>
          <input
            type="text"
            onChange={(e) => handleInputChange(e, setSign2)}
            placeholder="Ej: 0:2, 2:1.5, 2:-2, 4:-1.5, 4:2"
          />
        </div>
        <button className="btn-submit" onClick={graficar}>
          Graficar
        </button>
        <button className="btn-clean" onClick={cleanValues}>
          Limpiar
        </button>
      </div>
      <button className="btn-inter" onClick={toggleIntersecciones}>
        {mostrarModoXY ? "Ocultar Modo X-Y" : "Mostrar Modo X-Y"}
      </button>
      <Line data={data} options={options} width={1000} height={500} />
      <div className="list-points">
        <h4>Puntos de las señales:</h4>

        <div className="content-points">
          <ul>
            <h3> Modelo X-Y </h3>
            {modoXY.map((punto, index) => (
              <li key={index}>
                (X: {punto.x}, Y: {punto.y})
              </li>
            ))}
          </ul>
          <ul>
            <h3> Señal 1 </h3>
            {nuevaSign1.map((punto, index) => (
              <li key={index}>
                (X: {punto.x}, Y: {punto.y})
              </li>
            ))}
          </ul>
          <ul>
            <h3> Señal 2 </h3>
            {nuevaSign2.map((punto, index) => (
              <li key={index}>
                (X: {punto.x}, Y: {punto.y})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Graficas;
