

// let elem1= document.querySelector(".layer3__elem1");
// let elem2= document.querySelector(".layer3__elem2");
// let elem3= document.querySelector(".layer3__elem3");

let elem= document.querySelectorAll(".layer3__input");

let result1= document.querySelector(".layer3__result1");
let result2= document.querySelector(".layer3__result2");



	let func= ()=>{
	let percent= elem[1].value*elem[0].value/100
	result1.innerHTML= percent;

	let month= elem[2].value;
	let coefficient;

	switch (month){
		case "3":
			coefficient= 1.21;
		break;
		case "6":
			coefficient= 1.35;
		break;
		case "9":
			coefficient= 1.48;
		break;
		case "12":
			coefficient= 1.58;
		break;
		default:
			result2.innerHTML= "error";
	}

    let cost= Math.ceil((elem[1].value - percent)*coefficient/month);
	result2.innerHTML= cost;
};


for (i=0; i<elem.length; i++){
	elem[i].addEventListener("change", func);
}







