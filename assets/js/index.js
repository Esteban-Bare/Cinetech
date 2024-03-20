const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzExYzQxMTk4MTZiYTdmZGY4YzRkOGUzYzhiMGQ2ZiIsInN1YiI6IjY1ZWVjNGE2ZTcyZmU4MDE4NTVjMmRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ylGAQ_-tgnuA2qU4XKc2nKU3fEy2_Xz6LtlBqlWXCWI'
    }
};

const titlesDiv = document.getElementById('titles');

fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        let num = 0;
        response.results.forEach(element => {
            num++;
            console.log(num);
            const title = element.title;
            const img = $('<img>').attr('src', 'https://image.tmdb.org/t/p/w500' + element.backdrop_path).addClass('image-item');
            const imageTitle = $('<a>').attr('href', 'info-film.php?id=' + element.id).addClass('text-overlay').text(`${num}. ${title}`);
            const slideNumber = $('<div>').addClass('slide-number').text(`${num}/20`);
            const container = $('<div>').addClass('image-container').append(slideNumber, img, imageTitle);
            $('#titles').append(container);
        });

        $('.image-container').hover(function () {
            $(this).find('.text-overlay').fadeIn();
        }, function () {
            $(this).find('.text-overlay').fadeOut();
        });

        showSlide(0);
    })
    .catch(err => console.error(err));






let containerIndex = 0;
// showSlide(containerIndex);

function plusSlide() {
    showSlide(containerIndex += 1);
    console.log(containerIndex);
}

function minusSlide() {
    showSlide(containerIndex -= 1);
    console.log(containerIndex);
}

function showSlide(n) {
    const slides = titlesDiv.children;

    if (n >= slides.length) {
        containerIndex = 0;
    } else if (n < 0) {
        containerIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[containerIndex].style.display = "block";
}
document.getElementById("next").addEventListener("click", plusSlide);
document.getElementById("prev").addEventListener("click", minusSlide);

const titlesDivTv = document.getElementById('titlesTv');

fetch('https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        let numTv = 0;
        response.results.forEach(element => {
            numTv++;
            console.log(num);
            const title = element.title;
            const img = $('<img>').attr('src', 'https://image.tmdb.org/t/p/w500' + element.backdrop_path).addClass('image-item');
            const imageTitle = $('<a>').attr('href', 'info-film.php?id=' + element.id).addClass('text-overlay').text(`${numTv}. ${title}`);
            const slideNumberTv = $('<div>').addClass('slide-number').text(`${numTv}/20`);
            const container = $('<div>').addClass('image-container').append(slideNumberTv, img, imageTitle);
            $('#titlesTv').append(container);
        });

        $('.image-container').hover(function () {
            $(this).find('.text-overlay').fadeIn();
        }, function () {
            $(this).find('.text-overlay').fadeOut();
        });

        showSlideTv(0);
    })
    .catch(err => console.error(err));

    let containerIndexTv = 0;
    // showSlide(containerIndex);
    
    function plusSlideTv() {
        showSlide(containerIndexTv += 1);
        console.log(containerIndexTv);
    }
    
    function minusSlideTv() {
        showSlide(containerIndexTv -= 1);
        console.log(containerIndexTv);
    }
    
    function showSlideTv(n) {
        const slidesTv = titlesDivTv.children;
    
        if (n >= slidesTv.length) {
            containerIndexTv = 0;
        } else if (n < 0) {
            containerIndexTv = slidesTv.lengthTv - 1;
        }
    
        for (let i = 0; i < slidesTv.length; i++) {
            slidesTv[i].style.display = "none";
        }
    
        slidesTv[containerIndex].style.display = "block";
    }
    document.getElementById("nextTv").addEventListener("click", plusSlideTv);
    document.getElementById("prevTv").addEventListener("click", minusSlideTv);

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
