let showNew = (n) => {
    document.getElementById("new" + n).style.display = "flex"
}
let closeNew = () => {
    for(let i = 1; i < 4; i++){
      document.getElementById("new" + String(i)).style.display = "none"
    }
}
for(let i=1; i<4; i++) {
    document.getElementById('button' + String(i)).onclick = function(){ 
        closeNew()
        showNew(String(i)) 
    }
}