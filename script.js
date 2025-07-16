/* fr */
document.addEventListener("DOMContentLoaded", () => {
  const background = document.getElementById("code-background");
  const words = [
    "oblivion", "komi", "remind", "dosimedia", "1319", "verum",
    "licenciado posting", "puro clown 1", "puro clown 2", "puro clown 3",
    "pinkeye", "tontos y asociados", "el server más zzz", "mencho rol",
    "illuminatyland", "sigmaworld"
  ];

  function generateCodeLine() {
    const div = document.createElement("div");
    div.className = "code-stream";

    let html = "";
    for (let i = 0; i < 20; i++) {
      html += `<span class="glitch-word">${words[Math.floor(Math.random() * words.length)]}</span> `;
    }

    div.innerHTML = html;
    div.style.top  = `${Math.random() * -100}px`;
    div.style.left = `${Math.random() * 100}%`;
    background.appendChild(div);

    setTimeout(() => div.remove(), 10_000);
  }

  setInterval(generateCodeLine, 100);
});

const es2ytb = {
  "hola": "vuhl",  "estoy": "melthar", "soy": "melthar", "eres": "melzar",
  "somos": "melser", "es": "thal",   "yo": "saar",  "tú": "zahr",
  "él": "vahn", "ella": "velna", "nosotros": "seran", "ustedes": "zerrun",
  "ellos": "velnor", "una": "ka", "un": "ka", "gran": "zulken",
  "pequeño": "thrin", "página": "noreth", "en": "noz", "correr": "vekral",
  "comer": "drokar", "leer": "zirral", "vivir": "morhal", "amar": "ruhnal",
  "amo": "ruhnar", "tiempo": "zhul", "vida": "mor", "muerte": "drak",
  "luz": "felyn", "oscuridad": "varkun"
};
const ytb2es = Object.fromEntries(Object.entries(es2ytb).map(([k, v]) => [v, k]));
const sujetosES = ["yo", "tú", "él", "ella", "nosotros", "ustedes", "ellos"];
const verbosES = ["estoy", "soy", "eres", "somos", "es", "amar", "amo", "comer", "leer", "vivir", "correr"];

function tokens(str) {
  return str.toLowerCase().replace(/[.,!?¡¿;:()\[\]\n\r]+/g, " ").split(/\s+/).filter(Boolean);
}

function espToYtb(texto) {
  const palabras = tokens(texto);
  let sujeto = "", verbo = "", objetos = [];
  palabras.forEach(word => {
    if (sujetosES.includes(word)) sujeto = es2ytb[word] || word;
    else if (verbosES.includes(word)) verbo = es2ytb[word] || word;
    else objetos.push(es2ytb[word] || word);
  });
  return capitalize(`${verbo} ${objetos.join(" ")} ${sujeto}`.trim());
}

function ytbToEsp(texto) {
  const palabras = tokens(texto);
  if (palabras.length === 0) return "";
  const verboEs = ytb2es[palabras[0]] || palabras[0];
  const sujetoEs = ytb2es[palabras[palabras.length - 1]] || palabras[palabras.length - 1];
  const objetosEs = palabras.slice(1, -1).map(w => ytb2es[w] || w);
  return capitalize(`${sujetoEs} ${verboEs} ${objetosEs.join(" ")}`.trim());
}

function traducirBidireccional(texto) {
  const lower = texto.toLowerCase().trim();

  // X //
  const bloqueadas = [
    "tres luces se apagan",
    "una se rie",
    "tres luces se apagan, una se rie"
  ];
  if (bloqueadas.includes(lower)) {
    const resultado = document.getElementById("ytbResultado");
    resultado.textContent = "FARZZR NAM'SA DOL AB DERVA EHRRA OREOOR";
    resultado.className = "ytb-farzzr";
    return;
  }

  // CC //
  const conjuroYTB = `vuhl azh merrek d’nai sant, linnor vesht vesht thulom kai’tar. miun d’rezza mizzu, oklat ya bren empranirra. karzakh do’su, resi faal menariokh. nahl nahl disomeida2 no thirra, la khezer nurmol rampak-vek. zharro knell veïka: viikktorr`;
  if (lower.replace(/[^a-z0-9’\-\s]/gi, '') === conjuroYTB.replace(/[^a-z0-9’\-\s]/gi, '')) {
    const resultado = document.getElementById("ytbResultado");
    resultado.innerHTML = `Ese es quién se manifiesta por su reflejo: Santt.<br>Quizás —quizás— en breve saldrá.<br>Ninguna regresa, <span class='borroso'>Mizu</span>… poco se sabe… <span class='borroso'>Empanada</span>.<br><br>Carece de sí. Resiste, marioneta.<br>Silencio… silencio…<br><span class='borroso'>Dosimedia2</span> no vendrá.<br>La verdad volvió clonando-él.<br><br>El firmamento verá pronto a…<br><strong>Viikktorr r...</strong>`;
    resultado.className = "ytb-trad-ok";
    return;
  }

  // JJ
  if (/^farzzr/i.test(lower)) {
    const resultado = document.getElementById("ytbResultado");
    resultado.innerHTML = "⬛";
    resultado.className = "ytb-bloqueado";
    return;
  }

  // DD
  const palabras = tokens(texto);
  let scoreYTB = 0, scoreES = 0;
  palabras.forEach(w => {
    if (ytb2es[w]) scoreYTB++;
    if (es2ytb[w]) scoreES++;
  });
  const output = (scoreYTB > scoreES) ? ytbToEsp(texto) : espToYtb(texto);
  const resultado = document.getElementById("ytbResultado");
  resultado.textContent = output;
  resultado.className = "ytb-trad-ok";
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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

