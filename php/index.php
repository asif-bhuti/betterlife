<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: access");
 header("Access-Control-Allow-Methods: POST");
 header("Content-Type: application/Json;charset=UTF-8");
 header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");
 echo "Testing";
 
$mysqli = mysqli_connect("localhost","root","","betterlife");

$mysql = "CREATE TABLE `form` (`name` VARCHAR(25) NOT NULL , `password` VARCHAR(25) NOT NULL , `birthday` DATE NOT NULL , `gender` BOOLEAN NOT NULL , `blood_group` CHAR(3) NOT NULL , `e_mail` VARCHAR(25) NOT NULL , `tel` INT(16) NOT NULL , `presentAdd` VARCHAR(100) NOT NULL , `permanentAdd` VARCHAR(100) NOT NULL , `patient_ID` INT NOT NULL AUTO INCREMENT, PRIMARY KEY (`patient_ID`));";

if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }

  
$mysqli -> query("CREATE TABLE `form` (`name` VARCHAR(25) NOT NULL , `password` VARCHAR(25) NOT NULL , `birthday` DATE NOT NULL , `gender` BOOLEAN NOT NULL , `blood_group` CHAR(3) NOT NULL , `e_mail` VARCHAR(25) NOT NULL , `tel` INT(16) NOT NULL , `presentAdd` VARCHAR(100) NOT NULL , `permanentAdd` VARCHAR(100) NOT NULL , `patient_ID` INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (`patient_ID`))ENGINE = InnoDB;");
?>