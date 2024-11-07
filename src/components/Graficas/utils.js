/**
 * Calcula el voltaje de una onda en un segundo específico utilizando interpolación lineal.
 *
 * **Interpolación Lineal**:
 * La interpolación lineal es un método matemático utilizado para estimar valores intermedios entre 
 * dos puntos conocidos en un conjunto de datos. Se basa en la suposición de que los puntos se pueden 
 * conectar mediante una línea recta, lo que permite calcular un valor desconocido dentro del rango 
 * de los puntos conocidos.
 *
 * **Fórmula**:
 * La fórmula de la interpolación lineal entre dos puntos x0, y0 y x1, y1 es:
 *
 * y = y0 + (y1 - y0) / (x1 - x0) * (x - x0)
 *
 * Donde:
 * - y es el valor interpolado que se desea calcular.
 * - x es el valor para el cual se está estimando y.
 * - x0 y x1 son las coordenadas x de los puntos conocidos.
 * - y0 y y1 son las coordenadas y de los puntos conocidos.
 *
 * **Explicación**:
 * Para calcular un valor intermedio, se toma la diferencia entre los valores y de los puntos 
 * conocidos y se ajusta según la diferencia en los valores x. Esto permite encontrar un valor de 
 * "y" que se encuentra en la línea recta que conecta los dos puntos.
 *
 * **Limitaciones**:
 * Aunque es un método simple y efectivo, la interpolación lineal puede no ser precisa si los 
 * datos tienen una tendencia no lineal, ya que asume que la relación entre los puntos es lineal.
 *
 * @param {Array<{x: number, y: number}>} onda - Un arreglo de puntos que representan la onda, 
 * donde cada punto tiene propiedades x (tiempo) e y (voltaje).
 * @param {number} segundo - El segundo para el cual se desea calcular el voltaje.
 * @returns {number|null} El voltaje en el segundo especificado, o null si el segundo no está en el rango.
 */
function calcularVoltajeEnSegundo(onda, segundo) {
  for (let i = 0; i < onda.length - 1; i++) {
    const p1 = onda[i];
    const p2 = onda[i + 1];

    // Verificar si el segundo está entre los dos puntos
    if (segundo >= p1.x && segundo <= p2.x) {
      // Interpolación lineal
      const slope = (p2.y - p1.y) / (p2.x - p1.x);
      const y = p1.y + slope * (segundo - p1.x);
      return y;
    }
  }
  return null;
}

/**
 * Calcula los voltajes correspondientes de una onda en los puntos de otra onda.
 *
 * @param {Array<{x: number, y: number}>} onda1 - La primera onda, un arreglo de objetos con propiedades x e y.
 * @param {Array<{x: number, y: number}>} onda2 - La segunda onda, un arreglo de objetos con propiedades x e y.
 * @returns {Array<{x: number, y: number}>} Un arreglo de objetos que contienen los voltajes calculados de onda1
 * para cada punto de onda2.
 */
function calcularVoltajes(onda1, onda2) {
  const resultados = [];
  
  // Iterar sobre cada punto en onda2
  onda2.forEach((punto) => {
    const segundo = punto.x;
    const voltajeOnda1 = calcularVoltajeEnSegundo(onda1, segundo); // Obtener el voltaje correspondiente de onda1
    // Agregar el resultado al array
    resultados.push({ x: voltajeOnda1, y: punto.y });
  });
  
  return resultados;
}

/**
 * Repite una onda corta hasta un tiempo máximo especificado.
 *
 * @param {Array<{x: number, y: number}>} ondaCorta - La onda que se desea repetir, un arreglo de objetos
 * con propiedades x e y.
 * @param {number} tiempoMaximo - El tiempo hasta el cual se debe repetir la onda.
 * @returns {Array<{x: number, y: number}>} Un nuevo arreglo que representa la onda repetida.
 */
const repetirOnda = (ondaCorta, tiempoMaximo) => {
  const nuevaOnda = [];
  let tiempoActual = 0;
  const longitud = ondaCorta.length;

  while (tiempoActual <= tiempoMaximo) {
    for (let i = 0; i < longitud; i++) {
      const punto = ondaCorta[i];
      const nuevoPunto = { x: tiempoActual + punto.x, y: punto.y };
      if (nuevoPunto.x <= tiempoMaximo) {
        nuevaOnda.push(nuevoPunto);
      }
    }
    tiempoActual += ondaCorta[longitud - 1].x; // Avanzar al siguiente ciclo
  }

  return nuevaOnda;
};

export { calcularVoltajes, repetirOnda };
