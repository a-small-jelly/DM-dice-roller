


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
	let newPCs = document.getElementById('pc').cloneNode(true);
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
				newPCs.id = 'pc' + counter;
	}
	let insertHere = document.getElementById('additional-space');
	insertHere.parentNode.insertBefore(newPCs, insertHere);
}


// need to stop PCs being added after 9 lol
// and also fix id numbers


function rollDice(die) {

		// roll the die
	const roll = 1 + Math.floor(Math.random()*die);

		// get which pc this is 
	const thisButton = event.srcElement.id;
	const i = thisButton.slice(-1);
	console.log(thisButton);
	console.log(i);

		// get mods etc and add everything

	const mod = document.getElementById("perceptionMod" + i).value;
	const prof = document.getElementById("profBonus" + i).value;
	console.log(prof);
	document.getElementById("dieRoll" + i).innerHTML = roll;
	document.getElementById("prof" + i).innerHTML = prof;
	document.getElementById("perMod" + i).innerHTML = mod;
	document.getElementById("total" + i).innerHTML = +roll + +mod + +prof;
	return false; // 

}


function removePC() {
	const thisButton = event.srcElement.id;
	const k = thisButton.slice(-1);
	let deadPC = document.getElementById("pc" + k);
	console.log(deadPC);
	deadPC.remove();
}




window.onload = addPC;


