<?php
$host = 'localhost';
$db = "tmdb";
$user = "root";
$password = "";

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$pdo = new PDO($dsn, $user, $password);

$username = $_GET['username'];

$sql = "SELECT idusers FROM users WHERE userscol = :username";

$stmt = $pdo->prepare($sql);

$stmt->bindParam(':username', $username);

$stmt->execute();

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

$id = $result[0]['idusers'];

$sqlFavoris = "SELECT id_film, date_ajout FROM favoris_film WHERE iduser = :id";

$stmtFavoris = $pdo->prepare($sqlFavoris);

$stmtFavoris->bindParam(':id', $id);

$stmtFavoris->execute();

$resultFavoris = $stmtFavoris->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($resultFavoris);