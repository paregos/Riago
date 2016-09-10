$(document).ready(function(){

    var output = $.ajax({
    url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Classic', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
        //Change data.source to data.something , where something is whichever part of the object you want returned.
        //To see the whole object you can output it to your browser console using:
        //console.log(data);
        console.log(data);
        var cards = [0, 1, 2, 3, 4, 5];
        var cardImgs = [0, 0, 0, 0, 0, 0];
          for (var i in cards) {
              console.log(i);
              var number = 1;
              while(typeof(data[number].img) == "undefined"){
                number = Math.floor(Math.random() * 392) + 0;
              }
              console.log(number);
              cardImgs[i] = number;
          }
            for (var i in cards) {
              console.log(document.getElementById("cardImg"+i));
              $("#cardImg"+i).attr("src", data[cardImgs[i]].img);
            }
       //	document.getElementById("output").innerTEXT = data.Classic[0].img;

      },
        // document.getElementById("cardImg").attr("src", data.Classic[0].img);},
    error: function(err) {
       console.log(err);
    },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "yGGx5ha2WymshpM55DRCKGqxSN7Sp1O82NljsnCI5IOxSGWbDv"); // Enter here your Mashape key
    }
  });
})

function flip(){
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
  url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Classic', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
  type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
  data: {}, // Additional parameters here
  dataType: 'json',
  success: function(data) {
      //Change data.source to data.something , where something is whichever part of the object you want returned.
      //To see the whole object you can output it to your browser console using:
      //console.log(data);
      console.log(data);

      var cards = [0, 1, 2, 3, 4, 5];
      var cardImgs = [0, 0, 0, 0, 0, 0];
        for (var i in cards) {
            console.log(i);
            var number = 1;
            while(typeof(data[number].img) == "undefined"){
              number = Math.floor(Math.random() * 392) + 0;
            }
            console.log(number);
            cardImgs[i] = number;
        }

          for (var i in cards) {
            console.log(document.getElementById("cardImg"+i));
            $("#cardImg"+i).attr("src", data[cardImgs[i]].img);
          }
     //	document.getElementById("output").innerTEXT = data.Classic[0].img;

    },
      // document.getElementById("cardImg").attr("src", data.Classic[0].img);},
  error: function(err) {
     console.log(err);
  },
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Authorization", "yGGx5ha2WymshpM55DRCKGqxSN7Sp1O82NljsnCI5IOxSGWbDv"); // Enter here your Mashape key
  }
});
}
