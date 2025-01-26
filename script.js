// Fecha objetivo del contador
const fechaObjetivo = new Date("2025-02-12T00:00:00-03:00").getTime();

// Guardar la fecha inicial en localStorage si no está presente
if (!localStorage.getItem("fechaInicio")) {
  localStorage.setItem("fechaInicio", new Date().getTime());
}
const fechaInicio = parseInt(localStorage.getItem("fechaInicio"), 10);

// Seleccionar elementos de la página
const glitchElement = document.getElementById("glitch");
const barraProgreso = document.getElementById("progresoBarra");

// Función para generar texto glitch
function generarGlitch() {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let textoGlitch = "";
  for (let i = 0; i < 10; i++) {
    textoGlitch += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  glitchElement.textContent = textoGlitch;
}
const glitchInterval = setInterval(generarGlitch, 100); // Actualiza el texto glitch cada 100ms

// Función para actualizar el contador
function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  // Si el tiempo ha terminado
  if (diferencia <= 0) {
    clearInterval(glitchInterval);
    clearInterval(intervalo);
    glitchElement.textContent = "¡Tiempo completado!";
    return;
  }

  // Calcular días, horas, minutos y segundos
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Mostrar los valores en la página
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;

  // Actualizar la barra de progreso
  const tiempoTotal = fechaObjetivo - fechaInicio;
  const tiempoRestante = fechaObjetivo - ahora;
  const porcentaje = ((tiempoTotal - tiempoRestante) / tiempoTotal) * 100;
  barraProgreso.style.width = `${porcentaje}%`;
}

// Actualizar el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);
