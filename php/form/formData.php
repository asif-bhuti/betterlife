<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
 header("Content-Type: application/Json;charset=UTF-8");
 header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");
 echo "Testing";

 $data = json_decode(file_get_contents("php://input"));

 $name = $data->name;
 $pass = $data->password;
 $email = $data->email;
 $tel = $data->tel;

 $conn = mysqli_connect("localhost", "root", "","betterlife");

 $mysqli -> query("CREATE TABLE `form` (`name` VARCHAR(25) NOT NULL , `password` VARCHAR(25) NOT NULL , `birthday` DATE NOT NULL , `gender` BOOLEAN NOT NULL , `blood_group` CHAR(3) NOT NULL , `e_mail` VARCHAR(25) NOT NULL , `tel` INT(16) NOT NULL , `presentAdd` VARCHAR(100) NOT NULL , `permanentAdd` VARCHAR(100) NOT NULL , `patient_ID` INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (`patient_ID`))ENGINE = InnoDB;");

 $insertInfo = "INSERT INTO `form` (`name`, `password`, `birthday`, `gender`, `blood_group`, `e_mail`, `tel`, `presentAdd`, `permanentAdd`, `patient_ID`) VALUES ('$name', '$password', '11-11-1111', '1', 'A-', '$email', '$tel', 'la haula wala kuwata illa billa', '', NULL);";

 $conn->query($insertInfo);

if( $result){
    $response['data']=array(
        'status'=>'valid'
    );
    echo json_encode($response);
}
else{
    $response['data']=array(
        'status'=>'invalid');
        echo json_encode($response); 
}



?>