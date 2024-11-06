
/* const GraficaOndaCuadrada = () => {
  // Generar datos para la onda cuadrada
  // const tiempo = Array.from({ length: 10 }, (_, i) => i * 1); 
  const tiempo = [0,6,8]; 
  const voltaje = [-2,2,-2]

  const data = {
      labels: tiempo,
      datasets: [
          {
              label: 'Voltaje (V)',
              data: voltaje,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
          },
      ],
  };

  const options = {
      scales: {
          x: {
              title: {
                  display: true,
                  text: 'Tiempo (s)',
              },
          },
          y: {
              title: {
                  display: true,
                  text: 'Voltaje (V)',
              },
              beginAtZero: true,
              min: -2.5,
              max: 2.5,
          },
      },
  };

  return <Line data={data} options={options} />;
}; */
/* const GraficaOndaTriangular = () => {
  // Generar datos para la onda triangular
 // const tiempo = Array.from({ length: 10 }, (_, i) => i * 1); 
  //const voltaje = tiempo.map(t => (2 / Math.PI) * Math.asin(Math.sin(t)));
  const tiempo = [0,2,4,4]
  const voltaje = [2,1.5,-2,-1.5,2]
  const data = {
      labels: tiempo,
      datasets: [
          {
              label: 'Voltaje (V)',
              data: voltaje,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
          },
      ],
  };

  const options = {
      scales: {
          x: {
              title: {
                  display: true,
                  text: 'Tiempo (s)',
              },
          },
          y: {
              title: {
                  display: true,
                  text: 'Voltaje (V)',
              },
              beginAtZero: true,
              min: -2.5,
              max: 2.5,
          },
      },
  };

  return <Line data={data} options={options} />;
}; */

/* const GraficaOndaCuadrada = () => {
    // Valores proporcionados
    const tiempoOriginal = [0, 2, 2, 4, 4]; // Tiempo en segundos
    const voltajeOriginal = [2, 1.5, -2, -1.5, 2]; // Voltaje en volts

    // Crear arrays únicos para tiempo y voltaje
    const tiempo = [];
    const voltaje = [];

    // Llenar los arrays únicos
    for (let i = 0; i < tiempoOriginal.length; i++) {
        if (i === 0 || tiempoOriginal[i] !== tiempoOriginal[i - 1]) {
            tiempo.push(tiempoOriginal[i]);
            voltaje.push(voltajeOriginal[i]);
        } else {
            // Si el tiempo es el mismo, solo actualiza el voltaje
            voltaje[voltaje.length - 1] = voltajeOriginal[i];
        }
    }

    const data = {
        labels: tiempo,
        datasets: [
            {
                label: 'Voltaje (V)',
                data: voltaje,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0,
                stepped: 'before', // Para crear líneas verticales antes del cambio
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Tiempo (s)',
                },
                min: 0,
                max: 12,
            },
            y: {
                title: {
                    display: true,
                    text: 'Voltaje (V)',
                }
            },
        },
    };

    return <Line data={data} options={options} />;
};  */

/* const GraficaOndaCuadrada = () => {
    // Valores originales
    const tiempoOriginal = [0, 2, 2, 4, 4]; // Tiempo en segundos
    const voltajeOriginal = [2, 1.5, -2, -1.5, 2]; // Voltaje en volts

    // Crear arrays para las dos ondas cuadradas
    const tiempo = [];
    const voltaje = [];

    // Llenar los arrays para la primera onda
    for (let i = 0; i < tiempoOriginal.length; i++) {
        tiempo.push(tiempoOriginal[i]);
        voltaje.push(voltajeOriginal[i]);
    }

    // Llenar los arrays para la segunda onda (repitiendo los valores)
    for (let i = 0; i < tiempoOriginal.length; i++) {
        tiempo.push(tiempoOriginal[i] + 4); // Añadir 4 segundos para la segunda onda
        voltaje.push(voltajeOriginal[i]);
    }

    const data = {
        labels: tiempo,
        datasets: [
            {
                label: 'Voltaje (V)',
                data: voltaje,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Tiempo (s)',
                },
                min: 0,
                max: 12,
            },
            y: {
                title: {
                    display: true,
                    text: 'Voltaje (V)',
                },
                
            },
        },
    };

    return <Line data={data} options={options} />;
}; */

