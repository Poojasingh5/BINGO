var btn = document.querySelector('#btn');
var dice = document.querySelector('#dice');
var playBoard = document.querySelector(".play-board");
var selectBox = document.querySelector(".select-box");
var playBoard = document.querySelector(".play-board");
var players = document.querySelector(".players");
var playarea=document.querySelector(".play-area");
const allBox = document.querySelectorAll("section span");
var resultBox = document.querySelector(".result-box");
var wonText = resultBox.querySelector(".won-text");
var replayBtn = resultBox.querySelector(".replay");
window.onload = () =>
{ //once window loaded
  for (let i = 0; i < allBox.length; i++)
   { //add onclick attribute in all available span
    allBox[i].setAttribute("onclick", "clickedBox(this)");

  }

}

function shuffle(array)
 {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}

var gfg = new Array(5);
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
shuffle(arr);
var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
shuffle(ar);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
shuffle(numbers);
//start
btn.addEventListener('click', fn)
var h = 0;
var k = 0;

function fn()
 {
  //  alert("got");
  //adding id

  selectBox.classList.add("hide"); //hide select box
  playBoard.classList.add("show");
  var table = document.getElementById("dice");
  table.innerHTML = numbers[hh];
  hh++;
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      //	console.log(gfg[i][j]);
      var table = document.getElementById("box1" + i + j);
      table.innerHTML = arr[h];
      h = (h + 1) % 25;
    }
  }
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      //	console.log(gfg[i][j]);
      var table = document.getElementById("box2" + i + j);
      table.innerHTML = ar[k];
      k = (k + 1) % 25;
    }
  }
}

//dice vala button
var hh = 0;
//dice.addEventListener('click', dicenumber)

//function dicenumber() {
//alert("got");

//}
var count = 0;
var myVar;
//var match=<i class="fas fa-times"></i>;
function clickedBox(element)
 {
  //alert(hh);
  var value=element.innerHTML;

    if (element.innerHTML == '<i class="fas fa-times"></i>')
      alert("Select the required number ");
//if(numbers[hh-1]==value)
{
// alert("true");
if (element.classList.contains("first"))
{
  if(value==numbers[hh-1] && count==0 )
  {
    players.classList.add("active");
    element.innerHTML = '<i class="fas fa-times"></i>';
    flap=1;
    count=1;

  }
  else
   {
    flap=0;
    }
}
else
{
  if(value==numbers[hh-1] && element.classList.contains("second") && count==1)
  {
    element.innerHTML = '<i class="fas fa-times"></i>';
    flap=2;
    count=0;
      players.classList.remove("active");

  }
  else{
    flap=0;
  }

}
if(flap==2)
{
  var table = document.getElementById("dice");
  table.innerHTML = numbers[hh];
  hh++;
}

}

  //winner checking

function final_result()
{
//after match won by someone then hide the playboard and show the result box after 700ms
  resultBox.classList.add("show");
    playBoard.classList.remove("show");
//1s = 1000ms
wonText.innerHTML = "Player"+flap+" won the game!";

}
  for (var i = 0; i < 5; i++)
  {
    var x1 = document.getElementById("box"+ flap + 0 + i);
    var x2 = document.getElementById("box"+ flap + 1 + i);
    var x3 = document.getElementById("box"+ flap + 2 + i);
    var x4 = document.getElementById("box"+ flap + 3 + i);
    var x5 = document.getElementById("box"+ flap + 4 + i);
    if (x1.innerHTML == '<i class="fas fa-times"></i>' && x2.innerHTML == '<i class="fas fa-times"></i>' && x3.innerHTML == '<i class="fas fa-times"></i>' && x4.innerHTML == '<i class="fas fa-times"></i>' && x5.innerHTML == '<i class="fas fa-times"></i>')
    {
      x1.style.cssText = 'font-size: 36px; color: red !important;'
      x2.style.cssText = 'font-size: 36px; color: red !important;'
      x3.style.cssText = 'font-size: 36px; color: red !important;'
      x4.style.cssText = 'font-size: 36px; color: red !important;'
      x5.style.cssText = 'font-size: 36px; color: red !important;'
      setTimeout(final_result,4000);

  }
  }

    for (var i = 0; i < 5; i++)
  {
      var x1 = document.getElementById("box" + flap + i + 0);
      var x2 = document.getElementById("box" + flap + i + 1);
      var x3 = document.getElementById("box" + flap + i + 2);
      var x4 = document.getElementById("box" + flap + i + 3);
      var x5 = document.getElementById("box" + flap + i + 4);
      if (x1.innerHTML == '<i class="fas fa-times"></i>' && x2.innerHTML == '<i class="fas fa-times"></i>' && x3.innerHTML == '<i class="fas fa-times"></i>' && x4.innerHTML == '<i class="fas fa-times"></i>' && x5.innerHTML == '<i class="fas fa-times"></i>')
      {
        x1.style.cssText = 'font-size: 36px; color: red !important;'
        x2.style.cssText = 'font-size: 36px; color: red !important;'
        x3.style.cssText = 'font-size: 36px; color: red !important;'
        x4.style.cssText = 'font-size: 36px; color: red !important;'
        x5.style.cssText = 'font-size: 36px; color: red !important;'
        setTimeout(final_result,4000);

    }
  }



    for (var i = 0; i < 5; i++)
    {
      var x1 = document.getElementById("box"+flap + 0 + 0);
      var x2 = document.getElementById("box"+flap + 1 + 1);
      var x3 = document.getElementById("box"+flap + 2 + 2);
      var x4 = document.getElementById("box"+flap + 3 + 3);
      var x5 = document.getElementById("box"+flap + 4 + 4);
      if (x1.innerHTML == '<i class="fas fa-times"></i>' && x2.innerHTML == '<i class="fas fa-times"></i>' && x3.innerHTML == '<i class="fas fa-times"></i>' && x4.innerHTML == '<i class="fas fa-times"></i>' && x5.innerHTML == '<i class="fas fa-times"></i>')
       {
         x1.style.cssText = 'font-size: 36px; color: red !important;'
         x2.style.cssText = 'font-size: 36px; color: red !important;'
         x3.style.cssText = 'font-size: 36px; color: red !important;'
         x4.style.cssText = 'font-size: 36px; color: red !important;'
         x5.style.cssText = 'font-size: 36px; color: red !important;'
         setTimeout(final_result,4000);


      }
    }
    for (var i = 0; i < 5; i++) {
      var x1 = document.getElementById("box"+flap + 0 + 4);
      var x2 = document.getElementById("box"+flap + 1 + 3);
      var x3 = document.getElementById("box"+flap + 2 + 2);
      var x4 = document.getElementById("box"+flap + 3 + 1);
      var x5 = document.getElementById("box"+flap + 4 + 0);
      if (x1.innerHTML == '<i class="fas fa-times"></i>' && x2.innerHTML == '<i class="fas fa-times"></i>' && x3.innerHTML == '<i class="fas fa-times"></i>' && x4.innerHTML == '<i class="fas fa-times"></i>' && x5.innerHTML == '<i class="fas fa-times"></i>')
       {
        {
          x1.style.cssText = 'font-size: 36px; color: red !important;'
          x2.style.cssText = 'font-size: 36px; color: red !important;'
          x3.style.cssText = 'font-size: 36px; color: red !important;'
          x4.style.cssText = 'font-size: 36px; color: red !important;'
          x5.style.cssText = 'font-size: 36px; color: red !important;'
          setTimeout(final_result,4000);


        }
      }
    }


}//function endd;

//result fun
replayBtn.onclick = ()=>
{
  //alert("clicked");
    window.location.reload(); //reload the current page on replay button click
}
