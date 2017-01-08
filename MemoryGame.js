//define some variables- global

var numChoosenCards=0;
var one;
var two;
var hit=0;
var cards = document.getElementsByClassName("card");
var back = "url(../MemoryGame/images/color.jpg)";
var gamePaused=false; // le jeu n'est pas en pause 
var imgArray=['images/1.jpg','images/1.jpg','images/2.jpg','images/2.jpg','images/3.jpg','images/3.jpg','images/4.jpg','images/4.jpg','images/5.jpg','images/5.jpg','images/6.jpg','images/6.jpg','images/7.jpg','images/7.jpg','images/8.jpg','images/8.jpg','images/9.jpg','images/9.jpg','images/10.jpg','images/10.jpg','images/11.jpg','images/11.jpg','images/12.jpg','images/12.jpg'];
//6 paires d'images, 6 photos. Mais apres j'en ai rajouté 


// pour randomiser mes images.
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
shuffle(imgArray);

function clicks(e){
	if (!gamePaused && e.target.getAttribute("guessed")!=("true")){ // fonctionne que quand le jeu n'est pas en pause
	e.target.style.backgroundImage = "url(" + imgArray[e.target.id] +" )"; 		// we change the source from the picture to the element in the imageArray

	if(numChoosenCards ==0){
		one = e.target
		//now we have chooses 1 image. 
		numChoosenCards=1;
		console.log(one);
	}
	else{
		two =e.target;
		numChoosenCards=2;
		console.log(two);
		control(); // je la lance que quand jai clique sur la deuxieme carte. 

		//the seconf click will give us the second image choosen by the player 
	}
}
}
function card(){

	for(var i =0; i<imgArray.length;i++){
		cards[i].addEventListener("click",clicks);
		cards[i].id = i;
	}

	// for(var i =0; i<imgArray.length;i++){
	// 	cards[i].style.backgroundImage = back;
	// }
}
function control(){
	if (!gamePaused){ //ne va etre que si le jeu n'est pas en pause 

	// We check if the two choosen images are the same 
	// if one and two are the same we have a pair 

	if(one.style.backgroundImage==two.style.backgroundImage){
		hit++;
		numChoosenCards=0;
		console.log(hit);
		one.setAttribute("guessed","true");
		two.setAttribute("guessed","true");
	}


	else if(one.style.backgroundImage !==two.style.backgroundImage){
		console.log("in");
		gamePaused=true; //là je mets en pause avant que ce qui se passe à l'interieur se passe 
	setTimeout(function(){
		console.log("in time out");
	one.style.backgroundImage = back; // ca remet le background image de tissu
	two.style.backgroundImage = back; // ca remet le background image de tissu 
	numChoosenCards=0;
	gamePaused=false; // on a observe donc ça repart 
	console.log(gamePaused);

	},500);	//if we dont have a match we show the back card. 
	
	}
	if (hit==imgArray.length/2){
		// if we have found every pair, we are the best so we won. 
	window.alert("You win !");
	}
	// one=0;
	// two=0;
}
}
card();

// function modalOn () {
// 	$('#myModal').modal('show');
// }

 

