<?php
session_start();
$host = 'localhost';
$db = "tmdb";
$user = "root";
$password = "";

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$pdo = new PDO($dsn, $user, $password);

if (isset($_SESSION['user'])) {
    header('Location:index.php');
    exit();
}

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = "SELECT * FROM users WHERE userscol = :user";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':user', $username);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if ($result) {
        $sql = "SELECT * FROM users WHERE passwords = :password AND userscol = :user";
        $stmtPass = $pdo->prepare($sql);
        $stmtPass->bindParam(':password', $password);
        $stmtPass->bindParam(':user', $username);
        $stmtPass->execute();
        $resultPass = $stmtPass->fetchAll(PDO::FETCH_ASSOC);
        var_dump($resultPass);
        if ($resultPass) {
            $_SESSION['user'] = $username;
            echo "Password";
            header('Location:index.php');
            exit();
        } else {
            echo "Wrong password";
        }
    } else {
        echo 'User non existent';
    }

}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="post">
        <label for="user">Username</label>
        <input type="text" name="username" id="user">
        <label for="pass">Password</label>
        <input type="password" name="password" id="pass">
        <input type="submit" name="submit" value="Login">
    </form>
</body>

</html>