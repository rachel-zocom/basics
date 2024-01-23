const button = document.getElementById("button");

button.addEventListener('click', btnEvent);

function btnEvent(){
	console.log("You clicked the button!");
}



button.addEventListener("mouseover", btnEvent2);

function btnEvent2() {
  console.log("You moused over the button!");
}



