function branchOneAlgorithm() {

	if (document.getElementById("trueOne").checked == true) {
        document.getElementById("branchOne").style.display = "none";
        document.getElementById("treeTwoOne").style.display = "block";
	} 
	
	else if (document.getElementById("falseOne").checked == true) {
        document.getElementById("branchOne").style.display = "none";
        document.getElementById("treeTwoTwo").style.display = "block";
				}
}