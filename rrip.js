"use script"		
		function zkil() {
		let a = document.getElementById("a").value;
		let x1 = document.getElementById("start").value;
		let x2 = document.getElementById("end").value;
		let n = document.getElementById("n").value;
		let num1 = Number(a);
		let num2 = Number(x1);
		let num3 = Number(x2);
		let num4 = Number(n);
		let y1;
		for( num2 ; num2<=num3 ; num2=num2+num4) {	 	
		y1 = (Math.log(Math.sqrt(num2))**2)/(num1*Math.sqrt(num2));
		console.log(y1); 
		document.getElementById("y").innerHTML = y1; } 
		}
		