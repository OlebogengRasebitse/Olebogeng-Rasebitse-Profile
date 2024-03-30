<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $to = "patiencerasebitse@gmail.com"; 
    $subject = "New Contact Form Submission: $subject";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    
    // Send email
    if (mail($to, $subject, $body)) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
}
?>
