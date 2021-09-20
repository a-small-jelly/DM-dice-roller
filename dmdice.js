// NEXT: save for server session

// CURRENTLY: working on roll history


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


function rollPlain(die) {

	const roll = 1 + Math.floor(Math.random()*die);
	document.getElementById("rollOne").innerHTML = roll;
	document.getElementById("rollHistory").insertAdjacentHTML('afterbegin', "d20: " + roll + "<br>" )
}


function rollDice(die) {

		// roll the die

	const roll = 1 + Math.floor(Math.random()*die);

		// get which pc this is 

	const thisButton = event.srcElement.id;
	const i = thisButton.split("-")[1];
	console.log(thisButton); // just checking lol will delete
	console.log(i);
	const name = document.getElementById("pcName-" + i).value;
	console.log(name);

		// check for checkboxes (ik it is redundant it's just for me)

	const ckProf = document.getElementById("applyProf-" + i).checked;
	const ckPer = document.getElementById("applyPer-" + i).checked;

		// get mods etc and add everything

	const mod = (ckPer == true) ? document.getElementById("perceptionMod-" + i).value : 0;
	const profB = (ckProf == true) ? document.getElementById("profBonus-" + i).value : 0;

 

		// results

	document.getElementById("dieRoll-" + i).innerHTML = roll + " +";
	document.getElementById("perMod-" + i).innerHTML = mod + " +";
	document.getElementById("prof-" + i).innerHTML = profB + " =";
	document.getElementById("total-" + i).innerHTML = +roll + +mod + +profB;
	document.getElementById("rollHistory").insertAdjacentHTML('afterbegin', name + ": " + roll + "<br>" )

		// crit

	if (roll == "1") {
	document.getElementById("message-" + i).innerHTML = "critical miss";
		} else if (roll == "20") {
	document.getElementById("message-" + i).innerHTML = "critical hit";
		} else {
	document.getElementById("message-" + i).innerHTML = null;
		}
	return false;

}
 



function removePC() {
	const thisButton = event.srcElement.id;
	const k = thisButton.split("-")[1];
	let deadPC = document.getElementById("pc-" + k);
	deadPC.remove();
	return false;

}





function rollAll(die) {

	const rollButtons = document.querySelectorAll('[id^="roll-"]');
	const count = rollButtons.length;
	const arrPCs = Array.from(rollButtons);
	arrPCs.splice(0,1);

	// for checking
	console.log(rollButtons);
	console.log(count);

	arrPCs.forEach((button) => {
		button.click();
	})

}




window.onload = addPC;


