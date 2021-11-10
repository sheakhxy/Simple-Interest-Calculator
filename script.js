/**************************************
***************************************
***************************************

JavaScript Functions by Shahnawaz Khan

***************************************
***************************************
****************************************/


//displaying selected rate on the slider dynamically

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// ***** Below steps will be executed upon clicking Compute Interest button ********

function compute()
{

    	var principal = document.getElementById("principal").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * document.getElementById("rate").value /100;
	var year = new Date().getFullYear()+parseInt(years);

// Amount validation starts

    if (principal <=0)
    {
    	alert ("Please enter amount greater than 0");
        document.getElementById("principal").focus();
	document.getElementById("principal").value = "";
        return false;
    }
    
// Amount validation ends

	document.getElementById("result").innerHTML="If you deposit <b>"+ principal +"</b>,\<br\>at an interest rate of <b>"+ document.getElementById("rate").value +"</b>,\<br\>You will receive an amount of <b>" + interest +"</b>,\<br\>in the year <b>"+ year +"</b>\<br\>";
}
// ***********************************************************************************
