class Dice {
    constructor(id) {
        this.id = id;
    }

        create() {
            document.write("<h2>You've created " + this.id + "!</h2>");
            document.write("<h4>Now... Let's roll!</h4>");
            document.write("<div id=" + this.id + "></div><hr>");
        }

        roll() {
            var rolled = Math.floor(Math.random() * 7);
            var input = "<h3>You have rolled a " + rolled + "!</h3>";
            document.getElementById(this.id).innerHTML=input; 
        }    
}


function createSomeDice(){

    var number_element = document.getElementById('many');
    var number = number_element.value;
    name = "";
    vars = [];

    for (let d = 0; d < number; d++) {
        name = "die" + (d + 1);
        vars.push(name);
        vars[d] = new Dice(name);
        vars[d].create(); 
        vars[d].roll(); 
    }
}
    





