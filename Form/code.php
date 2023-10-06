<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Basic form validation
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all fields.";
    } else {
        // Send an email
        $to = "marwanb@lyceechurchill.london";
        $subject = "Form Submission";
        $message = "Name: $name\nEmail: $email\nMessage:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $message, $headers)) {
            echo "Thank you for your submission!";
        } else {
            echo "Oops! Something went wrong.";
        }
    }
}
?>
