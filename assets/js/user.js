const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzExYzQxMTk4MTZiYTdmZGY4YzRkOGUzYzhiMGQ2ZiIsInN1YiI6IjY1ZWVjNGE2ZTcyZmU4MDE4NTVjMmRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ylGAQ_-tgnuA2qU4XKc2nKU3fEy2_Xz6LtlBqlWXCWI'
    }
};

let username = document.getElementById("username");

console.log(username.value);

const divImage = document.getElementById("divImage");

fetch("./fetch/film_favoris.php?username=" + username.value)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            let date = element.date_ajout;
            let id = element.id_film;
            fetch('https://api.themoviedb.org/3/movie/' + id + '/images', options)
                .then(response => response.json())
                .then(response => {
                    const englishPoster = response.posters.find(poster => poster.iso_639_1 === 'en');

                    if (englishPoster) {
                        const container = document.createElement('div');
                        container.classList.add('image-container');

                        const img = document.createElement('img');
                        img.src = 'https://image.tmdb.org/t/p/w500' + englishPoster.file_path;
                        img.classList.add('image-item');

                        const link = document.createElement('a');
                        link.href = 'info-film.php?id=' + id;
                        link.target = '_blank';
                        link.appendChild(img); // Append the image to the link

                        const text = document.createElement('p');
                        text.textContent = "Date de ajout: " + date;

                        container.appendChild(link); // Append the link (with the image) to the container
                        container.appendChild(text); // Append the text to the container

                        document.getElementById('divImage').appendChild(container);
                    } else {
                        console.log('No English poster found for this movie.');
                    }
                })
                .catch(err => console.error(err));
        })
    })
    .catch(err => console.error(err));

