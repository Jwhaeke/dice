//Array of img urls

var sides = [
	"https://game-icons.net/icons/delapouite/originals/svg/dice-six-faces-one.svg",
	"https://game-icons.net/icons/delapouite/originals/svg/dice-six-faces-two.svg",
	"https://game-icons.net/icons/delapouite/originals/svg/dice-six-faces-three.svg",
	"https://game-icons.net/icons/delapouite/originals/svg/dice-six-faces-four.svg",
	"https://game-icons.net/icons/delapouite/originals/svg/dice-six-faces-five.svg",
	"https://game-icons.net/icons/delapouite/originals/svg/dice-six-faces-six.svg"
	];

/*On roll get a random numer between 0 and 1, multiply by array length
the var img will be the url as a string (taken from the array)

Finally the img src in html will be changed to the newly chosen one
*/

function roll() {

    var num = Math.floor( Math.random() * sides.length );
  
    var img = sides[ num ];

	
	document.getElementById("diceDisplay").src=img; 
}

