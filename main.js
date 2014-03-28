//variables
var children = 5;
var partners = "Miss Cleo.";
var address = "45 Agawam St.";
var job = "Analyst.";
var currentYear = 2014;
var birth = 1986;

function myFortune()
{
	alert("you woll have" + children + "children. You're partner's name will be " + partners + "You will live at " + address + "And you will be an " + job )
};



function myAge()
{
	alert("You're age is about " + ((currentYear - birth) + 1) + " or " + ((currentYear - birth) - 1) + ".");
};

//excercise: for loops
function keepGoing()
{
	for (var x = 0; x <= 20; x++) 
	{
	if (x % 2 === 0)  
		{
		console.log(x + " is even.");	
		}
	else console.log(x + " is edd.")
	}

};

keepGoing()

//excercise: fizz, buzz
function myFunction (){
	for (var i = 1; i <= 30; i++){
		
		if (i % 3 === 0){
			console.log("fizz");
		}
		else if (i % 5 === 0){
			console.log("buzz");
		}
		else if (i % 15 === 0){
			console.log("fizzbuzz");
		}
	else console.log(i);
	}

}

myFunction()
