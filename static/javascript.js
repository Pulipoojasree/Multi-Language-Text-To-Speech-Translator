document.addEventListener("DOMContentLoaded", function () {
    const translateBtn = document.getElementById("translateBtn");
    const speakBtn = document.getElementById("speakBtn");
    const pauseBtn = document.getElementById("pauseBtn");

    let currentAudio = null;
    let isPaused = false;

    translateBtn.addEventListener("click", async () => {
        const text = document.getElementById("inputText").value;
        const language = document.getElementById("languages").value;

        const res = await fetch("/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, language })
        });

        const data = await res.json();
        document.getElementById("outputText").value = data.translated_text;
    });

    speakBtn.addEventListener("click", async () => {
        const text = document.getElementById("outputText").value;

        const res = await fetch("/speak", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });

        const data = await res.json();

        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }

        currentAudio = new Audio(data.audio_url);
        isPaused = false;
        currentAudio.play();
    });

    pauseBtn.addEventListener("click", () => {
        if (currentAudio) {
            if (isPaused) {
                currentAudio.play();
            } else {
                currentAudio.pause();
            }
            isPaused = !isPaused;
        }
    });
});
