<?php

// Make a connection with MySQL server.
include('config.php');

$sql = "SELECT DocId, DocName, Sex, DOB, Phone, Email, Address, Earnings, Specialty, Location FROM doctors, hospitalbranch WHERE doctors.BranchID = hospitalbranch.BranchID";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    echo "<td>" . "Doctor ID: " . $row["DocID"]. "</td>".
    " Doctor Name: " . $row["DocName"]. "</td>".
    "Gender: " .$row["Sex"] . "</td>".
    "Date of Birth: " . $row["DOB"]. "</td>".
    "Phone: " .$row['Phone'] . "</td>".
    "Email: " .$row['Email']. "</td>".
    "Address: ". $row['Address']. "</td>". 
    "Earnings: ". $row['Earnings']. "</td>". 
    "Specialty: ". $row['Specialty']. "</td>". 
    "Branch: ". $row['Location']. "</td>";
  }
} else {
  echo "No Doctors Found.";
}

mysqli_close($conn);

?>
