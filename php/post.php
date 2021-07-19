<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if($name === '' || $email === '' || $message === '' ){
    echo json_encode('Por favor, complete todos los campos.');
}else{
    echo json_encode('Muchas gracias por comunicarse con nosotros.');
}