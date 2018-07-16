//Hands on project 9-2
//Levi Boenish
//11/16/17


"use strict";

function processCookie(){
	document.cookie = "username=" + document.getElementById("usernameinput").value;
}


function populateInfo(){
	if(document.cookie) {
		var uname = document.cookie;
		uname = uname.substring(uname.lastIndexOf("=") + 1);
		document.getElementById("usernameinput").value = uname;
	}
}


function handleSubmit(evt) {
	if(evt.preventDefault) {
		evt.prventDefault;
	} else {
		evt.returnValue = false;
	}
	processCookie();
	document.getElementsByTagName("form")[0].submit();

}


function createEventListener(){
	var loginForm = document.getElementById("form");
	if(loginForm.addEventListener){
		loginForm.addEventListener("submit", handleSubmit, false);
	} else if (loginForm.attachEvent){
		loginForm.attachEvent("onsubmit", handleSubmit);
	}

}

function setUpPage() {
	populateInfo();
	createEventListener();
}

if(window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if(window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}

