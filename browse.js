$(function(){
$.get("https://private-anon-679a2b9640-wad20postit.apiary-mock.com/profiles", function(data){
    $("#divSquare1").attr("src", data.avatar)
}}));




  function change(_this)
{
    if (_this.value=="Follow"){
    _this.value = "Followed";
    _this.style.backgroundColor = "Purple"
    _this.style.color = "White"
    }
    else {
    _this.value = "Follow";
    _this.style.backgroundColor = "White"
    _this.style.color = "Purple"
    }
}