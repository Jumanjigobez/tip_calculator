//Function to simplify getting items
var elem = (x)=>{
	return document.querySelector(x);
}

//Variables that will be used
var bill_amount = elem(".bill_amount"),
	tip_btns = document.querySelectorAll(".tip_btn"),
	people = elem(".people"),
	total_tip = elem(".total_tip"),
	total_result = elem(".total_result"),

	bill = "",
	tip_value = "",
	n_people = "";


//bill_amount function
bill_amount.addEventListener('input',()=>{
	bill = parseFloat(bill_amount.value);

	run();
});

//tip buttons function
const tip = (x,y)=>{//The x represents the tip value, and y represents the position value for the tip_btn
	
	tip_value = parseFloat(x)/100;

	for(let i=0; i<5; i++){//On each tip button when clicked

		if(i==y){//If the clicked button is in position same as parameter y then
			tip_btns[i].style.background = "var(--Strong-cyan)";
			tip_btns[i].style.color = "var(--Very-dark-cyan)";
		}else{
			tip_btns[i].style.background = "var(--Very-dark-cyan)";
			tip_btns[i].style.color = "var(--Very-light-grayish-cyan)";
		}
		
	}
	run();

}

//No. of people function
people.addEventListener('input',()=>{
	n_people = parseFloat(people.value);
	
	run();
});

//Function that will execute the result
const run = ()=>{
	if(n_people>=1 && bill!=" " && tip_value!=" "){
		var TotalTip = (bill * tip_value)/n_people;
		var TotalAmount = ((TotalTip*n_people)+bill)/n_people;

		total_tip.innerHTML = "$" + TotalTip.toFixed(2);
		total_result.innerHTML = "$" + TotalAmount.toFixed(2);
	}else{
		total_tip.innerHTML = "$0.00";
		total_result.innerHTML = "$0.00";
	}


	
}


//Reset function
const reset =()=>{
	bill_amount.value = "";
	tip_value = "";
	people.value = "";

	bill = "";
	n_people = "";

	tip_btns.forEach(function(e){
		e.style.background = "var(--Very-dark-cyan)";
		e.style.color = "var(--Very-light-grayish-cyan)";
	});

	total_tip.innerHTML = "$0.00";
	total_result.innerHTML = "$0.00";
}



