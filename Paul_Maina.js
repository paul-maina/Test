const readline = require('readline');

// Function to capitalize each word
function capitalizeWords(sentence) {
    return sentence
        .toLowerCase() // Convert entire sentence to lowercase
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


// Read user input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence in lowercase: ', (input) => {
    const capitalized = capitalizeWords(input);
    console.log('Capitalized:', capitalized);
    rl.close();
});
