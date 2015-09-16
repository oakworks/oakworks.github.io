<?php
// requires composer and config.ini (see sample provided)

require 'vendor/autoload.php';
$config = parse_ini_file('config.ini');
$origin = parse_url($_SERVER['HTTP_ORIGIN']);

if(in_array($origin['host'], $config['allowed'])){
  header('Access-Control-Allow-Origin:' . $_SERVER['HTTP_ORIGIN']);
  if(empty($_POST['name'])  		||
     empty($_POST['email']) 		||
     empty($_POST['phone']) 		||
     empty($_POST['message'])	||
     !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
     {
  	echo "No arguments Provided!";
  	return false;
     }
  $name = $_POST['name'];
  $email_address = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  // Create the email and send the message
  $to = $config['to'];
  $email_subject = "Hello From:  $name";
  $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";


  $sendgrid = new SendGrid($config['apikey']);
  $email = new SendGrid\Email();
  $email
      ->addTo($to)
      ->setFrom($email_address)
      ->setSubject($email_subject)
      ->setText($email_body)
  ;

  $sendgrid->send($email);

  mail($to,$email_subject,$email_body,$headers);
  return true;
}
?>
