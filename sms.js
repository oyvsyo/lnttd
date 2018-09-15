function sms() {
    var name = $('input#name').val();
    var phone = $('input#phone').val();
    var reg_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var reg_phone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var stripped = phone.replace(/[\(\)\.\-\+\ ]/g, '');
    if (name != '') {
        if (stripped != '') {
            if (!(isNaN(parseInt(stripped)))) {
                if ((stripped.length == 10) || (stripped.length == 12)) {
                    sendForm(name, phone);
                } else {
                    sendFormMessage("Телефон должен содержать 10 или 12 цифр", "red");
                };
            } else {
                sendFormMessage("Введите телефон в формате +380 (__) ___ __ __", "red");
            };
        } else {
            sendFormMessage("Введите Ваш телефон", "red");
        };
    } else {
        sendFormMessage("Введите имя", "red");
    };
};

function sendFormMessage(text, color = "black") {
    $("#resp").remove();
    $(".zayavka").append('<p id="resp" style="color: ' + color + '">' + text + '</p>');
};

function sendForm(name, phone) {
    $.ajax({
        type: 'POST',
        url: 'sms/',
        data: {
            name: name,
            phone: phone,
        },
        // if sucess post request
        success: function(json) {
            sendFormMessage("Ваша заявка отправлена");
            $("form").trigger("reset");
            // console.log(json);
            window.location = 'https://energolab.com.ua'
        },
        // if unsucess post request
        error: function(xhr, errmsg, err) {
            sendFormMessage("Произошла ошибка соединения с серверами. Пожалуйста, попробуйте позже", "")
            console.log(xhr.status + ": " + xhr.responseText);
        }
    });
};
