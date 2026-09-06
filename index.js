const giftButton = document.getElementById("giftButton");
const container = document.querySelector(".container");
const memorySection = document.getElementById("memorySection");

giftButton.addEventListener("click", function () {
    container.style.display = "none";
    memorySection.classList.remove("hidden");
});


const memories = [
    {
        image: "./assets/confessing love.jpeg",
        text: "The day you confessed your love march 6th, cant forget how happy i was🤧❤️"
    },
    {
        image: "./assets/first pic u.jpeg",
        text: "The first video of you,you sent to me....pretty lady. idk how many times i rewatched thiss😭🫣❤️"
    },
    {
        image: "./assets/first time we talked.jpeg",
        text: "First time you called me and we talked....i was so nervoussss❤️"
    },
    {
        image: "./assets/first us.jpeg",
        text: "one of the first pictures we took together, we looking like ying and yang fr 😅☯️❤️"
    },
    {
        image: "./assets/last pic.jpeg",
        text: "last vid we took before we got seperated😭😭😭❤️"
    },
    {
        image: "./assets/your hand.jpeg",
        text: "Your hands on my tool😒😒.....miss your hands thooo🫣🫣❤️"
    }
];


let currentMemory = 0;

const memoryImage = document.getElementById("memoryImage");
const memoryText = document.getElementById("memoryText");
const nextButton = document.getElementById("nextButton");

function showMemory() {
    memoryImage.src = memories[currentMemory].image;
    memoryText.textContent = memories[currentMemory].text;

    memoryImage.classList.remove("memory-animation");
    memoryText.classList.remove("memory-animation");

    void memoryImage.offsetWidth;
    void memoryText.offsetWidth;

    memoryImage.classList.add("memory-animation");
    memoryText.classList.add("memory-animation");
}

showMemory();


const letterSection = document.getElementById("letterSection");

nextButton.addEventListener("click", function () {

    if (currentMemory < memories.length - 1) {
        currentMemory++;
        showMemory();
    } else {
        letterSection.classList.remove("hidden");
        nextButton.classList.add("hidden");
    }

});


const letterButton = document.getElementById("letterButton");
const letterPage = document.getElementById("letterPage");

const transitionOverlay = document.getElementById("transitionOverlay");

letterButton.addEventListener("click", function () {

    transitionOverlay.classList.add("active");

    setTimeout(function () {

        letterSection.classList.add("hidden");
        letterPage.classList.remove("hidden");

        transitionOverlay.classList.remove("active");

    }, 400);

});
letterButton.addEventListener("click", function () {

    letterSection.classList.add("hidden");

    setTimeout(function () {
        letterPage.classList.remove("hidden");
    }, 300);

});