// Function to handle storing the responses in localStorage
function storeResponses() {
  // Get the values from the textareas by ID
  var response1 = document.getElementById('textarea1').value;
  var response2 = document.getElementById('textarea2').value;
  var response3 = document.getElementById('textarea3').value;
  var response4 = document.getElementById('textarea4').value;
  var feedback = "Do you feel like our nurses have listened to you and interacted?\n" + response1 + "\n" + "Does this app motivate you to stay on-to-date with all your tasks?\n" + response2 + "\n"
  + "If applicable, have you had any emergencies and has help arrived within a reasonable time?\n" + response3 + "\n" + "How can we make this app better?\n" + response4
  // Store the responses in localStorage
  localStorage.setItem('feedback', feedback);

    const key = localStorage.key(2); // Get the key at index 'i'
    const value = localStorage.getItem(key); // Get the value for the key
    
    console.log(key + ': ' + value); // Print the key and value to the console
}