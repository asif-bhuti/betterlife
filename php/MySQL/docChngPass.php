<?php

session_start();

// Make a connection with MySQL server.
include('config.php');

if (isset($_POST['docChngPass'])) {
    if (empty($_POST['oldPass']) || empty($_POST['newPass'])) {
      echo '<script>alert("Please fill up all the required fields.")</script>';
    } else {
        $oldPass = $_POST['oldPass'];
        $newPass = $_POST['newPass'];

        $sql = "SELECT DocID, Password FROM doctors WHERE DocID =". $_SESSION["currentuser"];
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        if ($oldPass != $row['Password'])
        {
            header("location: Doctor password change page");
        }
        else
        {
            $updatePassSql = "UPDATE doctors SET Password = ". $newPass. " WHERE DocID =". $_SESSION["currentUser"];
            mysqli_query($conn, $updatePassSql);
        }
    }

    session_write_close();
    header("location: Doctor Panel page"); //change this to Doctor panel page file path
}
?>