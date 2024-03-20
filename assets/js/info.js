const urlParams = new URLSearchParams(window.location.search);

const filmId = urlParams.get('id');

console.log(filmId);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzExYzQxMTk4MTZiYTdmZGY4YzRkOGUzYzhiMGQ2ZiIsInN1YiI6IjY1ZWVjNGE2ZTcyZmU4MDE4NTVjMmRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ylGAQ_-tgnuA2qU4XKc2nKU3fEy2_Xz6LtlBqlWXCWI'
  }
};

const infoDiv = document.getElementById('info');
const castDiv = document.getElementById('cast');

fetch('https://api.themoviedb.org/3/movie/' + filmId + '?language=en-US', options)
  .then(response => response.json())
  .then(response => {
    console.log(response);
    const info = document.createElement('div');
    info.innerHTML = `Titre: ${response.original_title}`;
    infoDiv.appendChild(info);
    response.genres.forEach(element => {
      const genre = document.createElement('p');
      genre.innerHTML = element.name;
      infoDiv.appendChild(genre);
    });
    fetch('https://api.themoviedb.org/3/movie/' + filmId + '/credits?language=en-US', options)
      .then(response => response.json())
      .then(response => {
        // console.log(response.cast);
        const lengthArray = response.cast.length;
        for (let i = 0; i < lengthArray; i++) {
          const cast = document.createElement('p');
          cast.classList.add('actor');
          if (i === lengthArray - 1) {
            cast.innerHTML = `and ${response.cast[i].name}.`;
          } else if (i === lengthArray - 2) {
            cast.innerHTML = ` ${response.cast[i].name} `;
          }
          else {
            cast.innerHTML = `${response.cast[i].name}, `;
          }
          castDiv.appendChild(cast);
        }
      })
      .catch(err => console.error(err));
  })
  .catch(err => console.error(err));

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let username = document.getElementById("username");
console.log(username.value);
const buttonId = document.getElementById("idContent");
buttonId.setAttribute('value', filmId);
buttonId.addEventListener("click", function () {
  fetch("./fetch/favoris.php?username=" + username.value + "&idFilm=" + filmId)
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
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

function hoverLink(){
  let link = document.getElementById("hoverLink");
  let linkDiv = document.getElementById("linkDiv");
  link.addEventListener("mouseover", function(){
      linkDiv.style.display = "block";
  });
  link.addEventListener("mouseout", function(){
      linkDiv.style.display = "none";
  });
}

let coloredDiv = document.getElementById("hoverLink");
coloredDiv.style.backgroundColor = getRandomColor();
hoverLink();
