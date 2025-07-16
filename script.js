/* =========  EFECTO GLITCH DE PALABRAS  ========= */
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

/* =========  TRADUCTOR YTB <-> ESPAÑOL  ========= */
const es2ytb = {
  "hola":"vuhl","estoy":"melthar","soy":"melthar","eres":"melzar","somos":"melser","es":"thal",
  "yo":"saar","tú":"zahr","él":"vahn","ella":"velna","nosotros":"seran","ustedes":"zerrun","ellos":"velnor",
  "una":"ka","un":"ka","gran":"zulken","pequeño":"thrin","página":"noreth","en":"noz",
  "correr":"vekral","comer":"drokar","leer":"zirral","vivir":"morhal","amar":"ruhnal","amo":"ruhnar",
  "tiempo":"zhul","vida":"mor","muerte":"drak","luz":"felyn","oscuridad":"varkun"
};
const ytb2es = Object.fromEntries(Object.entries(es2ytb).map(([es,ytb]) => [ytb, es]));

const sujetosES = ["yo","tú","él","ella","nosotros","ustedes","ellos"];
const verbosES  = ["estoy","soy","eres","somos","es","amar","amo","comer","leer","vivir","correr"];

const tokens = s =>
  s.toLowerCase()
   .replace(/[.,!?¡¿;:()\\[\\]\\n\\r]+/g," ")
   .trim()
   .split(/\s+/)
   .filter(Boolean);

/* ---- ESPAÑOL → YTB  (reordena a Verbo + Objeto + Sujeto) ---- */
function espToYtb(txt){
  const palabras = tokens(txt);
  let sujeto="", verbo="", objetos=[];
  for(const w of palabras){
    if(sujetosES.includes(w))       sujeto = es2ytb[w] ?? w;
    else if(verbosES.includes(w))   verbo  = es2ytb[w] ?? w;
    else                            objetos.push(es2ytb[w] ?? w);
  }
  return capitalize(`${verbo} ${objetos.join(" ")} ${sujeto}`.trim());
}

/* ---- YTB → ESPAÑOL  (reordena a Sujeto + Verbo + Objeto) ---- */
function ytbToEsp(txt){
  const palabras = tokens(txt);
  if(!palabras.length) return "";
  const verbo  = ytb2es[palabras[0]] ?? palabras[0];
  const sujeto = ytb2es[palabras.at(-1)] ?? palabras.at(-1);
  const objs   = palabras.slice(1,-1).map(w => ytb2es[w] ?? w);
  return capitalize(`${sujeto} ${verbo} ${objs.join(" ")}`.trim());
}

/* ---- Decide dirección automáticamente ---- */
function traducirBidireccional(txt){
  const palabras = tokens(txt);
  let scoreYTB=0, scoreES=0;
  for(const w of palabras){
    if(ytb2es[w]) scoreYTB++;
    if(es2ytb[w]) scoreES++;
  }
  return (scoreYTB > scoreES) ? ytbToEsp(txt) : espToYtb(txt);
}

/* ---- Helper ---- */
const capitalize = s => s ? s[0].toUpperCase() + s.slice(1) : s;

/* ---- Función GLOBAL para el botón ---- */
function traducirYTB(){
  const input = document.getElementById("ytbInput").value.trim();
  const out   = document.getElementById("ytbResultado");
  out.textContent = input ? traducirBidireccional(input)
                          : "Por favor, introduce un texto.";
}

/* Exponemos la función a window en caso de entornos estrictos */
window.traducirYTB = traducirYTB;
