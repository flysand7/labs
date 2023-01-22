
<?php

$data = json_decode(file_get_contents('php://input'));
if(property_exists($data, 'from')) {
    $query = 'SELECT name, message FROM messages WHERE date > ' . $data->from . 'ORDER BY date DESC';
}
else {
    $query = 'SELECT name, message FROM messages ORDER BY date DESC';
}

$sql_connection = new mysqli('localhost', 'root', '', 'guest_book');
if(!$sql_connection) {
    die('Failed to connect to database');
}
$result = $sql_connection->query($query);
if($result === FALSE) {
    die('SQL Error: ' . $sql_connection->error);
}
$messages = array();
if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $name = $row["name"];
        $message = $row["message"];
        array_push($messages, array(
            'name' => $name,
            'message' => $message
        ));
    }
}
print(json_encode($messages));
$sql_connection->close();

?>
