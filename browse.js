$(function(){
    $.get("https://private-anon-679a2b9640-wad20postit.apiary-mock.com/profiles", function(response){
      var i;
      for (i = 0; i < response.length; i++) {
        let follow = $('<button type="button" class="followButton">').text("Follow");
        follow.click(function(){

        });
        let picture = $('<img class="profilepic">').attr('src', response[i].avatar);
        let name = $('<p>').text(response[i].firstname + " " + response[i].lastname);
        square = $(".divSquare"+(i+1)).append(picture).append(name).append(follow);
        $(".main-container").append(square)
      }
    })
  })