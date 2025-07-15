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
    codeStream.style.top = `${Math.random() * -100}px`; // Posición vertical aleatoria
    codeStream.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
    background.appendChild(codeStream);

    setTimeout(() => {
      codeStream.remove();
    }, 10000); 
  }

  setInterval(generateCodeLine, 100); 
});

function traducirEsquizo() {
  const input = document.getElementById("esquizoInput").value.trim();

  const conjuroOriginal = `Vuhl azh merrek d’nai Santiaggo,
linnor vesht — vesht — thulom kai’tar.
Miun d’rezzha Mizunai, oklat ya bren Empanirr.
Karzakh do’su, tresi faal menariokh.
Nahl... nahl... Dosimedia no thirra,
la khezer nurmol rampak-vek.
Zharro knell veïka: Vïktor, cáscara sin voz.
Runthal breth ka’ 2026:
tres luces se pudren, una ríe.
Santiaggo ya no duerme, solo imita.`;

  const resultado = document.getElementById("resultadoEsquizo");

  if (input === conjuroOriginal) {
    resultado.textContent = "´12126";
  } else if (input.length === 0) {
    resultado.textContent = "Por favor, introduce algo.";
  } else {
    resultado.textContent = "Traducción no disponible.";
  }
}
