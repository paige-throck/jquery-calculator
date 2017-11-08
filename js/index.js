$("#clear").click(function(){
$("#screen").empty();
});

let screen = [];

  let one = $ ("#one").text();
  $("#one").click(function(){
    screen.push(one);
    $("#screen").text(screen.join(''));
  });

let two = $ ("#two").text();
$("#two").click(function(){
  screen.push(two);
  $("#screen").text(screen.join(''));
});

let three = $ ("#three").text();
$("#three").click(function(){
  screen.push(three);
  $("#screen").text(screen.join(''))
});

let four = $ ("#four").text();
$("#four").click(function(){
  screen.push(four);
  $("#screen").text(screen.join(''))
});

let five = $ ("#five").text();
$("#five").click(function(){
  screen.push(five);
  $("#screen").text(screen.join(''))
});

let six = $ ("#six").text();
$("#six").click(function(){
  screen.push(six);
  $("#screen").text(screen.join(''))
});

let seven = $ ("#seven").text();
$("#seven").click(function(){
  screen.push(seven);
  $("#screen").text(screen.join(''))
});

let eight = $ ("#eight").text();
$("#eight").click(function(){
  screen.push(eight);
  $("#screen").text(screen.join(''))
});

let nine = $ ("#nine").text();
$("#nine").click(function(){
  screen.push(nine);
  $("#screen").text(screen.join(''))
});

let zero = $ ("#zero").text();
$("#zero").click(function(){
  screen.push(zero);
  $("#screen").text(screen.join(''))
});

let divide = $ ("#divide").text();
$("#divide").click(function(){
  screen.push(divide);
  $("#screen").text(screen.join(''))
});

let multiply = $ ("#multiply").text();
$("#multiply").click(function(){
  screen.push(multiply);
  $("#screen").text(screen.join(''))
});

let minus = $ ("#minus").text();
$("#minus").click(function(){
  screen.push(minus);
  $("#screen").text(screen.join(''))
});

let plus = $ ("#plus").text();
$("#plus").click(function(){
  screen.push(plus);
  $("#screen").text(screen.join(''))
});



// let clear = $("#clear");
// $("#clear").click(function(){
// $("#screen").empty();

// let equals = $ ("#equals").text();
// $("#equals").click(function(){
//   screen.eval();
// });
