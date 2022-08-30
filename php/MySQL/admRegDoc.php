<?php
include 'config.php';

if (isset($_POST['AddDoc'])) {
    if (empty($_POST['DocID']) || ($_POST['fname']) || empty($_POST['email']) ||   empty($_POST['gender']) || empty($_POST['contact']) || empty($_POST['branchID']) || empty($_POST['adminID']) || empty($_POST['specialty']) || empty($_POST['address']) || empty($_POST['DateOfBirth']) || empty($_POST['password'])) {
        echo '<script>alert("Please fill up all the required field.")</script>';
    } else {

        $docID = $_POST['docID'];
        $fullName = $_POST['fname'];
        $email = $_POST['email'];
        $phone = $_POST['contact'];
        $gender = $_POST['gender'];
        $specialty = $_POST['specialty'];
        $branchID = $_POST['branchID'];
        $adminID = $_POST['adminID'];
        $address = $_POST['address'];
        $DOB = $_POST['DateOfBirth'];
        $password = $_POST['password'];

        $iQuery = "INSERT Into doctor (DocID, DocName, Sex, DOB, Phone, Email, Address, Specialty, BranchID, AdminID, Password) values('$fullName', '$gender', '$DOB', '$phone', '$email', '$address', '$specialty', '$branchID', '$adminID', '$password')";
        if (mysqli_query($conn, $iQuery)) {
            echo "New Doctor added successfully";
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
