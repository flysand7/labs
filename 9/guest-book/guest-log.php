<!doctype html>
<html>
<head>
    <meta charset=utf-8>
    <title>Просмотр сообщений</title>
    <link rel=stylesheet href=styles.css>
</head>
<body>
<div class=content>
<h1>Отзывы</h1>
<hr>
<div class=sort-buttons>
    <p>Сортировка:</p>
    <div class=sort-button>
        <a href='/guest-log.php?sort-field=name&sort-ord=desc'>↓</a>
        <span>Имя</span>
        <a href='/guest-log.php?sort-field=name&sort-ord=asc'>↑</a>
    </div>
    <div class=sort-button>
        <a href='/guest-log.php?sort-field=email&sort-ord=desc'>↓</a>
        <span>Email</span>
        <a href='/guest-log.php?sort-field=email&sort-ord=asc'>↑</a>
    </div>
    <div class=sort-button>
        <a href='/guest-log.php?sort-field=date&sort-ord=desc'>↓</a>
        <span>Дата</span>
        <a href='/guest-log.php?sort-field=date&sort-ord=asc'>↑</a>
    </div>
</div>
<hr>
<?php
    $page = $_GET['page'] ?? 1;
    $page -= 1;
    $mysqli = new mysqli('localhost', 'root', '', 'guest_book');
    if(!$mysqli) {
         die('Failed to connect to database');
    }
    // Get sorting order
    $sort_field = $_GET['sort-field'] ?? 'date';
    $sort_ord = $_GET['sort-ord'] ?? 'asc';
    if(($sort_field != 'name' && $sort_field != 'email' && $sort_field != 'date')) {
        $sort_field = 'date';
    }
    if($sort_ord != 'asc' && $sort_ord != 'desc') {
        $sort_ord = 'asc';
    }
    // Create pagination
    $page_count = 0;
    $per_page = 10;
    {
        // Get total page count
        $stmt1 = $mysqli->prepare('SELECT COUNT(*) FROM book9');
        $stmt1->execute();
        $stmt1->store_result();
        $stmt1->bind_result($result);
        $stmt1->fetch();
        $msgs = intval($result);
        $pages = intdiv(($msgs + $per_page - 1), $per_page);
        $stmt1->free_result();
        $stmt1->close();
        // Pagination
        $pagination = '';
        $pagination .= '<div class=pagination>Страница: ';
        for($i = 0; $i != $pages; ++$i) {
            $p = $i + 1;
            if($i != $page) {
                $pagination .= "<a class=pagination-num href=/guest-log.php";
                {
                    $pagination .= "?page=$p";
                    $pagination .= "&sort-field=$sort_field";
                    $pagination .= "&sort-ord=$sort_ord";
                    $pagination .= ">";
                }
                $pagination .= "$p";
                $pagination .= "</a>";
            }
            else {
                $pagination .= "<a class=pagination-num>$p</a>";
            }
        }
        $pagination .= '</div>';
        $pagination .= '<hr>';
    }
    // Get the messages
    {
        $sql_ord = strtoupper($sort_ord);
        $msg_offset = $page * $per_page;
        $stmt = $mysqli->prepare("SELECT * FROM book9 ORDER BY $sort_field $sort_ord LIMIT ?, ?");
        $stmt->bind_param('ii', $msg_offset, $per_page);
        $stmt->execute();
        $result = $stmt->get_result();
    }
    if(mysqli_num_rows($result) == 0) {
        echo "Error: <br>" . $mysqli->error;
        die();
    }
    echo $pagination;
    while($row = mysqli_fetch_assoc($result)) {
        $name = $row['name'];
        $email = $row['email'];
        $message = $row['message'];
        $date = $row['date'];
        $browser = $row['browser'];
        $url = $row['url'];
        $meta = $date . ' via ' . $browser;
        echo "<div id=guestbook-messages>";
        echo "<div class=guestbook-message>";
        if($url == NULL) {
            echo "<p class=name>$name</p>";
        }
        else {
            echo "<p class=name><a href='$url'>$name</a></p>";
        }
        echo "<p class=email>$email</p>";
        echo "<p class=message>$message</p>";
        echo "<p class=meta>$meta</p>";
        echo "</div>";
        echo "</div>";
    }
    $mysqli->close();
    echo $pagination;
?>
</div>
</body>
</html>