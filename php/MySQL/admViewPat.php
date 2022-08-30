<?php

// Make a connection with MySQL server.
include('config.php');

$sql = "SELECT PatId, PatName, Sex, DOB, Phone, Email, Address, BloodGroup";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    echo "<td>" . "Patient ID: " . $row["PatID"]. "</td>".
    "Patient Name: " . $row["PatName"]. "</td>".
    "Gender: " .$row["Sex"] . "</td>".
    "Date of Birth: " . $row["DOB"]. "</td>".
    "Phone: " .$row['Phone'] . "</td>".
    "Email: " .$row['Email']. "</td>".
    "Address: ". $row['Address']. "</td>". 
    "Blood Group: ". $row['BloodGroup']. "</td>". 
  }
} else {
  echo "No Patient Found!";
}

mysqli_close($conn);

?>