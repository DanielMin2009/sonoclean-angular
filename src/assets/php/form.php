<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';



$formdata = json_decode(file_get_contents('php://input'),true);
   $txtName = $formdata['txtName'];
   $txtCompany = $formdata['txtCompany'];
   $txtEmail = $formdata['txtEmail'];
   $txtPhone = $formdata['txtPhone'];
   $txtMaterial = $formdata['txtMaterial'];
   $txtSize = $formdata['txtSize'];
   $txtQuantity = $formdata['txtQuantity'];
   $txtDirt = $formdata['txtDirt'];
   $txtComments = $formdata['txtComments'];


   $msg = '<strong>Nombre y Apellidos</strong>: '.$txtName; 
   $msg .= '<br><strong>Empresa</strong>: '.$txtCompany;
   $msg .= '<br><strong>Email</strong>: '.$txtEmail;
   $msg .= '<br><strong>Teléfono </strong>: '.$txtPhone;
   $msg = '<strong>Nombre y Apellidos</strong>: '.$txtMaterial; 
   $msg .= '<br><strong>Empresa</strong>: '.$txtQuantity;
   $msg .= '<br><strong>Email</strong>: '.$txtDirt;
   $msg .= '<br><strong>Teléfono </strong>: '.$txtComments;


$mail = new PHPMailer(true);

try {
   //Server settings
   $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'sonowat@gmail.com';                     // SMTP username
    $mail->Password   = 'HiTechUsCleaners2019$';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

   //Recipients
   $mail->setFrom('sonowat@gmail.com', 'SonoClean');
   $mail->addAddress('contact@sonowat.com', 'SonoClean');
   // Content
   $mail->isHTML(true);                                  // Set email format to HTML
   $mail->Subject = 'Contacto desde www.sonoclean.eu';
   $mail->Body    = $msg;
   //  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';


$mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>