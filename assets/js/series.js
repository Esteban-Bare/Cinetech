const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzExYzQxMTk4MTZiYTdmZGY4YzRkOGUzYzhiMGQ2ZiIsInN1YiI6IjY1ZWVjNGE2ZTcyZmU4MDE4NTVjMmRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ylGAQ_-tgnuA2qU4XKc2nKU3fEy2_Xz6LtlBqlWXCWI'
    }
};

const titlesDiv = document.getElementById('titles');
let numero = 1;

fetch('https://api.themoviedb.org/3/trending/tv/week?language=fr-FR&page=' + numero, options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {
            console.log(element.name);
            const imgSeries = $("<img>").attr('src', 'https://image.tmdb.org/t/p/w500' + element.backdrop_path);
            const namesDiv = $("<div>").text(element.name);
            $("#series").append(namesDiv, imgSeries);
        });
    })
    .catch(err => console.error(err));

function pagePlus() {
    ++numero;
    document.getElementById('series').innerHTML = '';
    fetch('https://api.themoviedb.org/3/trending/tv/week?language=fr-FR&page=' + numero, options)
        .then(response => response.json())
        .then(response => {
            console.log(response.results);
            response.results.forEach(element => {
                console.log(element.name);
                const imgSeries = $("<img>").attr('src', 'https://image.tmdb.org/t/p/w500' + element.backdrop_path);
                const namesDiv = $("<div>").text(element.name);
                $("#series").append(namesDiv, imgSeries);
            });
        })
        .catch(err => console.error(err));

}

function pageLess() {
    if (numero > 1) {
        --numero;
        document.getElementById('series').innerHTML = '';
        fetch('https://api.themoviedb.org/3/trending/tv/week?language=fr-FR&page=' + numero, options)
            .then(response => response.json())
            .then(response => {
                console.log(response.results);
                response.results.forEach(element => {
                    console.log(element.name);
                    const imgSeries = $("<img>").attr('src', 'https://image.tmdb.org/t/p/w500' + element.backdrop_path);
                    const namesDiv = $("<div>").text(element.name);
                    $("#series").append(namesDiv, imgSeries);
                });
            })
            .catch(err => console.error(err));
    } else {
        console.log('no more page');
    }
}

console.log(numero);

