// Fecha objetivo del contador (12 de febrero de 2025 a las 00:00)
const fechaObjetivo = new Date("2025-02-12T00:00:00-03:00").getTime();
const fechaInicio = new Date().getTime();


const glitchElement = document.getElementById("glitch");


function generarGlitch() {
  const caracteres = "EMPAABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let textoGlitch = "";

  for (let i = 0; i < 10; i++) {
    textoGlitch += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  glitchElement.textContent = textoGlitch;
}


const glitchInterval = setInterval(generarGlitch, 100);


function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  
  if (diferencia <= 0) {
    clearInterval(glitchInterval);
    glitchElement.textContent = "DSN4T";
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

  // Calcular y guardar progreso
  const tiempoTotal = fechaObjetivo - fechaInicio; // Duración total del contador
  const tiempoRestante = fechaObjetivo - ahora; // Tiempo restante
  const porcentaje = ((tiempoTotal - tiempoRestante) / tiempoTotal) * 100;

  
  localStorage.setItem("progreso", porcentaje);

  // Actualizar la barra de tupu
  document.getElementById("progresoBarra").style.width = `${porcentaje}%`;
}

// Recuperar progreso al cargar tupu
window.onload = () => {
  const progresoGuardado = localStorage.getItem("progreso");
  if (progresoGuardado) {
    document.getElementById("progresoBarra").style.width = `${progresoGuardado}%`;
  }
};

// Actualizar el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);
