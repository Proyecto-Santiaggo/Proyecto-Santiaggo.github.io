document.addEventListener("DOMContentLoaded", function () {
  const background = document.getElementById("code-background");
  const words = ["oblivion", "komi", "remind", "dosimedia", "1319", "verum"];
  
  function generateCodeLine() {
    const codeStream = document.createElement("div");
    codeStream.className = "code-stream";

    let codeText = "";
    for (let i = 0; i < 20; i++) { // Genera 20 elementos por línea
      if (Math.random() > 0.5) {
        codeText += `<span class="glitch-word">${words[Math.floor(Math.random() * words.length)]}</span> `;
      } else {
        codeText += Math.floor(Math.random() * 9999) + " ";
      }
    }

    codeStream.innerHTML = codeText;
    codeStream.style.top = `${Math.random() * -100}px`; // Posición vertical aleatoria
    codeStream.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
    background.appendChild(codeStream);

    setTimeout(() => {
      codeStream.remove();
    }, 10000); // Eliminar el flujo de código después de 10 segundos
  }

  setInterval(generateCodeLine, 500); // Genera líneas de código cada 500ms
});
