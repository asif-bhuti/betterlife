-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2022 at 02:07 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `betterlife`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `AdminID` varchar(10) NOT NULL,
  `AdminName` varchar(20) DEFAULT NULL,
  `Sex` char(6) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Phone` int(11) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Salary` int(7) DEFAULT NULL,
  `BranchID` int(3) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `consults`
--

CREATE TABLE `consults` (
  `AppointmentID` int(5) DEFAULT NULL,
  `ApptDateTime` datetime DEFAULT NULL,
  `ConsultDateTime` datetime DEFAULT NULL,
  `PatID` int(10) NOT NULL,
  `DocID` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `DocID` varchar(10) NOT NULL,
  `DocName` varchar(20) DEFAULT NULL,
  `Sex` char(6) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Phone` int(11) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Earnings` int(6) DEFAULT NULL,
  `Specialty` varchar(20) DEFAULT NULL,
  `BranchID` int(3) DEFAULT NULL,
  `AdminID` varchar(10) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `hospitalbranch`
--

CREATE TABLE `hospitalbranch` (
  `BranchID` int(3) NOT NULL,
  `BranchName` varchar(30) DEFAULT NULL,
  `Location` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medicalrecord`
--

CREATE TABLE `medicalrecord` (
  `ReportID` int(5) NOT NULL,
  `IssueDate` date DEFAULT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `ReportFile` text DEFAULT NULL,
  `PatID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `PatID` int(10) NOT NULL,
  `PatName` varchar(20) DEFAULT NULL,
  `Sex` char(6) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Phone` varchar(11) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `BloodGroup` char(3) DEFAULT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`PatID`, `PatName`, `Sex`, `DOB`, `Phone`, `Email`, `Address`, `BloodGroup`, `Password`) VALUES
(9, 'Saurav Anwar', 'Male', '2022-08-12', '01988099673', 'syed.anwar@northsouth.edu', 'Sabujbagh', 'O+', '$2y$10$l7QAHRWrc6Z7Q4kkZecvP.k0fyZNRlwxxodvFzi5C0HxT5PVXidI6'),
(10, 'Rafit Biswas', 'Male', '2022-08-12', '0196232817', 'rafit@gmail.com', 'Rampura', 'A+', 'RafitBiswas'),
(11, 'Tanvir Ahmed', 'Male', '2022-08-09', '32165498712', 'tanvir@gmail.com', 'Fakirapul', 'A-', 'Tanvir'),
(12, 'Asif Bhuti', 'Male', '2022-08-17', '78945612332', 'asif@gmail.com', 'Dhaka', 'O+', 'Asif');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `DocID` varchar(10) DEFAULT NULL,
  `PatID` int(10) NOT NULL,
  `ReportID` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`AdminID`),
  ADD UNIQUE KEY `Phone` (`Phone`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `admBrnc` (`BranchID`);

--
-- Indexes for table `consults`
--
ALTER TABLE `consults`
  ADD KEY `consPat` (`PatID`),
  ADD KEY `consDoc` (`DocID`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`DocID`),
  ADD UNIQUE KEY `Phone` (`Phone`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `docBrnc` (`BranchID`),
  ADD KEY `docAdm` (`AdminID`);

--
-- Indexes for table `hospitalbranch`
--
ALTER TABLE `hospitalbranch`
  ADD PRIMARY KEY (`BranchID`);

--
-- Indexes for table `medicalrecord`
--
ALTER TABLE `medicalrecord`
  ADD PRIMARY KEY (`ReportID`),
  ADD KEY `mRecPat` (`PatID`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`PatID`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD KEY `revDoc` (`DocID`),
  ADD KEY `revPat` (`PatID`),
  ADD KEY `revMRec` (`ReportID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `medicalrecord`
--
ALTER TABLE `medicalrecord`
  MODIFY `ReportID` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `PatID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admBrnc` FOREIGN KEY (`BranchID`) REFERENCES `hospitalbranch` (`BranchID`);

--
-- Constraints for table `consults`
--
ALTER TABLE `consults`
  ADD CONSTRAINT `consDoc` FOREIGN KEY (`DocID`) REFERENCES `doctors` (`DocID`),
  ADD CONSTRAINT `consPat` FOREIGN KEY (`PatID`) REFERENCES `patient` (`PatID`);

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `docAdm` FOREIGN KEY (`AdminID`) REFERENCES `admin` (`AdminID`),
  ADD CONSTRAINT `docBrnc` FOREIGN KEY (`BranchID`) REFERENCES `hospitalbranch` (`BranchID`);

--
-- Constraints for table `medicalrecord`
--
ALTER TABLE `medicalrecord`
  ADD CONSTRAINT `mRecPat` FOREIGN KEY (`PatID`) REFERENCES `patient` (`PatID`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `revDoc` FOREIGN KEY (`DocID`) REFERENCES `doctors` (`DocID`),
  ADD CONSTRAINT `revMRec` FOREIGN KEY (`ReportID`) REFERENCES `medicalrecord` (`ReportID`),
  ADD CONSTRAINT `revPat` FOREIGN KEY (`PatID`) REFERENCES `patient` (`PatID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
