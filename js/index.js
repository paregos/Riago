function doIt() {
    var output = $.ajax({
        url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?attack=12&locale=koKR',
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function (data) {
            console.log(data);
            console.log(document.getElementById("image"));
            $("#image")[0].attr("src", data.Classic[0].img);
        },
        error: function (err) {
            console.log(err);
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "yGGx5ha2WymshpM55DRCKGqxSN7Sp1O82NljsnCI5IOxSGWbDv");
        }
    });
}
