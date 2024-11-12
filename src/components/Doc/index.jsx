import './Doc.css'

const Doc = () => {
  return (
    <div className="documentation-container">
      <h1>Gráficas</h1>

      <h2>Descripción</h2>
      <p>
        Este proyecto es una aplicación React que permite visualizar dos signs y calcular sus puntos de intersección en un gráfico. Utiliza la biblioteca <code>react-chartjs-2</code> para renderizar gráficos de líneas y <code>chart.js</code> para la configuración del gráfico. Los usuarios pueden ingresar coordenadas de las signs a través de campos de entrada, y la aplicación calculará y mostrará las signs resultantes, así como los puntos de intersección.
      </p>

      <h2>Requisitos</h2>
      <ul>
        <li>Node.js (v14 o superior)</li>
        <li>npm (v5 o superior)</li>
      </ul>

      <h2>Uso</h2>
      <ol>
        <li>
          En la interfaz de usuario, verás dos campos de entrada para las signs:
          <ul>
            <li><strong>sign 1</strong>: ingresa coordenadas en el formato <code>x:y</code>, separadas por comas (ejemplo: <code>0:-2, 6:2, 8:-2</code>).</li>
            <li><strong>sign 2</strong>: ingresa coordenadas en el mismo formato (ejemplo: <code>0:2, 2:1.5, 2:-2, 4:-1.5, 4:2</code>).</li>
          </ul>
        </li>
        <li>
          Al ingresar las coordenadas, las signs se representarán gráficamente en un gráfico de líneas.
        </li>
        <li>
          Los puntos de intersección de las signs se calcularán y se mostrarán en la lista debajo del gráfico.
        </li>
      </ol>

      <h2>Funcionalidades</h2>
      <ul>
        <li><strong>Ingreso de Datos</strong>: Los usuarios pueden ingresar las coordenadas de dos signs y ver cómo se representan visualmente en un gráfico.</li>
        <li><strong>Cálculo de Intersecciones</strong>: La aplicación calcula automáticamente los puntos de intersección entre las dos signs y los muestra en la interfaz.</li>
        <li><strong>Visualización Gráfica</strong>: Utiliza <code>react-chartjs-2</code> para renderizar gráficos interactivos con soporte para escalas lineales.</li>
      </ul>

      <h2>Estructura del Código</h2>
      <p>
        El componente principal es <code>Graficas</code>, que maneja el estado de las signs y los puntos de intersección. Se utilizan los siguientes hooks de React:
      </p>
      <ul>
        <li><code>useState</code>: Para manejar el estado de las signs y los puntos de intersección.</li>
        <li><code>useEffect</code>: Para calcular las signs extendidas y los puntos de intersección cada vez que las signs cambian.</li>
      </ul>

      <h3>Funciones Clave</h3>
      <ul>
        <li><strong>handleInputChange</strong>: Maneja cambios en los campos de entrada y actualiza el estado de las signs.</li>
        <li><strong>repetirsign</strong>: Duplica los puntos de una sign hasta un tiempo máximo definido.</li>
        <li><strong>calcularVoltajes</strong>: Función utilizada para calcular los puntos de intersección, que se debe definir en <code>./utils</code>.</li>
      </ul>

      <h3>Utils</h3>
      <ul>
        <li><strong>calcularVoltajeEnSegundo</strong>: Esta función calcula el voltaje de la sign en un segundo específico utilizando interpolación lineal. Toma como parámetros la sign y el segundo deseado.</li>
        <li><strong>calcularVoltajes</strong>: Esta función toma dos signs y devuelve un array de resultados que contienen los voltajes correspondientes en la sign 1 para cada segundo en sign 2.</li>
      </ul>
    </div>
  );
};

export default Doc;
