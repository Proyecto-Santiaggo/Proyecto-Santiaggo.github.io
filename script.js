function traducirBidireccional(texto) {
  const lower = texto.toLowerCase().trim();

  /* ===== PROTOCOLO DERVA ===== */
  if (lower === "protocolo derva_1") {
    const resultado = document.getElementById("ytbResultado");
    resultado.textContent = "Activando Protocolo...";
    resultado.className = "ytb-farzzr";
    setTimeout(() => {
      window.location.href = "dsn4t.html";
    }, 2000);
    return;
  }

  /* ===== FRASES BLOQUEADAS ===== */
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

  /* ===== ENTRADAS FARZZR ===== */
  if (/^farzzr/i.test(lower)) {
    const resultado = document.getElementById("ytbResultado");
    resultado.innerHTML = `
      <a href="https://youtu.be/WLzlhPWI2Lo" 
         target="_blank" 
         style="color:red;">
         https://youtu.be/WLzlhPWI2Lo
      </a>
    `;
    resultado.className = "ytb-bloqueado";
    return;
  }

  /* ===== MMMMMMM ===== */
  const normalizado = lower
    .replace(/’/g, "'")
    .replace(/[^a-z0-9']/gi, "")
    .trim();

  if (normalizado === "zhanth'kar") {
    const resultado = document.getElementById("ytbResultado");
    resultado.innerHTML = `
      <span class="ytb-farzzr ytb-humo">
        Aquel oscuro busca la d3t3nci0́n del pr0c3s0,<br>
        0bs3rv4NDO d3sd3 l0s 0j0s d3l tr41D0r.<br><br>
        <strong>INV'STIGΛ</strong>
      </span>
    `;
    resultado.className = "ytb-farzzr";
    return;
  }
if (lower === "horgb") {
  const resultado = document.getElementById("ytbResultado");
  resultado.innerHTML = `
    <span class="ytb-farzzr">
      Empa Tal Vez?
    </span>
  `;
  resultado.className = "ytb-farzzr";
  return;
}

  if (lower === "unreleased") {
  const resultado = document.getElementById("ytbResultado");
  resultado.innerHTML = `
    <div class="ytb-farzzr">
      <video
        src="media/unreleased.mp4"
        autoplay
        controls
        loop
        muted
        style="
          width: 100%;
          filter: contrast(120%) brightness(90%);
          border-radius: 8px;
          box-shadow: 0 0 40px rgba(120, 0, 0, 0.6);
        ">
      </video>
    </div>
  `;
  resultado.className = "ytb-farzzr";
  return;
}


  /* ===== CONJURO ===== */
  const conjuroOriginal = `vuhl azh merrek d'nai sant, linnor vesht --vesht--thulom kai'tar. miun d'rezza mizzu, oklat ya bren empranirra. karzakh do'su, resi faal menariokh. nahl... nahl.. disomeida2 no thirra, la khezer nurmol rampak-vek. zharro knell velka: viikktor.`;

  const textoSinPunt = lower
    .replace(/[^a-z0-9\s’'-]/gi, "")
    .replace(/\s+/g, "");

  const conjuroSinPunt = conjuroOriginal
    .toLowerCase()
    .replace(/[^a-z0-9\s’'-]/gi, "")
    .replace(/\s+/g, "");

  if (textoSinPunt === conjuroSinPunt) {
    const resultado = document.getElementById("ytbResultado");
    resultado.innerHTML = `
      Ese es quién se manifiesta por su reflejo dsnat Santt,<br>
      quizás --quizás-- en breve saldra. Ninguna regresa,
      <span class="borroso">Mizu</span>, poco se sabe,
      <span class="borroso">Empanada</span>.<br><br>
      Carece de sí, resiste marioneta. Silencio... silencio...
      <span class="borroso">dosimedia2</span> no vendrá,
      la verdad volvió clonando-él.<br>
      Firmamento verr pronto <strong>viikktorr r....</strong>
    `;
    resultado.className = "ytb-trad-ok";
    return;
  }

  /* ===== DEFAULT ===== */
  const resultado = document.getElementById("ytbResultado");
  resultado.textContent = "Actualmente no puede revelarse esto.";
  resultado.className = "ytb-trad-ok";
}

/* ===== BOTÓN ===== */
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

/* ===== RAYOS ROJOS ===== */
function activarRayoRojo() {
  const rayo = document.getElementById("rayoRojo");
  if (!rayo) return;

  rayo.style.transition = "none";
  rayo.style.opacity = "0.9";

  setTimeout(() => {
    rayo.style.transition = "opacity 1.2s ease-out";
    rayo.style.opacity = "0";
  }, 100);

  if (Math.random() > 0.6) {
    setTimeout(() => {
      rayo.style.opacity = "0.7";
      setTimeout(() => {
        rayo.style.opacity = "0";
      }, 80);
    }, 250);
  }
}

function cicloRayos() {
  activarRayoRojo();
  setTimeout(cicloRayos, Math.random() * 6000 + 4000);
}

cicloRayos();
