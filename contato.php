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
  exit();
} else {

  try {
    sendEmailToCodelari($name, $email, $number, $message);
    sendEmailToClient($email, $name);
    echo json_encode(['isSuccess' => true]);
    exit();
  } catch (Exception $error) {
    echo json_encode(['isSuccess' => false, "message" => $error->getMessage()]);
    exit();
  }
}



function sendEmailToClient($email, $name)
{

  $htmlMessage = '<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>Formulário enviado com sucesso!</title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
    body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
    table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
    img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
    p { display:block;margin:13px 0; }</style><!--[if mso]>
  <xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]--><!--[if lte mso 11]>
  <style type="text/css">
    .mj-outlook-group-fix { width:100% !important; }
  </style>
  <![endif]--><style type="text/css">@media only screen and (min-width:480px) {
  .mj-column-per-100 { width:100% !important; max-width: 100%; }
}</style><style type="text/css">@media only screen and (max-width:480px) {
table.mj-full-width-mobile { width: 100% !important; }
td.mj-full-width-mobile { width: auto !important; }
}</style></head><body style="background-color:#221C35;"><div style="background-color:#221C35;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><v:image style="border:0;mso-position-horizontal:center;position:absolute;top:0;width:600px;z-index:-3;" xmlns:v="urn:schemas-microsoft-com:vml" /><![endif]--><div style="margin:0 auto;max-width:600px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tr style="vertical-align:top;"><td style="background:#221C35;background-position:center center;background-repeat:no-repeat;padding:0px;vertical-align:top;" height="0"><!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" ><tr><td style=""><![endif]--><div class="mj-hero-content" style="margin:0px auto;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;"><tr><td><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;"><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:20px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:116px;"><img alt="Codelari" height="auto" src="https://codelari.com/emails/logo-min.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title="Codelari" width="116"></td></tr></tbody></table></td></tr></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#F2F2F2;background-color:#F2F2F2;margin:0px auto;border-radius:20px;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#F2F2F2;background-color:#F2F2F2;width:100%;border-radius:20px;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="background:#EF6A00;font-size:0px;padding:20px;word-break:break-word;"><div style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#221C35;">Olá, ' . $name . '!</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-top:20px;word-break:break-word;"><div style="font-family:Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#221C35;">Gostaríamos primeiramente de agradecer por ter escolhido a <strong>Codelari</strong>.<br><br>Sabemos da importância que a sua marca tem para você, e por isso nós buscamos sempre entregar o melhor.<br><br>Já <strong>recebemos o seu contato</strong> e iremos responder em breve.<br><br>Enquanto isso, você pode tirar todas as suas dúvidas pelas nossas redes sociais. Será um prazer te ajudar.</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:6px;vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#007672;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.facebook.com/CodelariAgencia" target="_blank"><img alt="Facebook" height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" style="border-radius:3px;display:block;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:6px;vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#007672;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.instagram.com/codelariagencia" target="_blank"><img alt="Instagram" height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/instagram.png" style="border-radius:3px;display:block;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:6px;vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#007672;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://twitter.com/CodelariAgencia" target="_blank"><img alt="Twitter" height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png" style="border-radius:3px;display:block;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td></tr></table><![endif]--></td></tr><tr><td style="font-size:0px;padding:10px 25px;word-break:break-word;"><p style="border-top:solid 2px #EF6A00;font-size:1px;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 2px #EF6A00;font-size:1px;margin:0px auto;width:550px;" role="presentation" width="550px" ><tr><td style="height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]--></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Arial, sans-serif;font-size:10px;line-height:1;text-align:center;color:#221C35;">Codelari © 2021. CNPJ 41.361.913/0001-10<br><br><a style="color: #007672" href="https://codelari.com/">codelari.com</a></div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td style="font-size:0px;word-break:break-word;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="5" style="height:5px;"><![endif]--><div style="height:5px;">&nbsp;</div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>';


  sendEmail('contato@codelari.com', $email, 'Formulário enviado com sucesso!', $htmlMessage);
}


function sendEmailToCodelari($name, $email, $number, $message)
{
  $body = '<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>Novo formulário de contato</title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
    body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
    table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
    img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
    p { display:block;margin:13px 0; }</style><!--[if mso]>
  <xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]--><!--[if lte mso 11]>
  <style type="text/css">
    .mj-outlook-group-fix { width:100% !important; }
  </style>
  <![endif]--><style type="text/css">@media only screen and (min-width:480px) {
  .mj-column-per-100 { width:100% !important; max-width: 100%; }
}</style><style type="text/css"></style></head><body style="background-color:#221C35;"><div style="background-color:#221C35;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;"><v:image style="border:0;mso-position-horizontal:center;position:absolute;top:0;width:600px;z-index:-3;" xmlns:v="urn:schemas-microsoft-com:vml" /><![endif]--><div style="margin:0 auto;max-width:600px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tr style="vertical-align:top;"><td style="background:#221C35;background-position:center center;background-repeat:no-repeat;padding:0px;padding-top:40px;vertical-align:top;" height="-40"><!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" ><tr><td style=""><![endif]--><div class="mj-hero-content" style="margin:0px auto;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;"><tr><td><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0px;"></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#F2F2F2;background-color:#F2F2F2;margin:0px auto;border-radius:20px;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#F2F2F2;background-color:#F2F2F2;width:100%;border-radius:20px;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="background:#EF6A00;font-size:0px;padding:20px;word-break:break-word;"><div style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#221C35;">Novo formulário de contato</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#221C35;font-family:Arial, sans-serif;font-size:16px;line-height:22px;table-layout:auto;width:100%;border:none;"><tr style="border-bottom:1px solid #221C35;text-align:left;"><th style="padding: 10px 0 0 0; color: #EF6A00">Campo</th><th style="padding: 10px 0 0 0; color: #EF6A00">Resposta</th></tr><tr style="border-bottom:1px solid #FFFFFF;text-align:left;"><td style="padding: 10px 0 0 0; font-weight: bold">Nome</td><td style="padding: 10px 0 0 0; max-width: 160px">' . $name . '</td></tr><tr style="border-bottom:1px solid #FFFFFF;text-align:left;"><td style="padding: 10px 0 0 0; font-weight: bold">E- mail</td><td style="padding: 10px 0 0 0; max-width: 160px">' . $email . '</td></tr><tr style="border-bottom:1px solid #FFFFFF;text-align:left;"><td style="padding: 10px 0 0 0; font-weight: bold">Telefone</td><td style="padding: 10px 0 0 0; max-width: 160px">' . $number . '</td></tr><tr style="border-bottom:1px solid #FFFFFF;text-align:left;"><td style="padding: 10px 0 0 0; font-weight: bold">Mensagem</td><td style="padding: 10px 0 0 0; max-width: 160px">' . $message . '</td></tr></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td style="font-size:0px;word-break:break-word;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="4" style="height:4px;"><![endif]--><div style="height:4px;">&nbsp;</div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>';

  sendEmail('contato@codelari.com', 'contato@codelari.com', 'Contato - Codelari', $body);
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
  $mail->ClearReplyTos();
  $mail->addReplyTo($GLOBALS['email'], $GLOBALS['name']);
  $mail->setFrom($from, 'Codelari');
  $mail->addAddress($to);
  $mail->isHTML(true);
  $mail->Subject = $subject;
  $mail->Body = $body;
  $mail->CharSet = 'UTF-8';
  $mail->AltBody = ''; //This is the body in plain text for non-HTML mail clients;

  $mail->send();
};
