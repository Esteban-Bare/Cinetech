const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzExYzQxMTk4MTZiYTdmZGY4YzRkOGUzYzhiMGQ2ZiIsInN1YiI6IjY1ZWVjNGE2ZTcyZmU4MDE4NTVjMmRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ylGAQ_-tgnuA2qU4XKc2nKU3fEy2_Xz6LtlBqlWXCWI'
    }
};

let page = 1;
let activePopular = false;
let activeNow_playing = false;
let activeUpcoming = false;
let activeTop_rated = false;


const infoDiv = document.getElementById('content');
const contentTitle = document.getElementById('contentTitle');
const now_playingButton = document.getElementById('now_playing');
const popularButton = document.getElementById('popular');
const top_ratedButton = document.getElementById('top_rated');
const upcomingButton = document.getElementById('upcoming');
const buttons = document.querySelectorAll('.buttons button');

function now_playing() {
    activePopular = false;
    activeNow_playing = true;
    activeUpcoming = false;
    activeTop_rated = false;
    infoDiv.innerHTML = "";
    contentTitle.innerHTML = "";
    buttons.forEach(button => {
        button.style.border = "none";
    });
    now_playingButton.style.border = "2px red solid"
    contentTitle.innerHTML = "Now Playing";
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=' + page, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach(element => {
                const info = document.createElement('div');
                info.classList.add('movie-info');
                info.innerHTML = `
                        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}">
                        <p>Titre: ${element.title}</p>
                    `;
                infoDiv.appendChild(info);
            });
        })
        .catch(err => console.error(err));
}

function popular() {
    activePopular = true;
    activeNow_playing = false;
    activeUpcoming = false;
    activeTop_rated = false;
    infoDiv.innerHTML = "";
    contentTitle.innerHTML = "";
    buttons.forEach(button => {
        button.style.border = "none";
    });
    popularButton.style.border = "2px red solid"
    contentTitle.innerHTML = "Popular";
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=' + page, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            response.results.forEach(element => {
                const info = document.createElement('div');
                info.classList.add('movie-info');
                info.innerHTML = `
                    
                        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}">
                        <p>Titre: ${element.title}</p>
                    `;
                infoDiv.appendChild(info);
            });
        })
        .catch(err => console.error(err));
}

function top_rated() {
    activePopular = false;
    activeNow_playing = false;
    activeUpcoming = false;
    activeTop_rated = true;
    infoDiv.innerHTML = "";
    contentTitle.innerHTML = "";
    buttons.forEach(button => {
        button.style.border = "none";
    });
    top_ratedButton.style.border = "2px red solid"
    contentTitle.innerHTML = "Top Rated";
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=' + page, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach(element => {
                const info = document.createElement('div');
                info.classList.add('movie-info');
                info.innerHTML = `
                    
                        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}">
                        <p>Titre: ${element.title}</p>
                    `;
                infoDiv.appendChild(info);
            });
        })
        .catch(err => console.error(err));
}

function upcoming() {
    activePopular = false;
    activeNow_playing = false;
    activeUpcoming = true;
    activeTop_rated = false;
    infoDiv.innerHTML = "";
    contentTitle.innerHTML = "";
    buttons.forEach(button => {
        button.style.border = "none";
    });
    upcomingButton.style.border = "2px red solid"
    contentTitle.innerHTML = "Upcoming";
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=' + page, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach(element => {
                const info = document.createElement('div');
                info.classList.add('movie-info');
                info.innerHTML = `
                    
                        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}">
                        <p>Titre: ${element.title}</p>
                    `;
                infoDiv.appendChild(info);
            });
        })
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', popular);

upcomingButton.addEventListener('click', function () {
    if (page > 1) {
        page = 1;
        actualPage.innerHTML = `Page: ${page}`;
    }
    upcoming();
});
top_ratedButton.addEventListener('click', function () {
    if (page > 1) {
        page = 1;
        actualPage.innerHTML = `Page: ${page}`;
    }
    top_rated();
});
popularButton.addEventListener('click', function () {
    if (page > 1) {
        page = 1;
        actualPage.innerHTML = `Page: ${page}`;
    }
    popular();
});
now_playingButton.addEventListener('click', function () {
    if (page > 1) {
        page = 1;
        actualPage.innerHTML = `Page: ${page}`;
    }
    now_playing();
});

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const actualPage = document.getElementById('actualPage');
actualPage.innerHTML = `Page: ${page}`
plus.addEventListener('click', function () {
    ++page;
    if (activeNow_playing) {
        now_playing();
    } else if (activePopular) {
        popular();
    } else if (activeUpcoming) {
        upcoming();
    } else if (activeTop_rated) {
        top_rated();
    }
    actualPage.innerHTML = `Page: ${page}`;
});

minus.addEventListener('click', function () {
    if (page > 1) {
        --page;
        if (activeNow_playing) {
            now_playing();
        } else if (activePopular) {
            popular();
        } else if (activeUpcoming) {
            upcoming();
        } else if (activeTop_rated) {
            top_rated();
        }
        actualPage.innerHTML = `Page: ${page}`;
    } else {
        console.log('cannot go further');
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


