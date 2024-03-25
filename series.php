<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TV Shows</title>
    <link rel="stylesheet" href="./assets/css/series.css">
    <link rel="stylesheet" href="./assets/css/header.css">
</head>

<body>
    <header>
        <h1>TV Shows</h1>
        <a href="index.php" class="linksHeader">Home</a>
        <?php if (!isset ($_SESSION['user'])) {
            echo
                '<a href="register.php" class="linksHeader">Register</a>
                <a href="login.php" class="linksHeader">Login</a>';
        } else {
            $user = $_SESSION['user'];
            $first = substr($user, 0, 1);
            echo '<a href="user.php" id="hoverLink"class="aHeader">' . $first . "</a>";
            echo '<div id="linkDiv" class="linkDiv">Profile</div>';
        }
        ?>
    </header>
    <div class="buttons">
        <button id="airingToday">Airing Today</button>
        <button id="popular">Popular</button>
        <button id="onTheAir">On The Air</button>
        <button id="topRated">Top Rated</button>
    </div>
    <h1 id="contentTitle" class="h1Title"></h1>
    <div id="content" class="movies"></div>
    <div class="buttonsPage">
        <button id="minus">Previous</button>
        <p id="actualPage"></p>
        <button id="plus">Next</button>
    </div>
    <script src="./assets/js/series.js"></script>
    <script src="./assets/js/1.js"></script>
    <script src="./assets/js/2.js"></script>
    <script src="https://kit.fontawesome.com/d45865f90f.js" crossorigin="anonymous"></script>
</body>

</html>