// -------------navbar---------------

const links = document.getElementsByClassName('nav-link');

for (let link of links) {
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = 'orange';
        // link.style.border = '1px solid black';
        link.style.borderRadius = '50%'
        // link.style.transition = "transform 0.5s";
        // link.style.transform = "scale(1.2)";
        link.style.color = 'white'

    });

    link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = '';
        link.style.border = '';
        link.style.borderRadius = ''
        link.style.transition = "";
        link.style.transform = "";
    });
}





// animation to box
const hoverBoxes = document.querySelectorAll(".box");

hoverBoxes.forEach((hoverBox) => {
    hoverBox.addEventListener("mouseenter", () => {
        hoverBox.style.transition = "transform 0.5s";
        hoverBox.style.transform = "scale(1.2)";
    });

    hoverBox.addEventListener("mouseleave", () => {
        hoverBox.style.transform = "scale(1)";
    });
});

// ------------------------Service-----------------------------

const nameInput = document.getElementById('name');

// Add an event listener for real-time validation
nameInput.addEventListener('input', () => {
    const nameValue = nameInput.value.trim();

    // Validate input (e.g., only alphabets allowed)
    if (/[^a-zA-Z\s]/.test(nameValue)) {
        // nameInput.classList.add('is-valid'); // Add a red border or visual cue
        nameInput.classList.add('is-invalid')
    } else {
        nameInput.classList.remove('is-invalid'); // Remove the invalid class
    }
});

// Optional: Add character count limit (e.g., max 50)
nameInput.addEventListener('input', () => {
    const maxLength = 50;
    if (nameInput.value.length > maxLength) {
        nameInput.value = nameInput.value.slice(0, maxLength); // Trim excess
        alert('Name cannot exceed 50 characters!');
    }
});


// ------------Number------------
const numberInput = document.getElementById('mobile-number')

numberInput.addEventListener('input', () => {
    const num = numberInput.value.trim()
    if (num === "") {
        numberInput.classList.remove('is-invalid')
        numberInput.classList.remove('is-valid')
    } else if (/[0-9]{10}$/.test(num)) {
        numberInput.classList.remove('is-invalid')
        numberInput.classList.add('is-valid')
    } else {
        numberInput.classList.add('is-invalid')
    }
})


const inputAddress = document.getElementById('address')

inputAddress.addEventListener('input', () => {
    const address = inputAddress.value.trim()
    if (address === "") {
        inputAddress.classList.remove('is-invalid')
    } else if (/[A-Za-z0-9-,/\s]+$/.test(address)) {
        inputAddress.classList.remove('is-invalid')
    } else {
        inputAddress.classList.add('is-invalid')
    }
})


const inputCity = document.getElementById('city')

inputCity.addEventListener('input', () => {
    const city = inputCity.value.trim()
    if (city === "") {
        inputCity.classList.remove('is-invalid')
    } else if (/[A-Za-z-\s]+$/.test(city)) {
        inputCity.classList.remove('is-invalid')
    } else {
        inputCity.classList.add('is-invalid')
    }
})


const inputPin = document.getElementById('pin')

inputPin.addEventListener('input', () => {
    const pin = inputPin.value.trim()
    if (pin === "") {
        inputPin.classList.remove('is-invalid')
        inputPin.classList.remove('is-valid')
    } else if (/^[0-9]{6}$/.test(pin)) {
        inputPin.classList.remove('is-invalid')
        inputPin.classList.add('is-valid')
    } else {
        inputPin.classList.add('is-invalid')
    }
})

const fileInput = document.getElementById('file')

fileInput.addEventListener('change', () => {
    const file = inputFile.files[0];
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf']; // Allowed file extensions
    const maxSize = 2 * 1024 * 1024; // Maximum size in bytes (2 MB)

    if (file) {
        const fileName = file.name;
        const fileSize = file.size;
        const fileExtension = fileName.split('.').pop().toLowerCase();

        if (allowedExtensions.includes(fileExtension) && fileSize <= maxSize) {
            inputFile.classList.remove('is-invalid');
        } else {
            inputFile.classList.add('is-invalid');
        }
    } else {
        inputFile.classList.add('is-invalid'); // Invalid if no file is selected
    }
})




const form1 = document.getElementById('serviceForm');

form1.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission

    let isValid = true; // Flag to track the validity of the form

    // Name Validation
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        nameInput.classList.remove('is-invalid');
    }

    // Mobile Number Validation
    const mobileInput = document.getElementById('mobile-number');
    const mobilePattern = /^[0-9]{10}$/; // 10-digit mobile number validation
    if (!mobilePattern.test(mobileInput.value.trim())) {
        mobileInput.classList.add('is-invalid');
        isValid = false;
    } else {
        mobileInput.classList.remove('is-invalid');
    }

    // Address Validation
    const addressInput = document.getElementById('address');
    if (addressInput.value.trim() === '') {
        addressInput.classList.add('is-invalid');
        isValid = false;
    } else {
        addressInput.classList.remove('is-invalid');
    }

    // City Validation
    const cityInput = document.getElementById('city');
    if (cityInput.value.trim() === '') {
        cityInput.classList.add('is-invalid');
        isValid = false;
    } else {
        cityInput.classList.remove('is-invalid');
    }

    // State Validation
    const stateSelect = document.getElementById('inputState');
    if (stateSelect.value === 'Choose') {
        stateSelect.classList.add('is-invalid');
        isValid = false;
    } else {
        stateSelect.classList.remove('is-invalid');
    }

    // Pin Code Validation
    const pinInput = document.getElementById('pin');
    const pinPattern = /^[0-9]{6}$/; // 6-digit pin code validation
    if (!pinPattern.test(pinInput.value.trim())) {
        pinInput.classList.add('is-invalid');
        isValid = false;
    } else {
        pinInput.classList.remove('is-invalid');
    }

    // Frame Size Validation
    const frameSizeSelect = document.getElementById('inputState');
    if (frameSizeSelect.value === 'Choose...') {
        frameSizeSelect.classList.add('is-invalid');
        isValid = false;
    } else {
        frameSizeSelect.classList.remove('is-invalid');
    }

    // Frame Type Validation
    const frameTypeSelect = document.getElementById('inputState');
    if (frameTypeSelect.value === 'Choose...') {
        frameTypeSelect.classList.add('is-invalid');
        isValid = false;
    } else {
        frameTypeSelect.classList.remove('is-invalid');
    }

    // File Validation
    const fileInput = document.getElementById('file');
    if (fileInput.files.length === 0) {
        fileInput.classList.add('is-invalid');
        isValid = false;
    } else {
        fileInput.classList.remove('is-invalid');
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        form1.reset(); // Reset the form fields after successful submission
    }
});
















// -------------------------Contact form----------------------------

// -------Name--------
// Select the input element
const contactNameInput = document.getElementById('contactName');

contactNameInput.addEventListener('input', () => {
    const value = contactNameInput.value.trim(); // Get the input value and trim spaces
    if(value === ""){
        contactNameInput.classList.remove('is-invalid');
        contactNameInput.classList.remove('is-valid');
    }
    // Check for invalid characters
    else if (/[^a-zA-Z\s]/.test(value)) {
        contactNameInput.classList.add('is-invalid'); // Add 'is-invalid' class for errors
    } else {
        contactNameInput.classList.remove('is-invalid'); // Remove 'is-invalid' class when valid
        contactNameInput.classList.add('is-valid');

    }
});


// Optional: Add character count limit (e.g., max 50)
contactNameInput.addEventListener('input', () => {
    const maxLength = 50;
    if (contactNameInput.value.length > maxLength) {
        contactNameInput.value = contactNameInput.value.slice(0, maxLength); // Trim excess
        alert('Name cannot exceed 50 characters!');
    }
});



// -----------Email---------------

// Select the email input element
const emailInput2 = document.getElementById('email2');

emailInput2.addEventListener('input', () => {
    const email = emailInput2.value.trim();

    if (email === "") {
        emailInput2.classList.remove('is-invalid'); // Remove warning for empty input
        emailInput2.classList.remove('is-valid')
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailInput2.classList.remove('is-invalid'); // Valid email
        emailInput2.classList.add('is-valid')
    } else {
        emailInput2.classList.add('is-invalid'); // Invalid email
    }
});



const numberInput2 = document.getElementById('mobile-number2');

numberInput2.addEventListener('input', () => {
    const num = numberInput2.value.trim();

    if (num === "") {
        // Clear all validation classes if input is empty
        numberInput2.classList.remove('is-invalid');
        numberInput2.classList.remove('is-valid');
    } else if (/^[0-9]{10}$/.test(num)) {
        // If input is exactly 10 digits
        numberInput2.classList.remove('is-invalid');
        numberInput2.classList.add('is-valid');
    } else {
        // For all other cases (invalid input)
        numberInput2.classList.remove('is-valid');
        numberInput2.classList.add('is-invalid');
    }
});


// -------------Message--------------- 
const messageInput = document.getElementById('message')

messageInput.addEventListener('input', () => {
    const message = messageInput.value.trim()
    if (message === "") {
        messageInput.classList.remove('is-invalid')
    } else if (/[A-Za-z0-9\s]+$/) {
        messageInput.classList.remove('is-invalid')
    } else
        (messageInput.classList.add('is-invalid'))
})

messageInput.addEventListener('input', () => {
    const message = messageInput.value.trim();
    const wordCount = message.split(/\s+/).filter(word => word.length > 0).length;

    if (message === "") {
        // No input, remove invalid class
        messageInput.classList.remove('is-invalid');
        messageInput.classList.remove('is-valid')
    } else if (wordCount => 3 && wordCount <= 500) {
        // Valid word count, remove invalid class
        messageInput.classList.remove('is-invalid');
        messageInput.classList.add('is-valid');
    } else {
        // Invalid word count, add invalid class
        messageInput.classList.remove('is-valid');
        messageInput.classList.add('is-invalid');
    }
});


const form = document.getElementById('contactForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    let isValid = true;

    const nameInput = document.getElementById('contactName');
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        nameInput.classList.remove('is-invalid');
    }

    // Validate Email
    // const emailInput = document.getElementsById('email2');
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    // if (!emailPattern.test(emailInput.value.trim())) {
    //     emailInput.classList.add('is-invalid');
    //     isValid = false;
    // } else {
    //     emailInput.classList.remove('is-invalid');
    // }

    document.getElementById('email2').addEventListener('click', () => {
        const emailInput = document.getElementById('email2');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex

        if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid');
            emailInput.classList.remove('is-valid');
            // emailInput.nextElementSibling.style.display = 'inline'; // Show error message
            isValid = false
        } else {
            emailInput.classList.add('is-valid');
            emailInput.classList.remove('is-invalid');
            // emailInput.nextElementSibling.style.display = 'none'; // Hide error message
        }
    });




    // Validate Mobile Number
    const mobileInput = document.getElementById('mobile-number2');
    const mobilePattern = /^\d{10}$/; // Exactly 10 digits
    if (!mobilePattern.test(mobileInput.value.trim())) {
        mobileInput.classList.add('is-invalid');
        isValid = false;
    } else {
        mobileInput.classList.remove('is-invalid');
    }

    // Validate Message
    const messageInput = document.getElementById('message');
    if (messageInput.value.trim() === '') {
        messageInput.classList.add('is-invalid');
        isValid = false;
    } else {
        messageInput.classList.remove('is-invalid');
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert('Message sent successfully!');
        form.reset(); // Reset the form after submission
    }
});




