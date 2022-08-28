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