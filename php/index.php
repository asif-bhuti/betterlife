<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: access");
 header("Access-Control-Allow-Methods: POST");
 header("Access-Control-Allow-Headers: X-Requested-With");
 header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

 echo "Ello";

 $data = json_decode(file_get_contents("php://input"));
var_dump($data);

 $name = $data->name;
 $pass = $data->password;
 $email = $data->email;
 $tel = $data->tel;
 $presentAdd = $data->presentAddress;
 $permanentAdd = $data->permanentAddress;

$conn = mysqli_connect("localhost","root","","betterlife");






if ($conn -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }

  
//$insert = "INSERT INTO `form` (`name`, `password`, `birthday`, `gender`, `blood_group`, `e_mail`, `tel`, `presentAdd`, `permanentAdd`, `patient_ID`) VALUES ('$name', '$pass', 'birthDate', '1', 'A-', '$email', '$tel', '$presentAdd', '$permanentAdd', NULL);";

$conn->query("INSERT INTO `form` (`name`, `password`, `birthday`, `gender`, `blood_group`, `e_mail`, `tel`, `presentAdd`, `permanentAdd`, `patient_ID`) VALUES ('$name', '$pass', 'birthDate', '1', 'A-', '$email', '$tel', '$presentAdd', '$permanentAdd', NULL);");

// if ($conn->query($insert) === TRUE and $data->name!=NULL) {
//   echo "New record created successfully";
// } else {
//   echo "Error: " . $insert . "<br>" . $conn->error;
// }





$conn->close()

?>