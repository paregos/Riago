$(document).ready(function () {
    var output = $.ajax({
        url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Classic',
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            var cards = [0, 1, 2, 3, 4, 5];
            var cardImgs = [0, 0, 0, 0, 0, 0];
            for (var i in cards) {
                console.log(i);
                var number = 1;
                while (typeof (data[number].img) == "undefined") {
                    number = Math.floor(Math.random() * 392) + 0;
                }
                console.log(number);
                cardImgs[i] = number;
            }
            for (var i in cards) {
                console.log(document.getElementById("cardImg" + i));
                $("#cardImg" + i).attr("src", data[cardImgs[i]].img);
            }
        },
        error: function (err) {
            console.log(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "yGGx5ha2WymshpM55DRCKGqxSN7Sp1O82NljsnCI5IOxSGWbDv");
        }
    });
});
function flip() {
    $("#card").flip('toggle');
}
function doIt() {
    document.querySelector('#flip-toggle0').classList.toggle('flip');
    document.querySelector('#flip-toggle1').classList.toggle('flip');
    document.querySelector('#flip-toggle2').classList.toggle('flip');
    document.querySelector('#flip-toggle3').classList.toggle('flip');
    document.querySelector('#flip-toggle4').classList.toggle('flip');
    document.querySelector('#flip-toggle5').classList.toggle('flip');
    var output = $.ajax({
        url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Classic',
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            var cards = [0, 1, 2, 3, 4, 5];
            var cardImgs = [0, 0, 0, 0, 0, 0];
            for (var i in cards) {
                console.log(i);
                var number = 1;
                while (typeof (data[number].img) == "undefined") {
                    number = Math.floor(Math.random() * 392) + 0;
                }
                console.log(number);
                cardImgs[i] = number;
            }
            for (var i in cards) {
                console.log(document.getElementById("cardImg" + i));
                $("#cardImg" + i).attr("src", data[cardImgs[i]].img);
            }
        },
        error: function (err) {
            console.log(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "yGGx5ha2WymshpM55DRCKGqxSN7Sp1O82NljsnCI5IOxSGWbDv");
        }
    });
}
