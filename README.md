# Graficas

## Descripción

Este proyecto es una aplicación React que permite visualizar dos ondas y calcular sus puntos de intersección en un gráfico. Utiliza la biblioteca `react-chartjs-2` para renderizar gráficos de líneas y `chart.js` para la configuración del gráfico. Los usuarios pueden ingresar coordenadas de las ondas a través de campos de entrada, y la aplicación calculará y mostrará las ondas resultantes, así como los puntos de intersección.

## Requisitos

- Node.js (v14 o superior)
- npm (v5 o superior)

## Uso

1. En la interfaz de usuario, verás dos campos de entrada para las ondas:
   - **Onda 1**: ingresa coordenadas en el formato `x:y`, separadas por comas (ejemplo: `0:-2, 6:2, 8:-2`).
   - **Onda 2**: ingresa coordenadas en el mismo formato (ejemplo: `0:2, 2:1.5, 2:-2, 4:-1.5, 4:2`).

2. Al ingresar las coordenadas, las ondas se representarán gráficamente en un gráfico de líneas.

3. Los puntos de intersección de las ondas se calcularán y se mostrarán en la lista debajo del gráfico.

## Funcionalidades

- **Ingreso de Datos**: Los usuarios pueden ingresar las coordenadas de dos ondas y ver cómo se representan visualmente en un gráfico.
- **Cálculo de Intersecciones**: La aplicación calcula automáticamente los puntos de intersección entre las dos ondas y los muestra en la interfaz.
- **Visualización Gráfica**: Utiliza `react-chartjs-2` para renderizar gráficos interactivos con soporte para escalas lineales.

## Estructura del Código

El componente principal es `Graficas`, que maneja el estado de las ondas y los puntos de intersección. Se utilizan los siguientes hooks de React:

- `useState`: Para manejar el estado de las ondas y los puntos de intersección.
- `useEffect`: Para calcular las ondas extendidas y los puntos de intersección cada vez que las ondas cambian.

### Funciones Clave

- **handleInputChange**: Maneja cambios en los campos de entrada y actualiza el estado de las ondas.
- **repetirOnda**: Duplica los puntos de una onda hasta un tiempo máximo definido.
- **calcularVoltajes**: Función utilizada para calcular los puntos de intersección, que se debe definir en `./utils`.
### Utils
- **calcularVoltajeEnSegundo**: Esta función calcula el voltaje de la onda en un segundo específico utilizando interpolación lineal. Toma como parámetros la onda y el segundo deseado.

- **calcularVoltajes**: Esta función toma dos ondas y devuelve un array de resultados que contienen los voltajes correspondientes en la Onda 1 para cada segundo en Onda 2.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.

---