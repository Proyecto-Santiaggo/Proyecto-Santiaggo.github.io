const playerImg = new Image();
playerImg.src = 'https://i.imgur.com/jbt3I0s.png'; // Samurai estilo pixel

const enemyImg = new Image();
enemyImg.src = 'https://i.imgur.com/40n6x0V.png'; // Alien verde

// Si querés fondo coliseo:
document.getElementById("gameCanvas").style.backgroundImage =
  "url('https://i.imgur.com/CgXsEvM.jpg')";
document.getElementById("gameCanvas").style.backgroundSize = "cover";
