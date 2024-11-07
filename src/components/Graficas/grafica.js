/**
 * Funcion para el input que Maneja los cambios en el campo de entrada y actualiza el estado de la onda.
 *
 * @param {Event} e - El evento que captura el cambio en el campo de entrada.
 * @param {Function} setOnda - Función para actualizar el estado de la onda y almacenar los datos de la onda.
 */
const handleInputChange = (e, setOnda) => {
  const { value } = e.target;
  const newData = value
    .split(",")
    .map((item) => {
      const [x, y] = item.split(":").map(Number);
      return { x, y };
    })
    .filter((point) => !isNaN(point.x) && !isNaN(point.y));
  setOnda(newData);
};

/**
* Calcula el tiempo máximo de dos ondas basándose en sus coordenadas X.
*
* @param {Array<{x: number, y: number}>} onda1 - La primera onda, un arreglo de objetos con propiedades x e y.
* @param {Array<{x: number, y: number}>} onda2 - La segunda onda, un arreglo de objetos con propiedades x e y.
* @returns {number} El tiempo máximo entre las dos ondas.
*/
const calcularTiempoMaximo = (onda1, onda2) => {
  const maxOnda1 = Math.max(...onda1.map((point) => point.x));
  const maxOnda2 = Math.max(...onda2.map((point) => point.x));
  return Math.max(maxOnda1, maxOnda2);
};

export { handleInputChange, calcularTiempoMaximo };
