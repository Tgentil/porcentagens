function calculateCase1() {
	var percentage = parseFloat(document.getElementById("case1-percentage").value);
	var number = parseFloat(document.getElementById("case1-number").value);
	var result = (percentage / 100) * number;
	document.getElementById("case1-result").innerText = "Resultado: " + result;
}

function calculateCase2() {
	var number1 = parseFloat(document.getElementById("case2-number1").value);
	var number2 = parseFloat(document.getElementById("case2-number2").value);
	var result = (number1 / number2) * 100;
	document.getElementById("case2-result").innerText = "Resultado: " + result + "%";
}

function calculateCase3() {
	var number1 = parseFloat(document.getElementById("case3-number1").value);
	var number2 = parseFloat(document.getElementById("case3-number2").value);
	var increase = number2 - number1;
	var percentage = (increase / number1) * 100;
	document.getElementById("case3-result").innerText = "Resultado: " + percentage + "%";
}

function calculateCase4() {
	var number1 = parseFloat(document.getElementById("case4-number1").value);
	var number2 = parseFloat(document.getElementById("case4-number2").value);
	var decrease = number1 - number2;
	var percentage = (decrease / number1) * 100;
	document.getElementById("case4-result").innerText = "Resultado: " + percentage + "%";
}

// Não consegui replicar os resultados

// function calculateCase5() {
// 	var number1 = parseFloat(document.getElementById("case5-number1").value);
// 	var number2 = parseFloat(document.getElementById("case5-number2").value);
// 	var percentage = (number1 / number2) * 100;
// 	document.getElementById("case5-result").innerText = "Resultado: " + percentage + "%";
// }

function calculateCase6() {
	var number1 = parseFloat(document.getElementById("case6-number1").value);
	var percentage = parseFloat(document.getElementById("case6-percentage").value);
	var increase = (percentage / 100) * number1;
	var result = number1 + increase;
	document.getElementById("case6-result").innerText = "Resultado: " + result;
}

function calculateCase7() {
	var number1 = parseFloat(document.getElementById("case7-number1").value);
	var percentage = parseFloat(document.getElementById("case7-percentage").value);
	var decrease = (percentage / 100) * number1;
	var result = number1 - decrease;
	document.getElementById("case7-result").innerText = "Resultado: " + result;
}

function calculateCase8() {
	var percentage = parseFloat(document.getElementById("case8-percentage").value);
	var number2 = parseFloat(document.getElementById("case8-number2").value);
	var number1 = (number2 * 100) / (100 + percentage);
	document.getElementById("case8-result").innerText = "Resultado: " + number1;
}

function calculateCase9() {
	var percentage = parseFloat(document.getElementById("case9-percentage").value);
	var number2 = parseFloat(document.getElementById("case9-number2").value);
	var number1 = (number2 * 100) / (100 - percentage);
	document.getElementById("case9-result").innerText = "Resultado: " + number1;
}
