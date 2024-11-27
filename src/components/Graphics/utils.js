/**
 * Calcula los voltajes en cada second del rango de tiempo común a dos señales.
 *
 * @param {Array<Object>} sign1 - La primera señal, donde cada objeto tiene propiedades x (tiempo) y y (voltaje).
 * @param {Array<Object>} sign2 - La segunda señal, donde cada objeto tiene propiedades x (tiempo) y y (voltaje).
 * @returns {Array<Object>} Un arreglo de objetos con propiedades x (tiempo) y y (voltaje) que representan los voltajes en cada second del rango de tiempo común.
 */
function calcularVoltajes(sign1, sign2) {
  /**
   * Almacena los resultados de la función calcularVoltajes.
   * @type {Array<Object>}
   */
  const resultados = [];

 
  const tiempoMax = Math.max(
    sign1[sign1.length - 1].x,
    sign2[sign2.length - 1].x
  );


  const tiempoMin = Math.min(sign1[0].x, sign2[0].x);

  /**
   * Repite la señal más pequeña para ajustar al tiempo máximo.
   * @type {Array<Object>}
   */
  const smallSign =
    sign1[sign1.length - 1].x < sign2[sign2.length - 1].x ? sign1 : sign2;
  const signRepetida = repetirSign(smallSign, tiempoMax);

  /**
   * Calcula el voltaje en un segundo específico interpolando entre puntos.
   * @param {Array} sign - Array de puntos con valores x (tiempo) y y (voltaje).
   * @param {number} second - El segundo específico para calcular el voltaje.
   * @returns {Array} - Array de voltajes en el segundo especificado.
   */
  const calcularVoltajeEnSegundo = (sign, second) => {
    const voltajes = [];
    // Itera a través del array sign para encontrar coincidencias exactas para el segundo
    for (let i = 0; i < sign.length; i++) {
        const p = sign[i];
        if (p.x === second) {
            voltajes.push(p.y);
        }
    }
    // Si no hay coincidencias exactas, interpola entre puntos
    if (voltajes.length === 0) {
        for (let i = 0; i < sign.length - 1; i++) {
            const p1 = sign[i];
            const p2 = sign[i + 1];
            if (second >= p1.x && second <= p2.x) {
                const slope = (p2.y - p1.y) / (p2.x - p1.x);
                const interpolado = p1.y + slope * (second - p1.x);
                voltajes.push(interpolado);
            }
        }
    }
    return voltajes;
  };

  // Itera a través de cada segundo en el rango de tiempo dado
  for (let second = tiempoMin; second <= tiempoMax; second++) {
    // Calcula los voltajes para sign1 y sign2 en el segundo actual
    const voltajesSign1 = calcularVoltajeEnSegundo(
        smallSign === sign1 ? signRepetida : sign1,
        second
    );
    const voltajesSign2 = calcularVoltajeEnSegundo(
        smallSign === sign2 ? signRepetida : sign2,
        second
    );

    // Combina los voltajes y almacena los resultados
    for (const v1 of voltajesSign1) {
        for (const v2 of voltajesSign2) {
            resultados.push({ x: v1, y: v2 });
        }
    }
  }

  return resultados;
}

/**
 * Repite una señal hasta un tiempo máximo especificado.
 * @param {Array} sign - Array de puntos con valores x (tiempo) y y (voltaje).
 * @param {number} tiempoMax - El tiempo máximo hasta el cual repetir la señal.
 * @returns {Array} - Nueva señal repetida hasta el tiempo máximo.
 */
function repetirSign(sign, tiempoMax) {
  const nuevaSign = [];
  let tiempoActual = 0;
  const longitud = sign.length;
  
  // Si la señal tiene solo un punto, retorna una copia de ese punto
  if (longitud === 1) {
    return [{ x: sign[0].x, y: sign[0].y }];
  }
  
  // Calcula el periodo de la señal
  const periodo = sign[longitud - 1].x - sign[0].x;

  // Repite la señal hasta alcanzar el tiempo máximo
  while (tiempoActual < tiempoMax) {
    for (let i = 0; i < longitud; i++) {
      const punto = sign[i];
      const nuevoPunto = { x: tiempoActual + punto.x - sign[0].x, y: punto.y };
      if (nuevoPunto.x <= tiempoMax) {
        nuevaSign.push(nuevoPunto);
      }
    }
    tiempoActual += periodo;
  }
  return nuevaSign;
}

export { calcularVoltajes, repetirSign };
