<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("php://input");
    if ($data) {
        file_put_contents("data.json", $data);
        echo json_encode(["status" => "ok"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Нет данных"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Неверный метод"]);
}
?>