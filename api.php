<?php
    header("content-type:application/json");
    $_DATA = json_decode(file_get_contents("php://input"), true);
    $_METHOD = $_SERVER["REQUEST_METHOD"];
    $_HEADERS = apache_request_headers();
    echo json_encode($_HEADERS);
?>