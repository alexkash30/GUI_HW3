// File: addp-content.js
// GUI Assignment: Style a Site with External CSS
// Alex Kashian, UMass Lowell Computer Science,
// akashian@student.uml.edu
// Copyright (c) 2023 by Alex Kashian. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by AK on November 14th, 2023 at 7:18 PM
function myFunction() {

	var table = document.getElementById("myTable");
	table.innerHTML = "";

	let minC = document.getElementById("minCol").value;
	let maxC = document.getElementById("maxCol").value;
	let minR = document.getElementById("minRow").value;
	let maxR = document.getElementById("maxRow").value;

	console.log(minC);
	console.log(maxC);
	console.log(minR);
	console.log(maxR);

	let errorMessage = document.getElementById("errorMessage");

	if (minC == "" || maxC == "" || minR == "" || maxR == "")
	{
		errorMessage.textContent = "Missing Information In One Of The Fields!";
		errorMessage.style.color = "white";
		return;
	}else {
		errorMessage.textContent = "";
	}
	minC = Number(minC);
	maxC = Number(maxC);
	minR = Number(minR);
	maxC = Number(maxR);
	if(minC< -50 || maxC< -50 || minR< -50 || maxR< -50){
		errorMessage.textContent = "Input Out Of Range!";
		errorMessage.style.color = "white";
		return;
	}else {
		errorMessage.textContent = "";
	}
	if(minC> 50 || maxC> 50 || minR> 50 || maxR> 50){
		errorMessage.textContent = "Input Out Of Range!";
		errorMessage.style.color = "white";
		return;
	}else {
		errorMessage.textContent = "";
	}
	if(minC >= maxC || minR >= maxR){
		errorMessage.textContent = "Invalid Input! Min Column Should be Less Then Max Column And Min Row Should be Less Then Max Row.";
		errorMessage.style.color = "white";
		return;
	}else {
		errorMessage.textContent = "";
	}
	
	var row = table.insertRow(0);
	var cellI = row.insertCell(0);
	cellI.innerHTML = "  ";
  	for(let a = minC; a <= maxC; a++){
	  var cellI = row.insertCell(-1);
	   cellI.innerHTML = a;
	   cellI.classList.add("header-cell");

  	}
  
  	for(let i = minR; i <= maxR; i++){
		var row = table.insertRow(-1);
	  	var cell1 = row.insertCell(0);
	  	cell1.innerHTML = i
  
	  	for(let j = minC; j <=maxC; j++){
		  var cell1 = row.insertCell(-1);
		  cell1.innerHTML = j*i;
  
	  	}
	}

	
	
  }