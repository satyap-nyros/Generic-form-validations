
function Validations()
{
	var Name = document.getElementById("inputName").value;
	var Password = document.getElementById("inputPassword").value;
	var fName = document.getElementById("inputFirstName").value;
	var lName = document.getElementById("inputLastName").value;


	var AccId = ["UserMsg","PasswordMsg"];
	var FLId = ["FirstNameMsg","LastNameMsg"];
	var AccVal = [Name,Password];
	var FLVal = [fName,lName];	

	var AccountCheck = AccountValid(AccId,AccVal);
	
	var ProfpicCheck = ProfileValid();
	var DOBCheck = DOBValid();
	var HobbiesCheck = HobbiesValid(); 
	var MobileCheck = MobileValid();
	var CountryCheck = CountryValid();
	
	if(UserCheck == true && PasswordCheck == true && FNameCheck == true &&
	   LNameCheck == true && ProfpicCheck == true && DOBCheck == true && 
	   HobbiesCheck == true && MobileCheck == true && CountryCheck == true)
	{
		document.getElementById("SuccessMsg").style.display = "block";	
		
		return false;
	}
	else
	{
		return false;
	}	
}


/******************** USERNAME AND PASSWORD VALIDATION *****************************/

function AccountValid(AccId,AccVal)
{
	var Patt = /^[0-9A-z]+$/;
	
	for(i=0;i<AccId.length;i++)
	{
		if(Patt.test(AccVal[i]))
		{       
			return success(AccId[i]);
			
		}
		else
		{
       			return error(AccId[i]);
		}
	}
}

/******************** FIRSTNAME VALIDATION *****************************/
/******************** DOB VALIDATION *****************************/
function DOBValid()
{
	var  selectDate= document.getElementById("Date");
	var D = selectDate.options[selectDate.selectedIndex].text;
	
	var  selectMonth= document.getElementById("Month");
	var M = selectMonth.options[selectMonth.selectedIndex].text;
	
	var  selectYear= document.getElementById("Year");
	var Y = selectYear.options[selectYear.selectedIndex].text;
		
	if(D == "-- Date --" || M == "-- Month --" || Y == "-- Year --")
	{
		return error("DOBMsg");
	}
	else
	{
		return success("DOBMsg");
	}
}

/******************** HOBBIES VALIDATION *****************************/
function HobbiesValid()
{
	var hob1 = document.getElementById('h1').checked;
	var hob2 = document.getElementById('h2').checked;
	var hob3 = document.getElementById('h3').checked;
	var hob4 = document.getElementById('h4').checked;
	var hob5 = document.getElementById('h5').checked;

	if(hob1 == true || hob2 == true || hob3 == true || hob4 == true || hob5 == true)
	{
		return success("HobbiesMsg");
	}
	else
	{
		return error("HobbiesMsg");
	}
}

/******************** PROFILEPIC VALIDATION *****************************/
function ProfileValid()
{
	var pic = document.getElementById('inputFile').value;
	if(pic == null || pic == "")
	{
		return error("ProfileMsg");
	}
	else
	{
		return success("ProfileMsg");
	}
}

/******************** PHONE VALIDATION *****************************/
function MobileValid()
{
	var Phone = document.getElementById("inputPhone").value;
	
	var MobPatt = /^([+][0-9]\d{1}) ([(][0-9]\d{2}[)])-([0-9]\d{2})-([0-9]\d{3})$/;
	
	if(MobPatt.test(Phone))
	{
		return success("MobileMsg");
	}
	else
	{
		return error("MobileMsg");		
	}
}

/******************** COUNTRY VALIDATION *****************************/
function CountryValid()
{
	var  selectCountry= document.getElementById("Country");
	var C = selectCountry.options[selectCountry.selectedIndex].text;
	
	if(C == "-- Country --")
	{
		return error("CountryMsg");
	}
	else
	{
		return success("CountryMsg");
	}

}

/******************** SUCCESS & ERROR *****************************/
function success(id)
{
	var clsName = document.getElementById(id).className;
	document.getElementById(id).className = document.getElementById(id).className.replace("NameMsg", "success");
	document.getElementById(id).className = document.getElementById(id).className.replace("error", "success");

	if(clsName !="success")
	{
		ProgressInc();
	}
	return true;
}

function error(id)
{
	var clsName = document.getElementById(id).className;
	document.getElementById(id).className = document.getElementById(id).className.replace("NameMsg", "error");
	document.getElementById(id).className = document.getElementById(id).className.replace("success", "error");
	
	if(clsName !="error" && clsName != "NameMsg")
	{
		ProgressDec();
	}	
	return false;
}


/******************** PROGRESS BAR *****************************/
function ProgressInc()
{
	var pb = document.getElementById("progress").value;
	document.getElementById("progress").value = pb + 1;
	document.getElementById("percent").innerHTML = (pb + 1)*10 + "%";
}
function ProgressDec()
{
	var pb = document.getElementById("progress").value;
	document.getElementById("progress").value = pb - 1;
	document.getElementById("percent").innerHTML = (pb - 1)*10 + "%";
}


