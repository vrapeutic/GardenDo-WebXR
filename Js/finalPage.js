//document.getElementById("stats").innerHTML = sessionStorage.getItem('stats');
var t = document.createTextNode(sessionStorage.getItem('statsArray'));
 document.body.appendChild(t);

let playAgain = function(){
   window.open('index.html',"_self");
}