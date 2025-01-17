// Get the input element by its ID
const nameInput = document.getElementById('registername');

// Add an event listener for real-time validation on input field
nameInput.addEventListener('input', () => {
    const nameValue = nameInput.value.trim();  // Trim whitespace from the input value
    if(nameValue === ""){
        nameInput.classList.remove('is-invalid');
        nameInput.classList.remove('is-valid');
    }
    // Validate input (only alphabets and spaces allowed)
    else if (/[^a-zA-Z\s]/.test(nameValue)) {
        // Add invalid class for invalid input
        nameInput.classList.add('is-invalid');
    } else  {
        // Remove the invalid class if input is valid
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid')
    }
});

// Optional: Add character count limit (max 50 characters)
nameInput.addEventListener('input', () => {
    const maxLength = 50;

    // Check if input exceeds maxLength
    if (nameInput.value.length > maxLength) {
        nameInput.value = nameInput.value.slice(0, maxLength); // Trim excess input
        alert('Name cannot exceed 50 characters!'); // Show an alert
    }
});











const emailInput = document.getElementById('registeremail');

// Add an event listener for real-time email validation
emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim(); // Remove extra spaces from the input

    if (email === "") {
        // Remove both valid and invalid classes for empty input
        emailInput.classList.remove('is-invalid');
        emailInput.classList.remove('is-valid');
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        // Valid email
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
    } else {
        // Invalid email
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
    }
});     









const numberInput = document.getElementById('contactNumber');

// Add an event listener for real-time contact number validation
numberInput.addEventListener('input', () => {
    const num = numberInput.value.trim(); // Remove extra spaces from the input

    if (num === "") {
        // Remove both valid and invalid classes for empty input
        numberInput.classList.remove('is-invalid');
        numberInput.classList.remove('is-valid');
    } else if (/^[0-9]{10}$/.test(num)) {
        // Valid contact number (10 digits)
        numberInput.classList.remove('is-invalid');
        numberInput.classList.add('is-valid');
    } else {
        // Invalid contact number
        numberInput.classList.add('is-invalid');
        numberInput.classList.remove('is-valid');
    }
});
   






const passwordInput = document.getElementById('password');

// Add an event listener for real-time password validation
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value.trim();

    // Password validation rules: At least 8 characters, including one uppercase, one lowercase, one digit, and one special character
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (password === "") {
        // Remove both valid and invalid classes for empty input
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.remove('is-valid');
    } else if (isValidPassword) {
        // Valid password
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
    } else {
        // Invalid password
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
    }
});








document.getElementById("login-form-container").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    let isValid = true; // Flag to track if the form is valid

    // Name Validation
    const nameInput = document.getElementById("registername");
    const nameValue = nameInput.value.trim();
    if (!/^[a-zA-Z\s]+$/.test(nameValue) || nameValue === "") {
        nameInput.classList.add("is-invalid");
        alert("Please enter a valid name (only alphabets and spaces allowed).");
        isValid = false;
    } else {
        nameInput.classList.remove("is-invalid");
    }

    // Email Validation
    const emailInput = document.getElementById("registeremail");
    const emailValue = emailInput.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue) || emailValue === "") {
        emailInput.classList.add("is-invalid");
        alert("Please enter a valid email address.");
        isValid = false;
    } else {
        emailInput.classList.remove("is-invalid");
    }

    // Contact Number Validation
    const contactInput = document.getElementById("contactNumber");
    const contactValue = contactInput.value.trim();
    if (!/^\d{10}$/.test(contactValue) || contactValue === "") {
        contactInput.classList.add("is-invalid");
        alert("Please enter a valid 10-digit contact number.");
        isValid = false;
    } else {
        contactInput.classList.remove("is-invalid");
    }

    // Password Validation
    const passwordInput = document.getElementById("password");
    const passwordValue = passwordInput.value.trim();
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordValue) || passwordValue === "") {
        passwordInput.classList.add("is-invalid");
        alert(
            "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character."
        );
        isValid = false;
    } else {
        passwordInput.classList.remove("is-invalid");
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert("Registered successfully!");
        this.submit(); // Allow the form to submit
    }
});

