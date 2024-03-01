let currentIndex = 0;
let bgMusicPlaying = false;

// Function to play background music
function playBackgroundMusic() {
    const backgroundMusic = document.getElementById('background-music');
    if (!bgMusicPlaying) {
        backgroundMusic.play();
        backgroundMusic.loop = true; // Loop the background music
        bgMusicPlaying = true;
    }
}

function playSoundEffect(soundId) {
    const soundEffect = document.getElementById(soundId);
    soundEffect.play();
}

function getMessages() {
    return [
        "Yeaaayy!! So Naina Didi finally it's your Birthday🎂 aur mere pass kuch hai aapke liye chlo dekhte hai kya hai woh😁",
        "Lekin sabse pehle ek rule hai okay... Jo aapko follow krna hai and no cheating thik hai?? 😏👀",
        "Toh rule ye hai ki jo message aapke samne hoga aapko pehle woh padhna tabhi aage jana hai 😁",
        "Aur agar uss message mai koi task hua to pehle woh complete krna hai tabhi next message pe jaogi okay😊",
        "Chlo fir ab aapka task hai ki aapko apna gift dhoodna hai ki kaha hai woh..👀"
    ];
}

function showOrderedMessage() {
    const messages = getMessages();
    const messageFrame = document.getElementById("message-frame");

    // Display the current message
    messageFrame.innerText = messages[currentIndex];

    // Hide or show the prev and next buttons based on currentIndex
    togglePrevNextButtonsVisibility();
}

function showPrevMessage() {
    const messages = getMessages();
    const messageFrame = document.getElementById("message-frame");

    // Move to the previous message
    currentIndex = (currentIndex - 1 + messages.length) % messages.length;

    // Display the previous message
    messageFrame.innerText = messages[currentIndex];

    // Play sound effect
    playSoundEffect("prev-audio");

    // Hide or show the prev and next buttons based on currentIndex
    togglePrevNextButtonsVisibility();
}

function showNextMessage() {
    const messages = getMessages();
    const messageFrame = document.getElementById("message-frame");

    // Move to the next message
    currentIndex = (currentIndex + 1) % messages.length;

    // Display the next message
    if (currentIndex === messages.length - 1) {
        // Show a different image for the last message
        document.querySelector('.gif').src = 'https://media.giphy.com/media/8MzUOyu70W38yvFbLQ/giphy.gif';
    } else {
        // Show the default image for other messages
        document.querySelector('.gif').src = 'https://media.giphy.com/media/opvdnsIBv1AciolLjk/giphy.gif';
    }
    messageFrame.innerText = messages[currentIndex];

    // Check if it's the last message and scroll to the bottom
    if (currentIndex === messages.length - 1) {
        window.scrollTo(0,document.body.scrollHeight);
    }

    // Play sound effect
    playSoundEffect("next-audio");

    // Hide or show the prev and next buttons based on currentIndex
    togglePrevNextButtonsVisibility();

    // Play background music after the first press of the button
    playBackgroundMusic();
}

function togglePrevNextButtonsVisibility() {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    // Hide the prev button if it's the first message, otherwise show it
    prevButton.style.display = (currentIndex === 0) ? "none" : "inline-block";

    // Hide the next button if it's the last message, otherwise show it
    nextButton.style.display = (currentIndex === getMessages().length - 1) ? "none" : "inline-block";
}

// Call showOrderedMessage() to display the first message when the page loads
showOrderedMessage();