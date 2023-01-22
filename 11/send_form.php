<?php

$data = json_decode(file_get_contents('php://input'));
$name = $data->name;
$message = $data->message;

// TODO: sanitize input

$sql_connection = new mysqli('localhost', 'root', '', 'guest_book');
if(!$sql_connection) {
    die('Failed to connect to database');
}

$query = 'INSERT INTO messages (name, message) VALUES (\''.$name.'\', \''.$message.'\')';
if($sql_connection->query($query) === TRUE) {
    print("Message inserted");
}
else {
    echo "Error: " . $query . "<br>" . $sql_connection->error;
}
$sql_connection->close();

?>