-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 18, 2024 at 12:11 PM
-- Server version: 8.0.30
-- PHP Version: 8.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tmdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `idcomments` int NOT NULL,
  `text_comment` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `date_comment` datetime DEFAULT NULL,
  `iduser` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favoris_film`
--

CREATE TABLE `favoris_film` (
  `idfavoris` int NOT NULL,
  `id_film` int DEFAULT NULL,
  `date_ajout` datetime DEFAULT NULL,
  `iduser` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favoris_film`
--

INSERT INTO `favoris_film` (`idfavoris`, `id_film`, `date_ajout`, `iduser`) VALUES
(22, 693134, '2024-03-19 10:11:38', 2),
(23, 792307, '2024-03-19 13:25:47', 2),
(24, 634492, '2024-03-19 13:25:53', 2),
(25, 346698, '2024-03-19 13:27:03', 2),
(26, 866398, '2024-03-19 13:27:10', 2),
(27, 4935, '2024-03-19 13:27:16', 2),
(28, 666277, '2024-03-19 13:51:02', 2),
(29, 915935, '2024-03-19 14:39:05', 2),
(30, 438631, '2024-03-19 14:40:22', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idusers` int NOT NULL,
  `userscol` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `passwords` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `useremail` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idusers`, `userscol`, `passwords`, `useremail`) VALUES
(1, 'admin', 'admin', 'admin@gmail.com'),
(2, 'esteban', 'esteban', 'esteban5.bare@gmail.com'),
(3, 'John ', 'Esteban7', 'jon@gmail.com'),
(4, 'e', 'Esteban7', 'esteban@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`idcomments`),
  ADD KEY `iduser_idx` (`iduser`);

--
-- Indexes for table `favoris_film`
--
ALTER TABLE `favoris_film`
  ADD PRIMARY KEY (`idfavoris`),
  ADD KEY `idusers_idx` (`iduser`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idusers`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `idcomments` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favoris_film`
--
ALTER TABLE `favoris_film`
  MODIFY `idfavoris` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idusers` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `iduser` FOREIGN KEY (`iduser`) REFERENCES `users` (`idusers`);

--
-- Constraints for table `favoris_film`
--
ALTER TABLE `favoris_film`
  ADD CONSTRAINT `idusers` FOREIGN KEY (`iduser`) REFERENCES `users` (`idusers`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
