function buttonClick(event){
    event.preventDefault();  // Prevent the form from submitting and refreshing the page

    // Log to confirm the button click and form submission
    console.log('Sign In button clicked!');

    // Your custom logic here
    // For example, redirecting to another page or displaying a message
    redirectToSchedule();
};

function redirectToSchedule(event) {
    //window.location.href = "schedule.html"; // Redirects to the schedule page
}

