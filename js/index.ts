function doIt() {
  var output = $.ajax({
  url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?attack=12&locale=koKR', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
  type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
  data: {}, // Additional parameters here
  dataType: 'json',
  success: function(data) {
    //
      //Change data.source to data.something , where something is whichever part of the object you want returned.
      //To see the whole object you can output it to your browser console using:
      //console.log(data);
      console.log(data);
     //	document.getElementById("output").innerTEXT = data.Classic[0].img;
      console.log(document.getElementById("image"));
      $("#image")[0].attr("src", data.Classic[0].img);
    },
      // document.getElementById("image").attr("src", data.Classic[0].img);},
  error: function(err) {
     console.log(err);
  },
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Authorization", "yGGx5ha2WymshpM55DRCKGqxSN7Sp1O82NljsnCI5IOxSGWbDv"); // Enter here your Mashape key
  }
});
}
