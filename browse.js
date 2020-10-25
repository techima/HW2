$(function(){
    $.get("https://private-anon-679a2b9640-wad20postit.apiary-mock.com/profiles", function(response){
      var i;
      for (i = 0; i < response.length; i++) {
        let picture = $('<img class="profilepic">').attr('src', response[i].avatar);
        let name = $('<p>').text(response[i].firstname + " " + response[i].lastname);
        let square = null;
        if (i == 0) {
          square = $(".divSquare1").append(picture).append(name);
        } else if (i == 1) {
          square = $(".divSquare2").append(picture).append(name);
        } else if (i == 2) {
          square = $(".divSquare3").append(picture).append(name);
        } else {
          square = $(".divSquare4").append(picture).append(name);
        }
        $(".main-container").append(square)
      }
    })
  })