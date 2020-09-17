function hamburgerDropdown(){
	document.getElementById("hamburgerDropdown").style.display="block";
}


function contactMobileDropdown(){
	document.getElementById("contactMobileDropdown").style.display="block";
}

function contactDefaultDropdown(){
	document.getElementById("contactDefaultDropdown").style.display="block";
	setTimeout(resetContactDefaultDropdown, 3000);
}

function resetContactDefaultDropdown() {
	document.getElementById("contactDefaultDropdown").style.display="none";
}