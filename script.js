function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    let regex = /^pet_[0-9]{4}[a-zA-Z]+$/g;
    
        // Checks if input starts with 'pet_' and followed by alphanumeric characters
        if (regex.test(input)) {
            result = "Valid Syntax <span class='valid'></span>";
        } else {
            result = "Invalid Syntax <span class='invalid'></span>";
        }

            document.getElementById('result').innerHTML = result;
}


