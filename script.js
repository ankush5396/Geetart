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
        nameInput.classList.add('is-invalid'); // Add a red border or visual cue
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
    } else if (/^[0-9]{10}$/.test(num)) {
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
    } else if (/^[A-Za-z0-9-,/\s]+$/.test(address)) {
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
    } else if (/^[A-Za-z-\s]+$/.test(city)) {
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

inputFile.addEventListener('change', () => {
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













// -------------------------Contact form----------------------------

// -------Name--------
// Select the input element
const contactNameInput = document.getElementById('name2');

// Add an event listener for real-time validation
contactNameInput.addEventListener('input', () => {
    const nameValue2 = contactNameInput.value.trim();

    // Validate input (e.g., only alphabets allowed)
    if (/^[a-zA-Z\s]*$/.test(nameValue2)) {
        contactNameInput.classList.remove('is-invalid'); // Add a red border or visual cue
    } else {
        contactNameInput.classList.add('is-invalid'); // Remove the invalid class
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

document.addEventListener('DOMContentLoaded', () => {
    // Get the input element by ID
    const contactNameInput = document.getElementById('name2');

    // Add an event listener for real-time validation
    contactNameInput.addEventListener('input', () => {
        const nameValue = contactNameInput.value.trim();

        // Validate input: only alphabets and spaces allowed
        if (/^[a-zA-Z\s]*$/.test(nameValue)) {
            contactNameInput.classList.remove('is-invalid'); // Remove invalid feedback
            contactNameInput.classList.add('is-valid');     // Optionally add valid feedback
        } else {
            contactNameInput.classList.add('is-invalid');   // Add invalid feedback
            contactNameInput.classList.remove('is-valid'); // Optionally remove valid feedback
        }
    });
});




// -----------Email---------------

// Select the email input element
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim();

    if (email === "") {
        emailInput.classList.remove('is-invalid'); // Remove warning for empty input
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailInput.classList.remove('is-invalid'); // Valid email
    } else {
        emailInput.classList.add('is-invalid'); // Invalid email
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


// const form = document.getElementById('contactForm');

// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent default form submission
//     let isValid = true;

//     const nameInput = document.getElementById('name2');
//     if (nameInput.value.trim() === '') {
//         nameInput.classList.add('is-invalid');
//         isValid = false;
//     } else {
//         nameInput.classList.remove('is-invalid');
//     }

//     // Validate Email
//     const emailInput = document.getElementById('email');
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
//     if (!emailPattern.test(emailInput.value.trim())) {
//         emailInput.classList.add('is-invalid');
//         isValid = false;
//     } else {
//         emailInput.classList.remove('is-invalid');
//     }

//     // Validate Mobile Number
//     const mobileInput = document.getElementById('mobile-number2');
//     const mobilePattern = /^\d{10}$/; // Exactly 10 digits
//     if (!mobilePattern.test(mobileInput.value.trim())) {
//         mobileInput.classList.add('is-invalid');
//         isValid = false;
//     } else {
//         mobileInput.classList.remove('is-invalid');
//     }

//     // Validate Message
//     const messageInput = document.getElementById('message');
//     if (messageInput.value.trim() === '') {
//         messageInput.classList.add('is-invalid');
//         isValid = false;
//     } else {
//         messageInput.classList.remove('is-invalid');
//     }

//     // If all fields are valid, submit the form
//     if (isValid) {
//         alert('Form submitted successfully!');
//         form.reset(); // Reset the form after submission
//     }
// });

















