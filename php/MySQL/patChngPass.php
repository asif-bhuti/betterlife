<?php

session_start();

// Make a connection with MySQL server.
include('config.php');

if (isset($_POST['patChngPass'])) {
    if (empty($_POST['oldPass']) || empty($_POST['newPass'])) {
      echo '<script>alert("Please fill up all the required fields.")</script>';
    } else {
        $oldPass = $_POST['oldPass'];
        $newPass = $_POST['newPass'];

        $sql = "SELECT PatID, Password FROM patient WHERE PatID =". $_SESSION["currentUser"];
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        if ($oldPass != $row['Password'])
        {
            header("location: Patient password change page");
        }
        else
        {
            $updatePassSql = "UPDATE patient SET Password = ". $newPass. " WHERE PatID =". $_SESSION["currentUser"];
            mysqli_query($conn, $updatePassSql);
        }
    }

    session_write_close();
    header("location: Patient Panel page"); //change this to Patient panel page file path
}
?>