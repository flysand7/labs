
<html>
<head>
    <meta charset=utf-8>
    <title>Гостевая книга</title>
    <link rel=stylesheet href=styles.css>
</head>
<body>
    <div class=content>
        <p>Оставьте отзыв</p>
        <div class=guestbook-form id=guestbook-form>
            <form>
                <label for=name>Имя</label>
                <input type=text id=name name=name required>
                <label for=message>Сообщение</label>
                <textarea id=message name=message cols=60 rows=4></textarea>
                <div>
                    <input type=checkbox name=conf>Я не робот</input>
                </div>
                <button type=button onclick="send_form()">Отправить</button>
                <p style=color:red id=form-error></p>
            </form>
        </div>
        <hr>
        <div id=guestbook-messages>
            <div class=guestbook-message>
                <b>Paul</b>
                <p>Hi I'm paul!</p>
            </div>
            <div class=guestbook-message>
                <b>Andrey</b>
                <p>Hi I'm andrey!</p>
            </div>
        </div>
    </div>
    <script>
        let $=(n)=>document.getElementById(n)
        let thx=false
        validate_form_data=(name, message)=>{
            if(name.trim().length == 0) return false;
            if(message.trim().length == 0) return false;
            return true;
        }
        send_form=()=>{
            let form_name = $('name').value
            let form_msg = $('message').value
            if(!validate_form_data(form_name, form_msg)) {
                $('form-error').innerHTML = 'Имя и сообщение должны быть не пустыми';
                return;
            }
            else {
                $('form-error').innerHTML = '';
            }
            let item = {
                name: form_name,
                message: form_msg,
            }
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText)
                    if(!thx) {
                        $('guestbook-form').innerHTML += '<p>Спасибо за отзыв</p>'
                        thx = true
                    }
                }
            };
            xhttp.open("POST", "/send_form.php", true);
            xhttp.send(JSON.stringify(item));
            get_messages();
        }
        get_messages=()=>{
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText)
                    let response = JSON.parse(this.responseText)
                    console.log(response)
                    $('guestbook-messages').innerHTML = ''
                    for(msg of response) {
                        console.log(msg)
                        $('guestbook-messages').innerHTML +=
                            `<div class=guestbook-message>
                                <b>`+msg.name+`</b>
                                <p>`+msg.message+`</p>
                            </div>`
                    }
                }
            };
            xhttp.open("POST", "/get_messages.php", true);
            xhttp.send(JSON.stringify({}));
        }
        get_messages();
    </script>
</body>
</html>
