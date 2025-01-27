// Fecha objetivo del contador (12 de febrero de 2025 a las 00:00)
const fechaObjetivo = new Date("2025-02-12T00:00:00-03:00").getTime();

// Fecha inicial (cuando comienza la cuenta regresiva)
const fechaInicio = new Date().getTime();


const glitchElement = document.getElementById("glitch");


function generarGlitch() {
  const caracteres = "EMPAABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let textoGlitch = "";

  // Generar texto aleatorio
  for (let i = 0; i < 10; i++) {
    textoGlitch += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  // Actualizar el texto del elemento
  glitchElement.textContent = textoGlitch;
}


const glitchInterval = setInterval(generarGlitch, 100); // Cambia el texto cada 100ms

// Función que actualiza el contador
function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  // Si el tiempo ha terminado
  if (diferencia <= 0) {
    
    clearInterval(glitchInterval);

  
    glitchElement.textContent = "Oblivion +";

    // Detener el contador
    clearInterval(intervalo);
    return;
  }

  // Cálculos de días, horas, minutos y segundos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Actualizar valores en la página
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;

  // Actualizar la barra de progreso
  const tiempoTotal = fechaObjetivo - fechaInicio; // Duración total del contador
  const tiempoRestante = fechaObjetivo - ahora; // Tiempo restante
  const porcentaje = ((tiempoTotal - tiempoRestante) / tiempoTotal) * 100; // Porcentaje completado
  document.getElementById("progresoBarra").style.width = `${porcentaje}%`;
}

// Actualizar el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);
