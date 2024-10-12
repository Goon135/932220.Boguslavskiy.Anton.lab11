let count = 0
let showNew = (n) => {
  count++
  document.getElementById("new" + n).style.display = "block"
}
let closeNew = (n) => {
  count--
  if(count == 0){
    document.getElementById("new" + n).style.display = "none"
  }
}
for(let i=1; i<4; i++) {
  document.getElementById('myButton' + String(i)).onclick = function(){ showNew(String(i)) }
  document.getElementById('content' + String(i)).onclick = function(){ showNew(String(i)) }
  document.getElementById('new' + String(i)).onclick = function(){ closeNew(String(i)) }
}
