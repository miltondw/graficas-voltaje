function calcularVoltajes(sign1, sign2) {
  const resultados = [];
  
  // Determinar el tiempo máximo y mínimo de ambas señales
  const tiempoMax = Math.max(
    sign1[sign1.length - 1]?.x ?? 0,
    sign2[sign2.length - 1]?.x ?? 0
  );
  const tiempoMin = Math.min(sign1[0]?.x ?? 0, sign2[0]?.x ?? 0);

  // Función para calcular el voltaje en un segundo específico
  const calcularVoltajeEnSegundo = (sign, segundo) => {
    const voltajes = [];

    // Buscar el voltaje exacto en el segundo especificado
    for (let i = 0; i < sign.length; i++) {
      const p = sign[i];
      if (p.x === segundo) {
        voltajes.push(p.y); // Agregar voltaje exacto
      }
    }

    // Si no hay voltaje exacto, hacer interpolación con los puntos más cercanos
    for (let i = 0; i < sign.length - 1; i++) {
      const p1 = sign[i];
      const p2 = sign[i + 1];
      // Verificar si el segundo está entre los dos puntos
      if (segundo >= p1.x && segundo <= p2.x) {
        const slope = (p2.y - p1.y) / (p2.x - p1.x);
        const interpolado = p1.y + slope * (segundo - p1.x);
        voltajes.push(interpolado); // Agregar voltaje interpolado
      }
    }

    // Retornar todos los voltajes encontrados o un valor por defecto si no hay ninguno
    return voltajes.length > 0 ? voltajes : [sign[0]?.y];
  };

  // Variables para almacenar la pendiente anterior
  let prevSlope1 = null;
  let prevSlope2 = null;

  // Iterar sobre todos los segundos desde el tiempo mínimo hasta el tiempo máximo
  for (let segundo = tiempoMin; segundo <= tiempoMax; segundo += 1) {
    const voltajesSign1 = calcularVoltajeEnSegundo(sign1, segundo);
    const voltajesSign2 = calcularVoltajeEnSegundo(sign2, segundo);

    // Crear un conjunto para almacenar los pares únicos
    const paresUnicos = new Set();

    // Agregar todos los voltajes encontrados para este segundo
    voltajesSign1.forEach((v1, index1) => {
      voltajesSign2.forEach((v2, index2) => {
        // Verificar que v1 y v2 sean números válidos antes de agregar
        if (typeof v1 === 'number' && !isNaN(v1) && typeof v2 === 'number' && !isNaN(v2)) {
          // Calcular la pendiente actual
          const currentSlope1 = index1 > 0 ? v1 - voltajesSign1[index1 - 1] : null;
          const currentSlope2 = index2 > 0 ? v2 - voltajesSign2[index2 - 1] : null;

          // Comprobar si hay un cambio de signo en la pendiente
          if (prevSlope1 !== null && prevSlope2 !== null) {
            if ((prevSlope1 > 0 && currentSlope1 < 0) || (prevSlope1 < 0 && currentSlope1 > 0) ||
                (prevSlope2 > 0 && currentSlope2 < 0) || (prevSlope2 < 0 && currentSlope2 > 0)) {
              // Se detecta un cambio de signo en la pendiente, se omite este punto
              return; // Omitir este punto
            }
          }

          // Crear un par único para verificar duplicados
          const par = `${v1},${v2}`;
          if (!paresUnicos.has(par)) {
            resultados.push({ x: v1, y: v2 }); // Cambiar a formato { x: voltaje señal 1, y: voltaje señal 2 }
            paresUnicos.add(par); // Agregar el par a los pares únicos
          }

          // Actualizar la pendiente anterior
          prevSlope1 = currentSlope1;
          prevSlope2 = currentSlope2;
        }
      });
    });
  }

  return resultados;
}




/**
 * Repite una sign corta hasta un tiempo máximo especificado.
 *
 * @param {Array<{x: number, y: number}>} signCorta - La sign que se desea repetir, un arreglo de objetos
 * con propiedades x e y.
 * @param {number} tiempoMax - El tiempo hasta el cual se debe repetir la sign.
 * @returns {Array<{x: number, y: number}>} Un nuevo arreglo que representa la sign repetida.
 */
const repetirSign = (signCorta, tiempoMax) => {
  const nuevaSign = [];
  let tiempoActual = 0;
  const longitud = signCorta.length;

  while (tiempoActual < tiempoMax) {
    for (let i = 0; i < longitud; i++) {
      const punto = signCorta[i];
      const nuevoPunto = { x: tiempoActual + punto.x, y: punto.y };
      if (nuevoPunto.x <= tiempoMax) {
        nuevaSign.push(nuevoPunto);
      }
    }
    tiempoActual += signCorta[longitud - 1].x; // Avanzar al siguiente ciclo
  }

  return nuevaSign;
};

export { calcularVoltajes, repetirSign };
