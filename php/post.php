<?php

    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    $ok = true;
    $alerts = array();

    if ( !isset($name) || empty($name) ) {
        $ok = false;
        $alerts[] = 'Debe introducir su nombre.';
    }

    if ( !isset($email) || empty($email) ) {
        $ok = false;
        $alerts[] = 'Debe introducir su casilla de correo electrónico.';
    }

    if ( !isset($message) || empty($message) ) {
        $ok = false;
        $alerts[] = 'Debe introducir un mensaje.';
    }

    if ($ok) {
        if ($name === 'dcode' && $email === 'dcode' && $message === 'dcode') {
            $ok = true;
            $alerts[] = '¡Muchas gracias por comunicarse con nosotros! Le responderemos a la brevedad.';
        } else {
            $ok = false;
            $alerts[] = 'Por favor, revise los datos incorrectos.';
        }
    }

    echo json_encode(
        array(
            'ok' => $ok,
            'alerts' => $alerts
        )
    );

?>