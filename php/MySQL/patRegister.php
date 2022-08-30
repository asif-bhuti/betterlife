<?php
include 'config.php';

if (isset($_POST['signUp'])) {
  if (empty($_POST['fname']) || empty($_POST['email']) || empty($_POST['contact']) ||  empty($_POST['gender']) ||  empty($_POST['bGroup']) ||  empty($_POST['address']) || empty($_POST['DateOfBirth']) || empty($_POST['password'])) {
    echo '<script>alert("Please fill up all the required field.")</script>';
  } else {

    $fullName = $_POST['fname'];
    $email = $_POST['email'];
    $phone = $_POST['contact'];
    $gender = $_POST['gender'];
    $bGroup = $_POST['bGroup'];
    $address = $_POST['address'];
    $DOB = $_POST['DateOfBirth'];
    $password = $_POST['password'];
    // $hash = password_hash($password, PASSWORD_DEFAULT);


    // $sQuery = "SELECT PatId from patient where email=? LIMIT 1";
    // $iQuery = "INSERT Into patient (PatName, Sex, DOB, Phone, Email, Address, BloodGroup, Password) values(?, ?, ?, ?, ?, ?, ?, ?)";

    $iQuery = "INSERT Into patient (PatName, Sex, DOB, Phone, Email, Address, BloodGroup, Password) values('$fullName', '$gender', '$DOB', '$phone', '$email', '$address', '$bGroup', '$password')";
    if (mysqli_query($conn, $iQuery)) {
      echo '<script>alert(New Patient account created successfully)</script>';
    } else {
      echo "Error: " . $iQuery . "<br>" . mysqli_error($conn);
    }


    // // To protect MySQL injection for Security purpose
    // $stmt = $conn->prepare($sQuery);
    // $stmt->bind_param("s", $email);
    // $stmt->execute();
    // $stmt->bind_result($id);
    // $stmt->store_result();
    // $rnum = $stmt->num_rows;

    // if ($rnum == 0) { //if true, insert new data
    //   $stmt->close();

    //   $stmt = $conn->prepare($iQuery);
    //   $stmt->bind_param("ssssssss", $fullName, $gender, $DOB, $phone, $email, $address, $bGroup, $hash);
    //   if ($stmt->execute()) {
    //     echo '<script>alert("Register successfully, Please login with your login details")</script>';
    //   }
    // } else {
    //   echo '<script>alert("Someone already register with this email address.")</script>';
    // }
    // $stmt->close();
    // $conn->close(); // Closing database Connection

    mysqli_close($conn);
  }
}
?>