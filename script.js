document.addEventListener("DOMContentLoaded", function () {
    const background = document.getElementById("code-background");
    const words = ["oblivion", "komi", "remind", "dosimedia", "1319", "verum"];
    
    function generateCodeLine() {
        let codeStream = document.createElement("div");
        codeStream.className = "code-stream";
        
        let codeText = "";
        for (let i = 0; i < 20; i++) { // Genera 20 elementos por línea
            if (Math.random() > 0.5) {
                codeText += words[Math.floor(Math.random() * words.length)] + " ";
            } else {
                codeText += Math.floor(Math.random() * 9999) + " ";
            }
        }

        codeStream.textContent = codeText;
        codeStream.style.top = `${Math.random() * 100}vh`; // Posición vertical aleatoria
        codeStream.style.left = "0";
        background.appendChild(codeStream);

        setTimeout(() => {
            codeStream.remove();
        }, 10000);
    }

    setInterval(generateCodeLine, 500); // Genera líneas cada 500ms
});
