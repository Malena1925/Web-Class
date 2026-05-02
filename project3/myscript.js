$(document).ready(function(){
  $("#hide").click(function(){
    $(".pietip").hide();
  });
  $("#show").click(function(){
    $(".pietip").show();
  });
});

$(document).ready(function(){
  $("#hidecc").click(function(){
    $(".cctip").hide();
  });
  $("#showcc").click(function(){
    $(".cctip").show();
  });
});

$(document).ready(function(){
  $("#hidebcc").click(function(){
    $(".cctip").hide();
  });
  $("#showbcc").click(function(){
    $(".cctip").show();
  });
});

$(document).ready(function(){
  $("#hidealmond").click(function(){
    $(".almond").hide();
  });
  $("#showalmond").click(function(){
    $(".almond").show();
  });
});

$(document).ready(function(){
  $("#hideicing").click(function(){
    $(".icing").hide();
  });
  $("#showicing").click(function(){
    $(".icing").show();
  });
});

$(document).ready(function(){
  $("#hidenote").click(function(){
    $(".berrytip").hide();
  });
  $("#shownote").click(function(){
    $(".berrytip").show();
  });
});

$(document).ready(function(){
  $("#hidepeach").click(function(){
    $(".peachtip").hide();
  });
  $("#showpeach").click(function(){
    $(".peachtip").show();
  });
});

$(document).ready(function(){
  $("#hidebanana").click(function(){
    $(".bananatip").hide();
  });
  $("#showbanana").click(function(){
    $(".bananatip").show();
  });
});

$(document).ready(function(){
  $("#hidepear").click(function(){
    $(".peartip").hide();
  });
  $("#showpear").click(function(){
    $(".peartip").show();
  });
});

$(document).ready(function(){
  $("#hidehands").click(function(){
    $(".handsfact").hide();
  });
  $("#showhands").click(function(){
    $(".handsfact").show();
  });
});

const burger = document.querySelector(".burger");

const navigation = document.querySelector(".navigation");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navigation.classList.toggle("active");
});