


// dice

const d4 = 4;
const d6 = 6;
const d8 = 8;
const d10 = 10;
const d12 = 12;
const d20 = 20;
const d100 = 100;



// functions



let counter = 0;


function addPC() {
	// counter
	counter++;
	// create variable that is clone of 'pc'
	let newPCs = document.getElementById('pc-').cloneNode(true);
	// remove id of clone
	newPCs.id = '';
	// display clone
	newPCs.style.display = 'block';
	// create variable that is childnodes of clone
	let newPC = newPCs.childNodes;
	console.log(newPC);
	for (let l = 0; l < newPC.length; l++) {
		let theName = newPC[l].id
		if (theName)
				// change id of childnotes
				newPC[l].id = theName + counter;
				// change id of pc div
				newPCs.id = 'pc-' + counter;
	}
	let insertHere = document.getElementById('additionalSpace');
	insertHere.parentNode.insertBefore(newPCs, insertHere);
}



function rollDice(die) {


// NOTE: add in a thing for natural failures/crits

		// roll the die
	const roll = 1 + Math.floor(Math.random()*die);

		// get which pc this is 
	const thisButton = event.srcElement.id;
	const i = thisButton.slice(-1);
	console.log(thisButton);
	console.log(i);


		// check for checkboxes (ik it is redundant it's just for me)

	const ckProf = document.getElementById("applyProf-" + i).checked;
	const ckPer = document.getElementById("applyPer-" + i).checked;

		// get mods etc and add everything

	const mod = (ckPer == true) ? document.getElementById("perceptionMod-" + i).value : 0;
	const profB = (ckProf == true) ? document.getElementById("profBonus-" + i).value : 0;

		// results

	document.getElementById("dieRoll-" + i).innerHTML = roll;
	document.getElementById("profBonus-" + i).innerHTML = profB;
	document.getElementById("perMod-" + i).innerHTML = mod;
	document.getElementById("total-" + i).innerHTML = +roll + +mod + +profB

		// crit
	if (roll == "1") {
	document.getElementById("message-" + i).innerHTML = "critical miss";
		} else if (roll == "20") {
	document.getElementById("message-" + i).innerHTML = "critical hit";
		} else {
	document.getElementById("message-" + i).innerHTML = null;
		}


	;
	return false; // 

}


function removePC() {
	const thisButton = event.srcElement.id;
	const k = thisButton.split("-")[1];
	let deadPC = document.getElementById("pc-" + k);
	deadPC.remove();
	return false;

}









window.onload = addPC;


