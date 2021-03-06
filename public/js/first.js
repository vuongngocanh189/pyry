    var number1, number2, feedback;
	var correct_answers = [];
	var input_array = [];
	var x, z;
	var level, cal;
$(document).ready(function(){
	level = $(".level").val().toLowerCase();
	cal = $(".cal").text().toLowerCase();
	//append .active to the submenu	
	$(".tab").each(function (i){
		if($(".tab"+i).text().toLowerCase() == level || $(".tab"+i).text().toLowerCase() == cal) {
			$(this).toggleClass("active");
		}
	});
	//take values from url
	if (level == "easy"){
		x = 9;
	}
	else if (level == "medium"){
		x = 99;
	}
	else if (level == "hard") {
		x = 999;
	}
	//Fill in rows with numbers and calculate results, store results in an array and wait to compare with the input
	init(x);
	//click CHECK
	$("#check").click(function(){
		$(".alert").removeClass("hide");
		$(".alert").html("");
		input_array = [];	
		//Check input values
		$(".input").each(function(){
			input_result = $(this).val();
			input_array.push(input_result);
		});
		check(correct_answers, input_array);
	});
	//click NEW
	$("#new").click(function(){
		//clear early answers and questions	
		input_array = [];
		correct_answers = [];
		//generate new calculations
		init(x);
	});
});
//initialize values
function init(x){
	$("li").each(function (i) {
		//clear fields
		$(this).html('');

		//create random values and store results		
		number1 = Math.floor(Math.random() * x) + 1;
		number2 = Math.floor(Math.random() * x) + 1;
		if (cal == "plus"){
			correct_answers.push(number1+number2);
		}
		else if (cal == "minus"){
			if(number2 > number1){
				z = number1;
				number1 = number2;
				number2 = z;
				correct_answers.push(number1-number2);
			}else{
				correct_answers.push(number1-number2);
			}
		}
		else if (cal == "multiply") {
			correct_answers.push(number1 * number2);
		}		
		else if (cal == "division") {
			z = number1 * number2;
			correct_answers.push(z / number2);
			number1 = z;
		}
		else {
			//redirect to homepage
		}
	//fill in values
	$(this).prepend("<span class='rand-number'>" + number1 + "</span>" + 
			"<img src='../img/" + cal + ".png'>" +
			"<span class='rand-number'>" + number2 + "</span> " +
			"<img src='../img/equal.png' width='50px'> " +
			"<input type='number' class='input'>" +
			"<span class='hide result-" + i + " alert'></span>");
	});
};

//check input and results
function check(x,y){
	feedback = "";
	$.each(x, function (i) {
	    if(y[i] == x[i]){
	    	feedback = "<i class='far fa-smile'></i>";
	    	$(".result-"+i).removeClass("alert-danger").addClass("alert-success");
	    } else {
	    	feedback = "<i class='far fa-frown'></i>";
	    	$(".result-"+i).addClass("alert-danger");
	    }   
	    $(".result-"+i).html(feedback);
	})
};