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
let gameOver = false;

document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

function spawnEnemy() {
  if (gameOver) return;
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
  if (gameOver) return;

  if (keys['ArrowLeft']) player.x -= player.speed;
  if (keys['ArrowRight']) player.x += player.speed;
  if (keys[' ']) attack();

  player.x = Math.max(0, Math.min(width - player.width, player.x));

  enemies.forEach((enemy, i) => {
    if (Math.abs(player.x - enemy.x) < 50 && keys[' ']) {
      enemies.splice(i, 1);
      killCount++;
    }
  });

  if (killCount >= 10 && !player.isTransformed) {
    player.isTransformed = true;
    endGame();
  }
}

function attack() {
  // Ataque simulado
}

function endGame() {
  gameOver = true;
  setTimeout(() => {
    // Pantalla final
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    // Personaje malvado
    ctx.filter = 'grayscale(100%) brightness(50%)';
    ctx.drawImage(playerImg, width / 2 - 75, height / 2 - 100, 150, 200);
    ctx.filter = 'none';

    
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(width / 2 - 30, height / 2 - 20, 5, 0, 2 * Math.PI);
    ctx.arc(width / 2 + 30, height / 2 - 20, 5, 0, 2 * Math.PI);
    ctx.fill();

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 15, height / 2 + 30);
    ctx.lineTo(width / 2 - 10, height / 2 + 50);
    ctx.moveTo(width / 2 + 15, height / 2 + 30);
    ctx.lineTo(width / 2 + 10, height / 2 + 50);
    ctx.stroke();

    // Texto final
    ctx.fillStyle = "red";
    ctx.font = "30px monospace";
    ctx.fillText("2026...", 180, height - 50);
  }, 500);
}

function loop() {
  if (gameOver) return;
  ctx.clearRect(0, 0, width, height);
  update();
  drawPlayer();
  drawEnemies();
  requestAnimationFrame(loop);
}

setInterval(spawnEnemy, 2000);
loop();
