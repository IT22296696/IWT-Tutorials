function enablebtn(){
	if(document.getElementById("cb").checked){
		document.getElementById("sbtn").disabled = false;
	}
	else{
		document.getElementById("sbtn").disabled = true;
	}
}

function checkPassword(){
	if(document.getElementById("pwd1") != document.getElementById("pwd")){
		alert("Password Mismatch!!!!!");
		return false;
	}
	
	else{
		alert("Success!!!");
		return true;
	}
}