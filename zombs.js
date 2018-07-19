var o = [0,1];
var y = [2,3];
var r = [4,5,6,7,8];
var a = 0;
var b = 0;
var c = 0;

var tests = 1000;

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkThree() {
	let arr = o.concat(y).concat(r);
	let used = [];
	let z = [];
	for (i=0;i<3;i++) {
		let result = randInt(0,arr.length-1);
		if (used.includes(result)) {
			for (j=0;used.includes(result);j++) {
				result = randInt(0,arr.length-1);
			}
		}
		if (o.includes(result)) {
			used.push(result);
			z[i] = 'o';
			continue;
		}
		if (y.includes(result)) {
			used.push(result);
			z[i] = 'y';
			continue;
		}
		if (r.includes(result)) {
			used.push(result);
			z[i] = 'r';
			continue;
		}
	}
	return z;
}

function checkA(a) { //1 in yellow, 1 in orange, 1 in any
	let z = a.slice();
	if (z.includes("y")) {
		if (z.includes("o")) {
			return true; //true, one is in yellow and one is in orange
		}
		return false;
	}
	return false;
}
function checkB(a) { // at least 1 in yellow or orange but not both, rest in red
	let z = a.slice();
	if (z.includes("y")) {
		if (z.includes("o")) {
			return false; //false, one is in yellow and one is in orange
		}
		z.splice(z.indexOf("y"), 1);
		if (z.includes("y")) {
			return true; //true, two are in yellow
		}
		return true;
	}
	else if (z.includes("o")) {
		z = a.slice();
		z.splice(z.indexOf("o"), 1);
		if (z.includes("o")) {
			return true; //true, two are in orange
		}
		return true;
	}
}
function checkC(a) { //3 in red
	let z = a.slice();
	if (z.includes("y")) {
		return false;
	}
	if (z.includes("o")) {
		return false;
	}
	return true; //true, none are in yellow or orange
}

for (n=0;n<tests;n++) {
	let locations = checkThree();
	if (checkA(locations)) {
		a+=1;
	}
	else if (checkB(locations)) {
		b+=1;
	}
	else if (checkC(locations)) {
		c+=1;
	}
	else {
		console.log(locations);
	}
}
console.log("ran "+tests+" tests.");
console.log("condition i: "+a/tests*100+"%");
console.log("condition ii: "+b/tests*100+"%");
console.log("condition iii: "+c/tests*100+"%");
console.log("total: "+(a+b+c)/tests*100+"%");



/* CONDITIONS
i. 1 zombie spawns in the orange box, 1 zombie spawns in the yellow box and 1 more spawns at any of the boxes.
ii. at least 1 zombie spawns in either the orange or yellow box but not in both, the remaining spawns in the red box
iii. all three zombies spawn in the red box
*/
