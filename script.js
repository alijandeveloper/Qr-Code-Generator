document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const generateBtn = document.getElementById("generateBtn");
    const qrContainer = document.getElementById("qrContainer");
    const downloadBtn = document.getElementById("downloadBtn");
    const toggleMode = document.getElementById("toggleMode");
    const scanBtn = document.getElementById("scanBtn");
    const container = document.querySelector(".container");

    // Load dark mode preference from local storage
    if (localStorage.getItem("dark-mode") === "enabled") {
        enableDarkMode();
    }

    generateBtn.addEventListener("click", () => {
        if (textInput.value.trim() === "") {
            alert("Please enter text or a URL!");
            return;
        }

        // Clear previous QR code before generating a new one
        qrContainer.innerHTML = "";

        // Generate new QR Code
        new QRCode(qrContainer, {
            text: textInput.value.trim(),
            width: 200,
            height: 200,
            correctLevel: QRCode.CorrectLevel.H, // High error correction
        });

        setTimeout(() => {
            if (qrContainer.querySelector("img")) {
                downloadBtn.style.display = "block"; // Show download button
            }
        }, 500);
    });

    downloadBtn.addEventListener("click", () => {
        const qrImg = qrContainer.querySelector("img");
        if (qrImg) {
            const a = document.createElement("a");
            a.href = qrImg.src;
            a.download = "qr-code.png";
            a.click();
        }
    });

    toggleMode.addEventListener("click", () => {
        if (document.body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add("dark-mode");
        container.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    }

    function disableDarkMode() {
        document.body.classList.remove("dark-mode");
        container.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    }

    scanBtn.addEventListener("click", () => {
        alert("QR Code scanning feature coming soon! (Under development)");
    });
});
