document.addEventListener("DOMContentLoaded", function () {
  const background = document.getElementById("code-background");
  const words = [
    "oblivion", "komi", "remind", "dosimedia", "1319", "verum",
    "licenciado posting", "puro clown 1", "puro clown 2", "puro clown 3",
    "pinkeye", "tontos y asociados", "el server más zzz", "mencho rol",
    "illuminatyland", "sigmaworld"
  ];

  function generateCodeLine() {
    const codeStream = document.createElement("div");
    codeStream.className = "code-stream";

    let codeText = "";
    for (let i = 0; i < 20; i++) {
      codeText += `<span class="glitch-word">${words[Math.floor(Math.random() * words.length)]}</span> `;
    }

    codeStream.innerHTML = codeText;
    codeStream.style.top = `${Math.random() * -100}px`;
    codeStream.style.left = `${Math.random() * 100}%`;
    background.appendChild(codeStream);

    setTimeout(() => {
      codeStream.remove();
    }, 10000);
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
const verbosES  = ["estoy", "soy", "eres", "somos", "es", "amar", "amo", "comer", "leer", "vivir", "correr"];

function tokens(str){
  return str.toLowerCase()
            .replace(/[.,!?¡¿;:()\\[\\]\\n\\r]+/g," ")
            .split(/\\s+/)
            .filter(Boolean);
}

function espToYtb(texto){
  const palabras = tokens(texto);
  let sujeto=\"\", verbo=\"\", objetos=[];
  palabras.forEach(w=>{
    if(sujetosES.includes(w))        sujeto = es2ytb[w] || w;
    else if(verbosES.includes(w))    verbo  = es2ytb[w] || w;
    else                             objetos.push(es2ytb[w] || w);
  });
  return capitalize(`${verbo} ${objetos.join(\" \")} ${sujeto}`.trim());
}

/* --- YTB ⇒ Español  (reordena: S + V + O) --- */
function ytbToEsp(texto){
  const palabras = tokens(texto);
  if(!palabras.length) return \"\";
  const verboEs  = ytb2es[palabras[0]] || palabras[0];
  const sujetoEs = ytb2es[palabras[palabras.length-1]] || palabras[palabras.length-1];
  const objetosEs = palabras.slice(1,-1).map(w=> ytb2es[w] || w);
  return capitalize(`${sujetoEs} ${verboEs} ${objetosEs.join(\" \")}`.trim());
}

function traducirBidireccional(texto){
  const palabras = tokens(texto);
  let scoreYTB=0, scoreES=0;
  palabras.forEach(w=>{
    if(ytb2es[w]) scoreYTB++;
    if(es2ytb[w]) scoreES++;
  });
  return (scoreYTB>scoreES) ? ytbToEsp(texto) : espToYtb(texto);
}

function capitalize(str){ return str.charAt(0).toUpperCase()+str.slice(1); }

function traducirYTB(){
  const input  = document.getElementById(\"ytbInput\").value.trim();
  const result = document.getElementById(\"ytbResultado\");
  if(!input){ result.textContent = \"Por favor, introduce un texto.\"; return; }
  result.textContent = traducirBidireccional(input);
}
