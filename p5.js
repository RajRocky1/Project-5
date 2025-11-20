let counter=document.getElementById("counter");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset");
let inc = document.getElementById("inc");

let count=0;

function updateCounter() {
    counter.textContent = count;

  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  }
  else{
        counter.style.color = "black";
  }
}

function decrease(){
  count--;
  updateCounter();
  
}

function Reset() {
  count=0;
    updateCounter();

}

function increment() {
  count++;
    updateCounter();


}
dec.addEventListener("click",decrease);
reset.addEventListener("click", Reset);
inc.addEventListener("click", increment);
