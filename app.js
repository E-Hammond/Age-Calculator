
	function calculate() {
	
		var number = document.getElementById("number").value;
		
		if (number == "" || number == 0) {
			
			window.alert("Please enter your age!");
			return;
		}
		
		var date = new Date().getFullYear();
		
		var birthyear = date - number;
		
		document.getElementById("year").style.display = "block";
		document.getElementById("year").innerHTML = "Your birth year is " + birthyear;
		
	}




	

	document.getElementById("year").style.display = "none";
	
	document.getElementById("button-number").onclick = function() {  calculate();  };
