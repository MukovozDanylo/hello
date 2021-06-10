"use strict"  
			let vopros = prompt('Для вибору підрахунку умови напешіть 1. Для вибору циклу з лычильником циклу напишіть 2.Для вибору циклу з передумовою напишіть 3. Для вибору циклу з післяумовою напишіть 4',21);
			switch (true) {
			case (vopros == 1) :
			let x = Number(prompt('Введіть х'));
			let y = Number(prompt('Введіть у'));
			let z = Number(prompt('Введіть z'));
			let A;
			let B;
			if (x<z) {
			A = 1+2*Math.sin(x+z)**2;
			console.log('A=',A); }
			else {
			B = 1+ z/12+Math.exp(-x);
			console.log('B=',B); }
			break;
			case (vopros == 2) :
			let a1 = Number(prompt('Введіть а'));
			let x1 = Number(prompt(' Введіть x1'));
			let x2 = Number(prompt('Введіть x2'));
			let n = Number(prompt('Введіть n'));
			let y1;
			for( x1 ; x1<=x2 ; x1=x1+n) {
			y1 = (Math.log(Math.sqrt(x1))**2)/(a1*Math.sqrt(x1));
			console.log('y=',y1); }
			break;
			case (vopros == 3) :
			let a2 = Number(prompt('Введіть а'));
			let x12 = Number(prompt('Введіть x1'));
			let x22 = Number(prompt('Введіть x2'));
			let x32 = Number(prompt('Введіть x3'));
			let x42 = Number(prompt('Введіть x4'));
			let x52 = Number(prompt('Введіть x5'));
			let arr = [x12 , x22 , x32 , x42 , x52];
			let f1;
			let y2;
			f1 = 0;
			while (f1 <= x12+x22+x32+x42+x52 ) {
			let i;	
			for ( i = 0; i < arr.length; i++) {
			y2 = (Math.log(Math.sqrt(arr[i]))**2)/(a2*Math.sqrt(arr[i]));
			console.log('y=',y2); }  
			f1 = f1 + arr[i]; }
			break;
			case (vopros == 4) :
			let a3 = Number(prompt('Введіть а'));
			let x13 = Number(prompt('Введіть x1'));
			let x23 = Number(prompt('Введіть x2'));
			let x33 = Number(prompt('Введіть x3'));
			let x43 = Number(prompt('Введіть x4'));
			let x53 = Number(prompt('Введіть x5'));
			let arr1 = [x13 , x23 , x33 , x43 , x53];
			let f2;
			let y3;
			f2 = 0;
			do {
			let i;	
			for ( i = 0; i < arr1.length; i++) {
			y3 = (Math.log(Math.sqrt(arr1[i]))**2)/(a3*Math.sqrt(arr1[i]));
			console.log('y=',y3); }  
			f2 = f2 + arr1[i]; }
			while (f2 <= x13+x23+x33+x43+x53 ) ;
			break;
			default:
			alert('Напишіть цифру 1,2,3 або 4!');
			}
			
			
	