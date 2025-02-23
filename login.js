function buttonClick(event){
    event.preventDefault();  // Prevent the form from submitting and refreshing the page
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const emails = JSON.parse(localStorage.getItem("emails")) || [];
    const passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    for (i in emails) {
        
        if (emails[i] === email)
        {
            console.log(i);
            if (passwords[i] === password){
                alert("Successful login! Redirecting to schedule...")
                window.location.href = "schedule.html"; // Redirects to the schedule page
                return;
            }
            
            else {
                alert ("Password incorrect, please try again")
                return; 
            }
            
        }
    }
    alert("No account with that email, please sign up.")
    return;
};

