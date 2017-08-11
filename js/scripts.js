
select = (function(var1p,var2ct,value1,value2,output,name,lang){
  if((var1p===value1) && (var2ct===value2)){
    $("#output").show();
    $(".nameResult").append(name);
    $(output).slideToggle();
    $(".language").append(lang);
  }
});

$(document).ready(function() {

  $("form#track").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var personality = $("#personality").val();
    var codeType = $("#codeType").val();
    var place = $("#place").val();

    select(personality,codeType,"Creative","Mobile applications", ".javaAnd",name,"Java/Android");

    select(personality,codeType,"Creative","Software", ".ruby",name,"Ruby/Rails");

    select(personality,codeType,"Creative","Web design", ".cssDesign",name,"CSS/Design");

    select(personality,codeType,"Tinkerer","Mobile applications", ".javaAnd",name,"Java/Android");

    select(personality,codeType,"Tinkerer","Software", ".ruby",name,"Ruby/Rails");

    select(personality,codeType,"Tinkerer","Web design", ".php",name,"PHP/Drupal");

    select(personality,codeType,"Practical","Mobile applications", ".javaAnd",name,"Java/Android");

    select(personality,codeType,"Practical","Software", ".cSharp",name,"C#/.NET");

    select(personality,codeType,"Practical","Web design", ".php",name,"PHP/Drupal");

    if((place==="Seattle"))
    {
      $(".seattle").show();
    }
    if((place==="Portland"))
    {
      $(".portland").show();
    }
    if((place==="Elsewhere"))
    {
      if(personality==="Creative")
      {
        $(".portland").show();
      }else{
        $(".seattle").show();
      }
    }
  });
  $( "#tryAgain" ).click(function() {
    window.location.reload()
  });
});
