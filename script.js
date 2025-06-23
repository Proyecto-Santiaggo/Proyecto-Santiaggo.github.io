const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Cargar imágenes
const playerImg = new Image();
playerImg.src = 'f95ea8a9-9384-48d5-bbcf-85d95fcf6f64.png';

const enemyImg = new Image();
enemyImg.src = 'https://upload.wikimedia.org/wikipedia/commons/4/47/Alien_Emoji_U%2B1F47D.svg';

const width = canvas.width;
const height = canvas.height;

let player = {
  x: 100,
  y: 500,
  width: 50,
  height: 80,
  speed: 5,
  color: 'white',
  isTransformed: false
};

let keys = {};
let enemies = [];
let killCount = 0;

document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

function spawnEnemy() {
  enemies.push({
    x: Math.random() * (width - 50),
    y: 500,
    width: 50,
    height: 80,
    hp: 1
  });
}

function drawPlayer() {
  if (player.isTransformed) {
    ctx.filter = 'grayscale(100%) brightness(50%)';
  }
  ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
  ctx.filter = 'none';
}

function drawEnemies() {
  for (let enemy of enemies) {
    ctx.drawImage(enemyImg, enemy.x, enemy.y, enemy.width, enemy.height);
  }
}

function update() {
  if (keys['ArrowLeft']) player.x -= player.speed;
  if (keys['ArrowRight']) player.x += player.speed;
  if (keys[' ']) attack();

  // Limitar a bordes
  player.x = Math.max(0, Math.min(width - player.width, player.x));

  enemies.forEach((enemy, i) => {
    if (Math.abs(player.x - enemy.x) < 50 && !player.isTransformed && keys[' ']) {
      enemies.splice(i, 1);
      killCount++;
    }
  });

  // Transformación al matar 10 enemigos
  if (killCount >= 10 && !player.isTransformed) {
    player.isTransformed = true;
    showFinale();
  }
}

function showFinale() {
  setTimeout(() => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = 'red';
    ctx.font = '30px monospace';
    ctx.fillText('EL HEROE SE HA CORROMPIDO...', 200, 300);
  }, 500);
}

function attack() {
  // ataque con espada (placeholder: en realidad se puede dibujar una línea o sprite)
}

function loop() {
  ctx.clearRect(0, 0, width, height);
  update();
  drawPlayer();
  drawEnemies();
  requestAnimationFrame(loop);
}

setInterval(spawnEnemy, 2000);
loop();
