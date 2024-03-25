const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzExYzQxMTk4MTZiYTdmZGY4YzRkOGUzYzhiMGQ2ZiIsInN1YiI6IjY1ZWVjNGE2ZTcyZmU4MDE4NTVjMmRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ylGAQ_-tgnuA2qU4XKc2nKU3fEy2_Xz6LtlBqlWXCWI'
    }
};

let page = 1;
let activePopular = false;
let activeAiringToday = false;
let activeOnTheAir = false;
let activeTopRated = false;

const infoDiv = document.getElementById('content');
const contentTitle = document.getElementById('contentTitle');
const airingTodayButton = document.getElementById('airingToday');
const popularButton = document.getElementById('popular');
const onTheAirButton = document.getElementById('onTheAir');
const topRatedButton = document.getElementById('topRated');
const buttons = document.querySelectorAll('.buttons button');

function getAiringToday() {
    activePopular = false;
    activeAiringToday = true;
    activeOnTheAir = false;
    activeTopRated = false;
    infoDiv.innerHTML = "";
    contentTitle.innerHTML = "";
    buttons.forEach(button => {
        button.style.border = "none";
    });
    airingTodayButton.style.border = "2px red solid"
    contentTitle.innerHTML = "Airing Today";
    fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=' + page, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach(element => {
                const info = document.createElement('div');
                info.classList.add('movie-info');
                info.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.name}">
                        <p>Title: ${element.name}</p>
                    `;
                infoDiv.appendChild(info);
            });
        })
        .catch(err => console.error(err));
}

function getPopular() {
    activePopular = true;
    activeAiringToday = false;
    activeOnTheAir = false;
    activeTopRated = false;
    infoDiv.innerHTML = "";
    contentTitle.innerHTML = "";
    buttons.forEach(button => {
        button.style.border = "none";
    });
    popularButton.style.border = "2px red solid"
    contentTitle.innerHTML = "Popular TV Shows";
    fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=' + page, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach(element => {
                const info = document.createElement('div');
                info.classList.add('movie-info');
                info.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.name}">
                        <p>Title: ${element.name}</p>
                    `;
                infoDiv.appendChild(info);
            });
        })
        .catch(err => console.error(err));
}

function getOnTheAir() {
    activePopular = false;
    activeAiringToday = false;
    activeOnTheAir = true;
    activeTopRated = false;
    infoDiv.innerHTML = "";
    contentTitle.innerHTML = "";
    buttons.forEach(button => {
        button.style.border = "none";
    });
    onTheAirButton.style.border = "2px red solid"
    contentTitle.innerHTML = "On The Air";
    fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=' + page, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach(element => {
                const info = document.createElement('div');
                info.classList.add('movie-info');
                info.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.name}">
                        <p>Title: ${element.name}</p>
                    `;
                infoDiv.appendChild(info);
            });
        })
        .catch(err => console.error(err));
}

function getTopRated() {
    activePopular = false;
    activeAiringToday = false;
    activeOnTheAir = false;
    activeTopRated = true;
    infoDiv.innerHTML = "";
    contentTitle.innerHTML = "";
    buttons.forEach(button => {
        button.style.border = "none";
    });
    topRatedButton.style.border = "2px red solid"
    contentTitle.innerHTML = "Top Rated TV Shows";
    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=' + page, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach(element => {
                const info = document.createElement('div');
                info.classList.add('movie-info');
                info.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.name}">
                        <p>Title: ${element.name}</p>
                    `;
                infoDiv.appendChild(info);
            });
        })
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', getPopular);

airingTodayButton.addEventListener('click', function () {
    if (page > 1) {
        page = 1;
        actualPage.innerHTML = `Page: ${page}`;
    }
    getAiringToday();
});

onTheAirButton.addEventListener('click', function () {
    if (page > 1) {
        page = 1;
        actualPage.innerHTML = `Page: ${page}`;
    }
    getOnTheAir();
});

popularButton.addEventListener('click', function () {
    if (page > 1) {
        page = 1;
        actualPage.innerHTML = `Page: ${page}`;
    }
    getPopular();
});

topRatedButton.addEventListener('click', function () {
    if (page > 1) {
        page = 1;
        actualPage.innerHTML = `Page: ${page}`;
    }
    getTopRated();
});

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const actualPage = document.getElementById('actualPage');
actualPage.innerHTML = `Page: ${page}`;

plus.addEventListener('click', function () {
    ++page;
    if (activeAiringToday) {
        getAiringToday();
    } else if (activePopular) {
        getPopular();
    } else if (activeOnTheAir) {
        getOnTheAir();
    } else if (activeTopRated) {
        getTopRated();
    }
    actualPage.innerHTML = `Page: ${page}`;
});

minus.addEventListener('click', function () {
    if (page > 1) {
        --page;
        if (activeAiringToday) {
            getAiringToday();
        } else if (activePopular) {
            getPopular();
        } else if (activeOnTheAir) {
            getOnTheAir();
        } else if (activeTopRated) {
            getTopRated();
        }
        actualPage.innerHTML = `Page: ${page}`;
    } else {
        console.log('Cannot go further.');
    }
});

function getRandomColor() {
    // Generate random RGB values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Construct RGB color string
    let randomColor = "rgb(" + r + ", " + g + ", " + b + ")";

    return randomColor;
}

function hoverLink() {
    let link = document.getElementById("hoverLink");
    let linkDiv = document.getElementById("linkDiv");
    link.addEventListener("mouseover", function () {
        linkDiv.style.display = "block";
    });
    link.addEventListener("mouseout", function () {
        linkDiv.style.display = "none";
    });
}

let coloredDiv = document.getElementById("hoverLink");
coloredDiv.style.backgroundColor = getRandomColor();
hoverLink();