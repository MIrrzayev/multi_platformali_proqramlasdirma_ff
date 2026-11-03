const items = document.querySelectorAll(".gallery-item");
const gallery = document.getElementById("gallery");
const slide = document.getElementById("slide");
const footer = document.getElementById("footer");
const startBtn = document.querySelector(".start");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const info = [
    { year: 1889, text: "Painted from the window of his room at the asylum in Saint-Rémy, facing east before sunrise." },
    { year: 1665, text: "A study of a face rather than a portrait, famous for its pearl earring and blue turban." },
    { year: 1937, text: "Picasso's huge black and white response to the bombing of the town of Guernica." },
    { year: 1625, text: "Gentileschi shows Mary Magdalene in a quiet, sorrowful moment of repentance." },
    { year: 1633, text: "Rembrandt's only seascape, showing Jesus calming a storm while the disciples panic." },
    { year: 1831, text: "A woodblock print of a giant wave about to hit boats, with Mount Fuji in the background." },
    { year: 1889, text: "One of many self-portraits Van Gogh painted, with swirling brushstrokes behind him." },
    { year: 1897, text: "A lion stands over a sleeping traveler in the desert under a bright moon." },
    { year: 1490, text: "A young woman holding an ermine, painted with very fine detail." },
    { year: 1888, text: "Van Gogh wanted this painting to show a place where people can ruin themselves." },
    { year: 1503, text: "Probably the most famous painting in the world, known for its soft shading and calm smile." },
    { year: 1895, text: "Cézanne tilts the table and the objects to show them from more than one side." },
    { year: 1889, text: "A boy in a red vest rests his head on his hand in a thoughtful pose." },
    { year: 1434, text: "A detailed double portrait with a small mirror on the wall that shows the whole room." },
    { year: 1767, text: "A playful painting of a young woman on a swing among green trees." }
];

let current = 0;

function showSlide() {
    const figure = items[current];

    const imgSrc = figure.querySelector("img").src;
    const title = figure.querySelector("h2").textContent;
    const artist = figure.querySelector("p").textContent;

    document.getElementById("slide-img").src = imgSrc;
    document.getElementById("view-image").href = imgSrc;
    document.getElementById("slide-title").textContent = title;
    document.getElementById("slide-artist").textContent = artist;
    document.getElementById("slide-year").textContent = info[current].year;
    document.getElementById("slide-text").textContent = info[current].text;
    
    document.getElementById("source").href = "https://en.wikipedia.org/wiki/Special:Search?search=" + title;

    document.getElementById("footer-title").textContent = title;
    document.getElementById("footer-artist").textContent = artist;
    
    document.getElementById("progress").style.width = ((current + 1) / items.length) * 100 + "%";

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === items.length - 1;
}

function startSlideshow(index) {
    current = index;
    gallery.classList.add("hidden");
    slide.classList.remove("hidden");
    footer.classList.remove("hidden");
    startBtn.textContent = "STOP SLIDESHOW";
    showSlide();
}

function stopSlideshow() {
    gallery.classList.remove("hidden");
    slide.classList.add("hidden");
    footer.classList.add("hidden");
    startBtn.textContent = "START SLIDESHOW";
}

startBtn.addEventListener("click", function () {
    if (slide.classList.contains("hidden")) {
        startSlideshow(0);
    } else {
        stopSlideshow();
    }
});

items.forEach(function (item, i) {
    item.addEventListener("click", function () {
        startSlideshow(i);
    });
});

prevBtn.addEventListener("click", function () {
    current--;
    showSlide();
});

nextBtn.addEventListener("click", function () {
    current++;
    showSlide();
});