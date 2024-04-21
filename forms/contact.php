<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'assets/vendor/php-email-form/PHPMailer/src/Exception.php';
require 'assets/vendor/php-email-form/PHPMailer/src/PHPMailer.php';
require 'assets/vendor/php-email-form/PHPMailer/src/SMTP.php';
$mail = new PHPMailer(true);
try {
    // Server settings
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'momin.ce12@gmail.com';        // SMTP username
    $mail->Password   = 'your-gmail-app-password';              // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to
    // Recipients
    $mail->setFrom('your-gmail-username@gmail.com', 'Mailer');
    $mail->addAddress('momin.ce12@gmail.com', 'Khondhaker Al Momin');     // Add a recipient
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $_POST['subject'];
    $mail->Body    = 'This is a plain-text message body';
    $mail->AltBody = strip_tags($_POST['message']);
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>