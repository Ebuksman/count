let firstcount = document.getElementById("counter") 
let count = 0
function Add(){
    count = count + 1;
    if (count < 30){
        return (firstcount.innerText = count)
    }
     else firstcount.innerText = ("You have exhausted your $$$Money")    
}