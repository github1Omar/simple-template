const countr = setInterval(updated,500)
let numbre = 0;
function updated(){
    var show = document.getElementById('counter');
      show.innerText = `more then ${++numbre}  years of exicten`; 
    
     if(numbre == 10){
        clearInterval(countr)
     }
}
setTimeout(updated,2000)




