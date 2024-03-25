<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/header.css">
    <link rel="stylesheet" href="./assets/css/footer.css">
    <link rel="stylesheet" href="./assets/css/index.css">
</head>

<body>
    <header>
        <h1>Welcome</h1>
        <a href="movies.php" class="linksHeader">Films</a>
        <a href="series.php" class="linksHeader">Series</a>
        <?php if (!isset($_SESSION['user'])) {
            echo
                '<a href="register.php" class="linksHeader">Register</a>
                <a href="login.php" class="linksHeader">Login</a>';
        } else {
            $user = $_SESSION['user'];
            $first = substr($user, 0, 1);
            $first = strtoupper($first);
            echo '<a href="user.php" id="hoverLink"class="aHeader">'.$first."</a>";
            echo '<div id="linkDiv" class="linkDiv">Profile</div>';
        }
        ?>
    </header>
    <h2 class="indexH2">Les 20 films de la semaine.</h2>
    <p class="indexP">Voici le top 20 des films les plus regardés ou tendance de la semaine, toutes plateformes confondues.</p>
    <div class="container-wrapper">
        <div class="container">
            <button id="prev"><i class="fa-solid fa-backward"></i></button>
            <div id="titles">
            </div>
            <button id="next"><i class="fa-solid fa-forward"></i></button>
        </div>
    </div>
    <h2 class="indexH2">Les 20 serie de la semaine.</h2>
    <p class="indexP">Voici le top 20 de serie dans tous les genres.</p>
    <div class="container-wrapper">
        <div class="container">
            <button id="prevTv"><i class="fa-solid fa-backward"></i></button>
            <div id="titlesTv">
            </div>
            <button id="nextTv"><i class="fa-solid fa-forward"></i></button>
        </div>
    </div>
    <footer>
        <h1>Copyright: Esteban</h1>
    </footer>
    <script src="./assets/js/index.js"></script>
    <script src="./assets/js/1.js"></script>
    <script src="./assets/js/2.js"></script>
    <script src="https://kit.fontawesome.com/d45865f90f.js" crossorigin="anonymous"></script>
</body>

</html>