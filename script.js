const copyButton = document.getElementById("copyButton");
const discordId = document.getElementById("discordId");
const message = document.getElementById("message");

const helloButton = document.getElementById("helloButton");
const themeButton = document.getElementById("themeButton");

const clock = document.getElementById("clock");


/* Copy Discord ID */

copyButton.addEventListener("click", async function () {

    try {

        await navigator.clipboard.writeText(
            discordId.textContent
        );

        message.textContent = "Discord ID copied!";

    } catch (error) {

        message.textContent = "Unable to copy.";

    }

});


/* Hello Button */

helloButton.addEventListener("click", function () {

    message.textContent =
        "Hey! Thanks for visiting 👋";

});


/* Change Background Mode */

let darkMode = true;

themeButton.addEventListener("click", function () {

    darkMode = !darkMode;

    if (darkMode) {

        document.body.style.background =
            "#080b12";

        message.textContent =
            "Dark mode activated";

    } else {

        document.body.style.background =
            "#181c2a";

        message.textContent =
            "New mode activated";

    }

});


/* Live Clock */

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString();

    clock.textContent = time;

}

updateClock();

setInterval(updateClock, 1000);
