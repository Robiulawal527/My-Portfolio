// Define the text you want to display with the typewriter effect
const text = "Robiul Awal";

// Get the element where you want to display the text
const nameElement = document.getElementById("name");

// Initialize index to keep track of the current character
let index = 0;

// Define a function to display text with the typewriter effect
function typeWriter() {
    // Check if all characters have been displayed
    if (index < text.length) {
        // Add the next character to the element
        nameElement.textContent += text.charAt(index);
        // Increment the index for the next character
        index++;
        // Call the function recursively after a delay
        setTimeout(typeWriter, 100);
    }
}

// Call the function to start the typewriter effect
typeWriter();
