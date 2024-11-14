/**
 * Funcion para el input que Maneja los cambios en el campo de entrada y actualiza el estado de la sign.
 *
 * @param {Event} e - El evento que captura el cambio en el campo de entrada.
 * @param {Function} setSign - Función para actualizar el estado de la sign y almacenar los datos de la sign.
 */
const handleInputChange = (e, setSign) => {
  const { value } = e.target;
  const newData = value
    .split(",")
    .map((item) => {
      const [x, y] = item.split(":").map(Number);
      return { x, y };
    })
    .filter((point) => !isNaN(point.x) && !isNaN(point.y));
  setSign(newData);
};

/**
* Calcula el tiempo máximo de dos signs basándose en sus coordenadas X.
*
* @param {Array<{x: number, y: number}>} sign1 - La primera sign, un arreglo de objetos con propiedades x e y.
* @param {Array<{x: number, y: number}>} sign2 - La segunda sign, un arreglo de objetos con propiedades x e y.
* @returns {number} El tiempo máximo entre las dos signs.
*/
const calcularTiempoMax = (sign1, sign2) => {
  const maxSign1 = Math.max(...sign1.map((point) => point.x));
  const maxSign2 = Math.max(...sign2.map((point) => point.x));
  return Math.max(maxSign1, maxSign2);
};

export { handleInputChange, calcularTiempoMax };
