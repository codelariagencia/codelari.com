<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPmailer/Exception.php';
require './PHPmailer/PHPMailer.php';
require './PHPmailer/SMTP.php';


$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$number = isset($_POST['number']) ? $_POST['number'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

if ($name == '' || $email == '' || $number == '' || $message == '') {
    echo json_encode(['isSuccess' => false]);
} else {

    try {
        sendEmailToCodelari($name, $email, $number, $message);
        sendEmailToClient($email);
        echo json_encode(['isSuccess' => true]);
    } catch (Exception $error) {
        echo json_encode(['isSuccess' => false, "message" => $error->getMessage()]);
    }
}



function sendEmailToClient($email)
{
    sendEmail('contato@codelari.com', $email, 'Recebemos seu email', 'recebemos seu email etc');
}


function sendEmailToCodelari($name, $email, $number, $message)
{
    $body = "nome:$name\nemail:$email\nnumber:$number\nmessage:$message";
    sendEmail('contato@codelari.com', 'contato@codelari.com', 'Formulário de contato do site', $body);
}



function sendEmail($from, $to, $subject, $body)
{

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = $from;
    $mail->Password = 'Ysf3DExfBRTf3jQ#';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->setFrom($from);
    $mail->addAddress($to);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->AltBody = ''; //This is the body in plain text for non-HTML mail clients;

    $mail->send();
};
