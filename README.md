const readline = require('readline');

// Function to capitalize the first letter of each word
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Set up command-line input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence in lowercase: ', (input) => {
    const capitalized = capitalizeWords(input);
    console.log('Capitalized:', capitalized);
    rl.close();
});
