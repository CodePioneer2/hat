const memes = [
    "\"$HAT - We got you covered!\"",
    "\"Buy $HAT - Because everyone deserves a good laugh!\"",
    "\"$HAT: The coin for cool heads only.\"",
    "\"Got $HAT? Join the movement!\""
];

function changeMeme() {
    const memeText = document.getElementById("memeText");
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    memeText.innerText = randomMeme;
}
