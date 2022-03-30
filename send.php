<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "New message Best Tour Plan";

if(isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['message']) && isset($_POST['email'])) {
    $body = "
      <h2>New message</h2>
      <b>Name:</b> $name<br>
      <b>Phone:</b> $phone<br>
      <b>Email:</b> $email<br><br>
      <b>Message:</b><br>$message
      ";
} else {
    if(isset($_POST['email'])){
    // если есть что-то в $_POST['email']
    $body = "
      <h2>New subscription request</h2>
      <b>User mail:</b> $email<br>";

    } else {
    // если нет, отправлена форма с телефоном и пр.
    $body = "
      <h2>New message</h2>
      <b>Name:</b> $name<br>
      <b>Phone:</b> $phone<br><br>
      <b>Message:</b><br>$message
      ";
    }
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = ''; // Логин на почте / Данные удалены в целях безопасности
    $mail->Password   = ''; // Пароль на почте / Данные удалены в целях безопасности
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('', ''); // Адрес самой почты и имя отправителя / Данные удалены в целях безопасности

    // Получатель письма - адрес почты
    $mail->addAddress('');  // Данные удалены в целях безопасности



    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    // if ($mail->send()) {$result = "success";} 
    // else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
if ($mail->send()) {
    header('Location: thankyou.html')
    ;} 
else {
    header('Location: error.html')
    ;}