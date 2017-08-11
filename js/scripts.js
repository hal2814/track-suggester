$(document).ready(function() {
  selectPers (function(pers){
    if((pers==="Creative"))
    {

    }
    if((pers==="Tinkerer"))
    {

    }
    if((pers==="Practical"))
    {

    }
  selectCode (function(cT){
    if((cT==="Mobile applications"))
    {

    }
    if((cT==="Software"))
    {

    }
    if((cT==="Web design"))
    {

    }
  selectPlace (function(pl){
    if((pl==="Seattle"))
    {

    }
    if((pl==="Portland"))
    {

    }
    if((pl==="Elsewhere"))
    {

    }
  });
  $("form#track").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var personality = $("#personality").val();
    var codeType = $("#codeType").val();
    var place = $("#place").val();



    $(".nameResult").append(name);
    $("#output").show();
  });
});
