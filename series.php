<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header>
        <a href="index.php">Home</a>*
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
    <button onclick="pagePlus()">AAAAA</button>
    <button onclick="pageLess()">EEEEE</button>
    <p>Series</p>
    <div id="series">
    </div>
    <script src="./assets/js/series.js"></script>
    <script src="./assets/js/1.js"></script>
    <script src="./assets/js/2.js"></script>
</body>

</html>