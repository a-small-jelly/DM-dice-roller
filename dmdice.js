// dice

const d4 = 4;
const d6 = 6;
const d8 = 8;
const d10 = 10;
const d12 = 12;
const d20 = 20;
const d100 = 100;





// functions



	// die roller

function rollDice(die) {
	const roll = 1 + Math.floor(Math.random()*die);
	const mod = document.getElementById("perceptionMod").value;
	const prof = document.getElementById("profBonus").value;
	document.getElementById("dieRoll1").innerHTML = roll;
	document.getElementById("prof").innerHTML = prof;
	document.getElementById("perMod").innerHTML = mod;
	document.getElementById("total").innerHTML = +roll + +mod + +prof;
	return false; // 

}












