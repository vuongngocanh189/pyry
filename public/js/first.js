    var number1, number2, feedback;
	var correct_answers = [];
	var input_array = [];
	var x;
	var level, cal;
$(document).ready(function(){
	level = $(".level").text();
	cal = $(".cal").text();

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
		var number1 = Math.floor(Math.random() * x) + 1;
		var number2 = Math.floor(Math.random() * x) + 1;
		if (cal == "plus"){
			correct_answers.push(number1+number2);
		}
		else if (cal == "minus"){
			correct_answers.push(number1-number2);
		}
		else if (cal == "times") {
			correct_answers.push(number1 * number2);
		}
		else {
			//redirect to homepage
		}
	//fill in values
	$(this).prepend("<span class='rand-number'>" + number1 + "</span>" + 
			"<img src='../img/" + cal + ".png' width='50px'>" +
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
	    	feedback = "<i class='fas fa-check'></i>";
	    	$(".result-"+i).removeClass("alert-danger").addClass("alert-success");
	    } else {
	    	feedback = "<i class='fas fa-cross'></i>";
	    	$(".result-"+i).addClass("alert-danger");
	    }   
	    $(".result-"+i).html(feedback);
	})
};