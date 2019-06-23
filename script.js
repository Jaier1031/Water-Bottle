$("button").click(function(){
    var inputTag = $("input");
    var pTag = $("p");
    var year = $("year").val();
    var bottles = $("bottles").val();
    var future = $("future").val();
   
    console.log(parseInt(bottles) * parseInt(future));
    var yearNumber = parseInt(future) * 365 ;
     var Bottles = parseInt(bottles) * parseInt(yearNumber);
     var futureYear = parseInt(year) + parseInt(future);
    var Message = "You will drink " + Bottles + " bottles of water by the year "+ futureYear;
    
    pTag.text(Message);
});