var name
var age
var country
var horsepower
var result

function myFunction() {
	var name = document.forms["your_name_form"]["your_name"].value;
	var age = document.forms["input_fields_form"]["your_age"].value;
	var country = document.forms["input_fields_select_form"]["list"].value;
	var horsepower = document.forms["input_fields_horsepower_form"]["horsepower"].value;
	
	// console.log(name, age, country, horsepower);

	switch (country) {
		case "Austria":
			result = Number(horsepower) * 120/Number(age) + 50;
		break;
		case "Hungary":
			result = Number(horsepower) * 120/Number(age) + 100;
		break;
		case "Greece":
			result = Number(horsepower) * 120/(Number(age)+3) + 50;
		break;
		}
	console.log(result);

		document.getElementById("Insurance_text").textContent = name + ', your insurance costs ' + result + ' €.';
	}

