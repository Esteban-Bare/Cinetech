<?php
session_start();
if (!isset ($_SESSION['user'])) {
    header('Location: index.php');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/css/header.css">
    <link rel="stylesheet" href="./assets/css/user.css">
</head>

<body>
    <header>
        <?php $user = $_SESSION['user'];
        echo '<form method="post"><button type="submit" name="submit" class="linksHeader">deco</button></form>';
        if (isset ($_POST['submit'])) {
            unset($_SESSION['user']);
            header('Location:index.php');
        } ?>
        <a href="index.php" class="linksHeader">Home</a>
        <a href="movies.php" class="linksHeader">Revenir sur films</a>
        <a href="series.php" class="linksHeader">Revenir sur series</a>

    </header>
    <input type="hidden" id="username" value="<?php echo isset ($_SESSION['user']) ? $_SESSION['user'] : ''; ?>">
    <h2>
        Films favoris
    </h2>
    <div id="divImage" class="scroll-container"></div>
    <script src="./assets/js/user.js"></script>
</body>

</html>