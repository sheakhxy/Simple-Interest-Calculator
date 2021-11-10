/**************************************
***************************************
***************************************

JavaScript Functions by Shahnawaz Khan

***************************************
***************************************
****************************************/
//displaying selected rate on the slider dynamically on the webpage

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
    	alert ("Please enter amount greater than 0.", title="Amount error");
        document.getElementById("principal").focus();
	document.getElementById("principal").value = "";
	document.getElementById("result").innerHTML= "";
        return false;
    }
    
// Amount validation ends

	document.getElementById("result").innerHTML="If you deposit <b><mark>"+ principal +"</mark></b>,\<br\>at an interest rate of <b><mark>"+ document.getElementById("rate").value +" % </mark></b>,\<br\>You will receive an amount of <b><mark>" + interest +"</mark></b>,\<br\>in the year <b><mark>"+ year +"</mark></b>\<br\>";

}
// ***********************************************************************************
