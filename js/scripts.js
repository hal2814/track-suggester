
/*select (function(var1p,var2ct,val1,val2,output){
  if((var1p===var2) && (var2ct===val2)){
    $("#output").show();
    $(".nameResult").append(name);
    $(output).show();
  }
  return 0;
});
*/
$(document).ready(function() {

  $("form#track").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var personality = $("#personality").val();
    var codeType = $("#codeType").val();
    var place = $("#place").val();



    select(personality,codeType,"Creative","Web design", "#cssDesign");

    if((personality==="Creative") && (codeType==="Web design"))
    {
      $("#output").show();
      $(".nameResult").append(name);
      $("#cssDesign").show();
    }
    if((personality==="Tinkerer") && (codeType==="Mobile applications"))
    {
      $("#output").show();
      $(".nameResult").append(name);
      $("#javaAnd").show();
    }
    if((personality==="Practical") && (codeType==="Software"))
    {
      $("#output").show();
      $(".nameResult").append(name);
      $("#cSharp").show();
    }
    if((personality==="Creative") && (codeType==="Software"))
    {
      $("#output").show();
      $(".nameResult").append(name);
      $("#ruby").show();
    }
    if((personality==="Tinkerer") && (codeType==="Web design"))
    {
      $("#output").show();
      $(".nameResult").append(name);
      $("#php").show();
    }
    
    if((place==="Seattle"))
    {
      $("#seattle").show();
    }
    if((place==="Portland"))
    {
      $("#portland").show();
    }
    if((place==="Elsewhere"))
    {
      if(personality==="Creative")
      {
        $("#portland").show();
      }else{
        $("#seattle").show();
      }
    }
  });
});
