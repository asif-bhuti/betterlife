<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: access");
 header("Access-Control-Allow-Methods: POST");

 echo "Ello";

$conn = mysqli_connect("localhost","root","","betterlife");

if ($conn -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }

  
// $mysqli -> query("CREATE TABLE `form` (`name` VARCHAR(25) NOT NULL , `password` VARCHAR(25) NOT NULL , `birthday` DATE NOT NULL , `gender` BOOLEAN NOT NULL , `blood_group` CHAR(3) NOT NULL , `e_mail` VARCHAR(25) NOT NULL , `tel` INT(16) NOT NULL , `presentAdd` VARCHAR(100) NOT NULL , `permanentAdd` VARCHAR(100) NOT NULL , `patient_ID` INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (`patient_ID`))ENGINE = InnoDB;");


$conn->query("INSERT INTO `form` (`name`, `password`, `birthday`, `gender`, `blood_group`, `e_mail`, `tel`, `presentAdd`, `permanentAdd`, `patient_ID`) VALUES ('name', 'password', '11-11-1111', '1', 'A-', 'mail', 'tel', 'la haula wala kuwata illa billa', '', NULL);");

// if( $result){
//    $response['data']=array(
//        'status'=>'valid'
//    );
//    echo json_encode($response);
// }
// else{
//    $response['data']=array(
//        'status'=>'invalid');
//        echo json_encode($response); 
// }
?>