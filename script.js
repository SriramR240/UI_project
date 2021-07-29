function alpha(inputtxt,inputemail,option)
    { 
        console.log(inputtxt.value);
        console.log(inputemail.value);
        var atpos = inputemail.value.indexOf("@");
        var dotpos = inputemail.value.lastIndexOf(".");
        var letters = /[^a-zA-z\s]/;
        if(inputtxt.value.match(letters))
        {  
            alert('name of the user should consists of alphabets only!');
            return false; 
                
        }
        else if  (atpos < 1 || ( (dotpos - atpos) < 2 ))
        {
            alert("invalid email address!");
            return false;
        }
        else
        {
            if (option==1)
            {
                alert('Thank you for you feedback!');
            }
            else
            {
                alert("Thank you for Subscribing to us!!");
            }
            return true;
        }
    }


function change(x)
{
    console.log("hello");
    document.getElementById('mainframe').innerHTML=document.getElementById(x).innerHTML;
    
}
