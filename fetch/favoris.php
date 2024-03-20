<?php
$host = 'localhost';
$db = "tmdb";
$user = "root";
$password = "";

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

$pdo = new PDO($dsn, $user, $password);

$username = $_GET['username'];

$idFilm = $_GET['idFilm'];

$sql = "SELECT idusers FROM users WHERE userscol = :username";

$stmt = $pdo->prepare($sql);

$stmt->bindParam(':username', $username);

$stmt->execute();

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

$idUser = $result[0]['idusers'];

$currentDate = date('Y-m-d H:i:s');

$sqlverify = "SELECT * FROM favoris_film WHERE id_film = :id";

$stmtverify = $pdo->prepare($sqlverify);

$stmtverify->bindParam(':id', $idFilm);

$stmtverify->execute();

$resultverify = $stmtverify->fetchAll(PDO::FETCH_ASSOC);

if (count($resultverify) > 0) {
    $sqlDelete = "DELETE FROM favoris_film WHERE id_film = :id";
    $stmtDelete = $pdo->prepare($sqlDelete);
    $stmtDelete->bindParam(':id', $idFilm);
    $stmtDelete->execute();
    if ($stmtDelete) {
        echo json_encode("Deleted");
    } else {
        echo json_encode("Error");
    }
} else {
    $sqlFavoris = "INSERT INTO favoris_film (id_film, date_ajout, iduser) VALUES (:idFilm , :date, :idUser)";

    $stmtFavoris = $pdo->prepare($sqlFavoris);

    $stmtFavoris->bindParam(':idFilm', $idFilm);

    $stmtFavoris->bindParam(':date', $currentDate);

    $stmtFavoris->bindParam(':idUser', $idUser);

    $stmtFavoris->execute();

    if ($stmtFavoris) {
        echo json_encode("Done");
        exit();
    } else {
        echo json_encode("Error");
        exit();
    }
}