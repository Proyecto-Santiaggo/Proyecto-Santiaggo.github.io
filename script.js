function traducirBidireccional(texto) {
  const lower = texto.toLowerCase().trim();

  if (lower === "protocolo derva_1") {
    const resultado = document.getElementById("ytbResultado");
    resultado.textContent = "Activando Protocolo...";
    resultado.className = "ytb-farzzr";
    setTimeout(() => {
      window.location.href = "dsn4t.html";
    }, 2000);
    return;
  }

  const bloqueadas = [
    "tres luces se pudren",
    "una se rie",
    "tres luces se pudren, una se rie"
  ];
  if (bloqueadas.includes(lower)) {
    const resultado = document.getElementById("ytbResultado");
    resultado.textContent = "FARZZR NAM'SA DOL AB DERVA EHRRA OREOOR";
    resultado.className = "ytb-farzzr";
    return;
  }

  if (/^farzzr/i.test(lower)) {
    const resultado = document.getElementById("ytbResultado");
    resultado.innerHTML = `<a href='https://youtu.be/WLzlhPWI2Lo' target='_blank' style='color: red;'>https://youtu.be/WLzlhPWI2Lo</a>`;
    resultado.className = "ytb-bloqueado";
    return;
  }

  if (lower === "protocolo MTHa_1") {
    const resultado = document.getElementById("ytbResultado");
    resultado.textContent = "Redirigiendo...";
    resultado.className = "ytb-farzzr";
    setTimeout(() => {
      window.location.href = "dsn4t.html";
    }, 2000);
    return;
  }

  const normalizado = lower
  .replace(/’/g, "'")
  .replace(/[^a-z0-9']/gi, "")
  .trim();

if (normalizado === "zhanth'kar") {
  const resultado = document.getElementById("ytbResultado");
  resultado.innerHTML = `
    <span class="ytb-farzzr">
      Aquel oscuro busca la d3t3nci0́n del pr0c3s0,<br>
      0bs3rv4NDO d3sd3 l0s 0j0s d3l tr41D0r.<br><br>
      <strong>INV'STIGΛ</strong>
    </span>
  `;
  resultado.className = "ytb-farzzr";
  return;
}



  const conjuroOriginal = `vuhl azh merrek d'nai sant, linnor vesht --vesht--thulom kai'tar. miun d'rezza mizzu, oklat ya bren empranirra. karzakh do'su, resi faal menariokh. nahl... nahl.. disomeida2 no thirra, la khezer nurmol rampak-vek. zharro knell velka: viikktor.`;
  const textoSinPunt = lower.replace(/[^a-z0-9\\s’'-]/gi, '').replace(/\\s+/g, '');
  const conjuroSinPunt = conjuroOriginal.toLowerCase().replace(/[^a-z0-9\\s’'-]/gi, '').replace(/\\s+/g, '');

  if (textoSinPunt === conjuroSinPunt) {
    const resultado = document.getElementById("ytbResultado");
    resultado.innerHTML = `Ese es quién se manifiesta por su reflejo dsnat Santt,<br>quizás --quizás-- en breve saldra. Ninguna regresa, <span class='borroso'>Mizu</span>, poco se sabe, <span class='borroso'>Empanada</span>.<br><br>Carece de sí, resiste marioneta. Silencio... silencio... <span class='borroso'>dosimedia2</span> no vendrá, la verdad volvió clonando-él.<br>Firmamento verr pronto <strong>viikktorr r....</strong>`;
    resultado.className = "ytb-trad-ok";
    return;
  }

  const resultado = document.getElementById("ytbResultado");
  resultado.textContent = "Actualmente no puede revelarse esto.";
  resultado.className = "ytb-trad-ok";
}

function traducirYTB() {
  const inputEl = document.getElementById("ytbInput");
  const resultEl = document.getElementById("ytbResultado");
  const inputText = inputEl.value.trim();
  if (!inputText) {
    resultEl.textContent = "Por favor, introduce un texto.";
    resultEl.className = "ytb-trad-ok";
    return;
  }
  traducirBidireccional(inputText);
}

window.traducirYTB = traducirYTB;
