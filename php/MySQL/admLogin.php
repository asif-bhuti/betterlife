<?php
session_start();

// Make a connection with MySQL server.
include('config.php');

//Login progess start, if user press the signin button
if (isset($_POST['AdmsignIn'])) {
  if (empty($_POST['email']) || empty($_POST['password'])) {
    echo '<script>alert("Username & Password should not be empty")</script>';
  } else {

    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT AdminID, Email, Password from admin";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
      // output data of each row
      while($row = mysqli_fetch_assoc($result)) {
        if ($email == $row["Email"] && $password == $row["Password"])
        {
          $pageStore = "Admin Panel page"; //change this to admin panel page file path
          $_SESSION["currentuser"] = $row["AdminID"];
          header("location: $pageStore");
        }
        // echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
      }
    }

    echo "Invalid Username & Password";
    session_abort();
    header("location: Admin login page"); //change this to admin login page file path

    // $sQuery = "SELECT PatId, password from patient where email=? LIMIT 1";

    // // To protect MySQL injection for Security purpose
    // $stmt = $conn->prepare($sQuery);
    // $stmt->bind_param("s", $email);
    // $stmt->execute();
    // $stmt->bind_result($id, $hash);
    // $stmt->store_result();

    // if ($stmt->fetch()) {
    //   if (password_verify($password, $hash)) {
    //     $pageStore = "patient_panel.php";
    //   }
    //   header("location: $pageStore"); // Redirecting To Profile
    //   $stmt->close();
    //   $conn->close();
    // }

    // else {
    //     echo '<script>alert("Invalid Username & Password")</script>';
    // }
    // // else {
    // //     echo '<script>alert("Invalid Username & Password")</script>';
    // //     }
    // $stmt->close();
    // $conn->close(); // Closing database Connection

    mysqli_close($conn);
  }
}
?>

