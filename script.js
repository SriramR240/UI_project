function alpha(inputtxt,option)
    { 
        console.log(inputtxt.value);
        var letters = /[^a-zA-z\s]/;
        if(inputtxt.value.match(letters))
        {  
            alert('name of the user should consists of alphabets only!');
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

