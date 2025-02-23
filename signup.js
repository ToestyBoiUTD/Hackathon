function signUpButton(event){
    event.preventDefault(); // Prevent form submission
    // Get the input values
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const emails = JSON.parse(localStorage.getItem("emails")) || [];
    const passwords = JSON.parse(localStorage.getItem("passwords")) || [];
    for (i in emails) {
        if (emails[i] === email)
        {
            alert("Email already registered! Please log in.");
            window.location.href = "login.html"; // Redirect to login page
            return; 
        }
    }
    
    emails.push((email));
    passwords.push((password));
    localStorage.setItem("emails", JSON.stringify(emails));
    localStorage.setItem("passwords", JSON.stringify(passwords));
    
    alert("Sign-up succesful! Redirecting to login...");
    window.location.href = "login.html"; // Redirect to login page
    
}