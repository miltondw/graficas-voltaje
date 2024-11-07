import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { calcularVoltajes, repetirOnda } from "./utils";
import {
  handleInputChange,
  calcularTiempoMaximo,
  setDemoValues,
} from "./grafica";
import "./graficas.css";
// Registrar los componentes necesarios
Chart.register(LinearScale, LineElement, PointElement, Tooltip, Legend);

/**
 * Componente que visualiza dos ondas y calcula sus puntos de intersección.
 * Permite al usuario introducir las coordenadas de las ondas y mostrar
 * los resultados en un gráfico.
 *
 * @component
 * @returns {JSX.Element} Elemento del componente Graficas.
 */
const Graficas = () => {
  const [onda1, setOnda1] = useState([]);
  const [onda2, setOnda2] = useState([]);
  const [nuevaOnda1, setNuevaOnda1] = useState([]);
  const [nuevaOnda2, setNuevaOnda2] = useState([]);
  const [intersecciones, setIntersecciones] = useState([]);
  const [mostrarIntersecciones, setMostrarIntersecciones] = useState(false); // Estado para controlar la visibilidad de intersecciones

  // UseEffect para calcular ondas extendidas y puntos de intersección
  useEffect(() => {
    if (onda1.length > 0 && onda2.length > 0) {
      const tiempoMaximo = calcularTiempoMaximo(onda1, onda2);
      const nuevaOnda1 = repetirOnda(onda1, tiempoMaximo);
      const nuevaOnda2 = repetirOnda(onda2, tiempoMaximo);
      const puntosInterseccion = calcularVoltajes(nuevaOnda1, nuevaOnda2);
      setNuevaOnda1(nuevaOnda1);
      setNuevaOnda2(nuevaOnda2);
      setIntersecciones(puntosInterseccion);
    }
  }, [onda1, onda2]); // Ejecutar solo cuando onda1 o onda2 cambien
  const cleanValues = () => {
    setOnda1([]);
    setOnda2([]);
    setNuevaOnda1([]);
    setNuevaOnda2([]);
    setIntersecciones([]);
  }
  // Preparar datos para el gráfico
  const data = {
    datasets: [
      {
        label: "Onda 1",
        data: nuevaOnda1,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0,
        pointRadius: 3,
        hidden: mostrarIntersecciones, // Ocultar si se muestran intersecciones
      },
      {
        label: "Onda 2",
        data: nuevaOnda2,
        fill: false,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        tension: 0,
        pointRadius: 3,
        hidden: mostrarIntersecciones, // Ocultar si se muestran intersecciones
      },
      {
        label: "Puntos de Intersección",
        data: intersecciones,
        fill: true,
        backgroundColor: "rgba(255,206,86,0.6)",
        borderColor: "rgba(255,206,86,1)",
        pointRadius: 3,
        hidden: !mostrarIntersecciones, // Mostrar solo si se seleccionan
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Time (s)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Voltage (V)",
        },
      },
    },
  };

  const demo = () => {
    setDemoValues(setOnda1, setOnda2);
  };

  // Función para alternar la visibilidad de los puntos de intersección
  const toggleIntersecciones = () => {
    setMostrarIntersecciones(!mostrarIntersecciones);
  };

  return (
    <div className="graphics-content">
      <button onClick={demo} className="btn-demo">Demo</button>
      <div className="inputs-value">
        <div className="input-value">
          <h3>Onda 1 X</h3>
          <input
            type="text"
            onChange={(e) => handleInputChange(e, setOnda1)}
            placeholder="Ej: 0:-2, 6:2, 8:-2"
          />
        </div>
        <div className="input-value">
          <h3>Onda 2 Y</h3>
          <input
            type="text"
            onChange={(e) => handleInputChange(e, setOnda2)}
            placeholder="Ej: 0:2, 2:1.5, 2:-2, 4:-1.5, 4:2"
          />
        </div>
        <button className="btn-clean" onClick={cleanValues} >Limpiar</button>
      </div>
      <button className="btn-inter" onClick={toggleIntersecciones}>
        {mostrarIntersecciones
          ? "Ocultar Puntos de Intersección"
          : "Mostrar Puntos de Intersección"}
      </button>
      <Line data={data} options={options} width={1000} height={500} />
      <div className="list-points">
        <h4>Puntos de intersección:</h4>
        <ul>
          {intersecciones.map((punto, index) => (
            <li key={index}>
              Intersección en (X: {punto.x}, Y: {punto.y})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Graficas;
