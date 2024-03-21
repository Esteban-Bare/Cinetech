<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/info.css">
    <link rel="stylesheet" href="./assets/css/header.css">
</head>

<body>
    <header>
        <a href="movies.php" class="linksHeader">Revenir sur films</a>
        <?php if (!isset($_SESSION['user'])) {
            echo
                '<a href="register.php" class="linksHeader">Register</a>
                <a href="login.php" class="linksHeader">Login</a>';
        } else {
            $user = $_SESSION['user'];
            $first = substr($user, 0, 1);
            echo '<a href="user.php" id="hoverLink"class="aHeader">'.$first."</a>";
            echo '<div id="linkDiv" class="linkDiv">Profile</div>';
        }
        ?>
    </header>

    <h1>INFO SUR LA SERIE</h1>
    <input type="hidden" id="username" value="<?php echo isset($_SESSION['user']) ? $_SESSION['user'] : ''; ?>">
    <?php if (isset($_SESSION['user'])) {
        echo '<button id="idContent">Favoris</button>';
    }
    ?>
    <div id="info">

    </div>
    <button class="accordion">Cast</button>
    <div id="cast"></div>
    <script src="./assets/js/info-series.js"></script>
</body>

</html>