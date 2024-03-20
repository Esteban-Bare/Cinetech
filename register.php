<?php
session_start();
$host = "localhost";
$db = "tmdb";
$user = "root";
$password = "";

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$pdo = new PDO($dsn, $user, $password);

if (isset($_SERVER['user'])) {
    header('Location:index.php');
    exit();
}

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $sql = "SELECT userscol FROM users WHERE userscol = '$username' OR useremail = '$email'";
    $result = $pdo->query($sql);
    if ($result->rowCount() > 0) {
        echo "<script>alert('Username or email already taken');</script>";
    } else {
        $pattern = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/';
        if (preg_match($pattern, $password)) {
            var_dump($password);
            $sql = "INSERT INTO users (userscol, passwords, useremail) VALUES (:users, :password, :usersemail)";

            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':users', $username);
            $stmt->bindParam(':password', $password);
            $stmt->bindParam(':usersemail', $email);
            $stmt->execute();
            if ($stmt) {
                echo "<script>alert('Account created');</script>";
                header('Location:login.php');
            }
        } else {
            echo "<script>alert('Veuillez entrer un mot de passe contenant au moins une lettre minuscule, une lettre majuscule, un chiffre et comportant au moins 8 caractères.');</script>";
        }
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
        <label for="username">Username</label>
        <input type="text" name="username" id="username">
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <input type="submit" name="submit" value="Submit">
    </form>
</body>

</html>