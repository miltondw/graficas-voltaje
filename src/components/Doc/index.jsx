import "./Doc.css";

const Doc = () => {
  return (
    <div className="documentation-container">
      <h1>Gratificador de señales polinómicas</h1>
      <h2>
        <a href="https://github.com/miltondw/graficas-voltaje" target="_blank">
          Código de Github
        </a>
      </h2>

      <h2>Descripción</h2>
      <p>
        Este proyecto es una aplicación React que permite visualizar dos señales
        y calcular sus puntos de intersección en un gráfico. Utiliza la
        biblioteca <code>react-chartjs-2</code> para renderizar gráficos de
        líneas y <code>chart.js</code> para la configuración del gráfico. Los
        usuarios pueden ingresar coordenadas de las señales a través de campos
        de entrada, y la aplicación calculará y mostrará las señales
        resultantes, así como los puntos de intersección.
      </p>

      <h2>Requisitos</h2>
      <ul>
        <li>Node.js (v14 o superior)</li>
        <li>npm (v5 o superior)</li>
      </ul>
      <h2>Instalación</h2>
      <ul>
        <li>
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Node.js
          </a>
        </li>
        <li>
          Descargar zip del código
          <div>
            <img
              src="/graficas-voltaje/download-code.png"
              alt="capture de la pantalla para descargar zip"
              width={300}
            />
          </div>
        </li>
        <li>
          Abra la dirección de la carpeta en una terminal
          <h3>Ejemplo</h3>
          <div>
            <code>cd graficas-voltaje-master </code>
          </div>
          <div>
            <code>npm i</code>
          </div>
          <div>
            <code> npm run dev</code>
          </div>
          <div>
            {" "}
            <h3>Abrir en el navegador</h3>
          </div>
          <div>
            <a
              href="http://localhost:5173/graficas-voltaje/
"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://localhost:5173/graficas-voltaje/
            </a>
          </div>
          <div>
            <img
              src="/graficas-voltaje/page.png"
              alt="pagina"
              width={300}
            />
          </div>
        </li>
      </ul>
      <h2>Uso</h2>
      <ol>
        <li>
          En la interfaz de usuario, verás dos campos de entrada para las
          señales:
          <ul>
            <li>
              <strong>señal 1</strong>: ingresa coordenadas en el formato{" "}
              <code>x:y</code>, separadas por comas (ejemplo:{" "}
              <code>0:-2, 6:2, 8:-2</code>).
            </li>
            <li>
              <strong>señal 2</strong>: ingresa coordenadas en el mismo formato
              (ejemplo: <code>0:2, 2:1.5, 2:-2, 4:-1.5, 4:2</code>).
            </li>
          </ul>
        </li>
        <li>
          Al ingresar las coordenadas, las señales se representarán gráficamente
          en un gráfico de líneas.
        </li>
        <li>
          Los puntos de intersección de las señales se calcularán y se mostrarán
          en la lista debajo del gráfico.
        </li>
      </ol>

      <h2>Funcionalidades</h2>
      <ul>
        <li>
          <strong>Ingreso de Datos</strong>: Los usuarios pueden ingresar las
          coordenadas de dos señales y ver cómo se representan visualmente en un
          gráfico.
        </li>
        <li>
          <strong>Cálculo de Intersecciones</strong>: La aplicación calcula
          automáticamente los puntos de intersección entre las dos señales y los
          muestra en la interfaz.
        </li>
        <li>
          <strong>Visualización Gráfica</strong>: Utiliza{" "}
          <code>react-chartjs-2</code> para renderizar gráficos interactivos con
          soporte para escalas lineales.
        </li>
      </ul>

      <h2>Estructura del Código</h2>
      <p>
        El componente principal es <code>Graphics</code>, que maneja el estado
        de las señales y los puntos de intersección. Se utilizan los siguientes
        hooks de React:
      </p>
      <ul>
        <li>
          <code>useState</code>: Para manejar el estado de las señales y los
          puntos de intersección.
        </li>
        <li>
          <code>useEffect</code>: Para calcular las señales extendidas y los
          puntos de intersección cada vez que las señales cambian.
        </li>
      </ul>

      <h3>Funciones Clave</h3>
      <ul>
        <li>
          <strong>handleInputChange</strong>: Maneja cambios en los campos de
          entrada y actualiza el estado de las señales.
        </li>
        <li>
          <strong>repetirSign</strong>: Duplica los puntos de una señal hasta
          un tiempo máximo definido.
        </li>
        <li>
          <strong>calcularVoltajes</strong>: Función utilizada para calcular los
          puntos de intersección, que se debe definir en <code>./utils</code>.
        </li>
      </ul>

      <h3>Utils</h3>
      <ul>
        <li>
          <strong>calcularVoltajeEnSegundo</strong>: Esta función calcula el
          voltaje de la señal en un segundo específico utilizando interpolación
          lineal. Toma como parámetros la señal y el segundo deseado.
        </li>
        <li>
          <strong>calcularVoltajes</strong>: Esta función toma dos señales y
          devuelve un array de resultados que contienen los voltajes
          correspondientes en la señal 1 para cada segundo en señal 2.
        </li>
      </ul>
    </div>
  );
};

export default Doc;
