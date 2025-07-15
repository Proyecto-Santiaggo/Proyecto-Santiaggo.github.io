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

}
