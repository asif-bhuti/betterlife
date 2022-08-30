<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: access");
 header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With"); 
  
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "betterlife"; 
$id = '';

$con = mysqli_connect($host, $user, $password,$dbname);
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PHP_SELF'],'/'));


if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}



switch ($method) {
    case 'GET':
      $name = $_GET['name'];
      $sql="select * from doctors where docname='$name' ;";
      // $sql="select * from form".($name?" where id=$name":'');
      // $sql = mysqli_prepare($con, "SELECT * FROM form WHERE name = ? ");
      // $sql->bind_param('s', $id);
      // $sql->execute();
      break;
    case 'POST':
      $data = json_decode(file_get_contents("php://input"));
      var_dump($data);
      
  
      $pat_ID = $data->pat_ID;
      $doc_ID = $data->doc_ID;
      $consult_time = $data->consult_time;
      $sql = "INSERT INTO `consults` (`AppointmentID`, `ApptDateTime`, `ConsultDateTime`, `PatID`, `DocID`) VALUES ('', '', '$consult_time', '$pat_ID', '$doc_ID'  );"; 
      break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }

$con->close();
?>