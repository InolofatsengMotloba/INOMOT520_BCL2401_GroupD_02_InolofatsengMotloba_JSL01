function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    let regex = /pet_[0-9a-z]/gi;
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (regex.test(input)) {
            result = "Valid Syntax";
        } else {
            result = "Invalid Syntax";
        }

            document.getElementById('result').innerText = result;
}


