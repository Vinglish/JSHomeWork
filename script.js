/*
for(var i = 0; i<100; i++){
	if(i%3==0 && i%2!==0){
		
		document.write(i + "<br />");
	
	}

}*/

var num = Number(prompt("Input your number"));
var fact= 1;
for(var i = 1; i<=num; i++){
	fact*=i;

}
document.write(fact);