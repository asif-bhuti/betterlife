<?php

session_start();

// Make a connection with MySQL server.
include('config.php');

if (isset($_POST['admChngPass'])) {
    if (empty($_POST['oldPass']) || empty($_POST['newPass'])) {
      echo '<script>alert("Please fill up all the required fields.")</script>';
    } else {
        $oldPass = $_POST['oldPass'];
        $newPass = $_POST['newPass'];

        $sql = "SELECT AdminID, Password FROM admin WHERE AdminID =". $_SESSION["currentuser"];
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        if ($oldPass != $row['Password'])
        {
            header("location: Admin password change page");
        }
        else
        {
            $updatePassSql = "UPDATE admin SET Password = ". $newPass. " WHERE AdminID =". $_SESSION["currentUser"];
            mysqli_query($conn, $updatePassSql);
        }
    }

    session_write_close();
    header("location: Admin Panel page"); //change this to Admin panel page file path
}
?>