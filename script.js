document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const generateBtn = document.getElementById("generateBtn");
    const qrContainer = document.getElementById("qrContainer");
    const downloadBtn = document.getElementById("downloadBtn");
    const toggleMode = document.getElementById("toggleMode");

    generateBtn.addEventListener("click", () => {
        if (textInput.value.trim() === "") {
            alert("Please enter text or a URL!");
            return;
        }
        qrContainer.innerHTML = "";
        new QRCode(qrContainer, {
            text: textInput.value,
            width: 200,
            height: 200,
        });
        downloadBtn.style.display = "block";
    });

    downloadBtn.addEventListener("click", () => {
        const qrImg = qrContainer.querySelector("img").src;
        const a = document.createElement("a");
        a.href = qrImg;
        a.download = "qr-code.png";
        a.click();
    });

    toggleMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
