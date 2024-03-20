const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzExYzQxMTk4MTZiYTdmZGY4YzRkOGUzYzhiMGQ2ZiIsInN1YiI6IjY1ZWVjNGE2ZTcyZmU4MDE4NTVjMmRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ylGAQ_-tgnuA2qU4XKc2nKU3fEy2_Xz6LtlBqlWXCWI'
    }
};



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


