$(document).ready(function(){
   $.get("https://private-anon-6630f0a8cc-wad20postit.apiary-mock.com/users/1", function(data){
      $('.avatar').attr('src', data.avatar);
    	$("#myDropdown").hide();
      $(".avatar").click(function(){
        $("#myDropdown").toggle();
      });
      $(".name").text(data.firstname + " " + data.lastname);
      $(".email").text(data.email);
 }).fail(function(){
        alert("An error has occurred, cannot fetch profile data");
    });
});
