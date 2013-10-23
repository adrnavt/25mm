$(document).ready(function() {
	
function endless(slide1) {
  $("#slide1").animate({ backgroundPosition: "-100%" }, 25000, "linear", function(){
    $("#slide1").animate({ backgroundPosition: "-200%" }, 25000, "linear");
    endless("#slide1");
  });
}

endless($("#slide1"));
	
function endless2(slide1) {
  $("#slide2").animate({ backgroundPosition: "100%" }, 25000, "linear", function(){
    $("#slide2").animate({ backgroundPosition: "200%" }, 25000, "linear");
    endless2("#slide2");
  });
}

endless2($("#slide2"));
});

