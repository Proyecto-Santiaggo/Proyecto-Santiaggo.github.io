document.addEventListener("DOMContentLoaded", function () {
    const background = document.getElementById("code-background");
    const words = ["oblivion", "komi", "remind", "dosimedia", "1319", "verum"];
    
    function generateCode() {
        let codeStream = document.createElement("div");
        codeStream.className = "code-stream";
        let codeText = "";
        
        for (let i = 0; i < 50; i++) {
            if (Math.random() > 0.5) {
                codeText += words[Math.floor(Math.random() * words.length)] + " ";
            } else {
                codeText += Math.floor(Math.random() * 10) + " ";
            }
        }

        codeStream.textContent = codeText;
        codeStream.style.left = `${Math.random() * 100}vw`;
        background.appendChild(codeStream);

        setTimeout(() => {
            codeStream.remove();
        }, 5000);
    }

    setInterval(generateCode, 500);
});
