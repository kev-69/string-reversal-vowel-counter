// String Reversal and Vowel Counter
// Code takes a word or sentence from the command line, reverses the string, and counts the number of vowels in it. The program then outputs the reversed string and the vowel count.
const readline = require('readline');

// Reverse the string manually by walking through from the last character to the first and building a new string one characater at a time without a built-in .reverse() method or similar

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Count the number of vowels in the string
function countVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}

function main(input) {
    // Guard against empty or whitespace-only input rather than silently failing
    if (typeof input !== 'string' || input.trim() === 0) {
        console.error('Error: Input must be a non-empty string.');
        return;
    }

    const reversed = reverseString(input);
    const vowelCount = countVowels(input);

    console.log(`Input          ${input}`);
    console.log(`Reversed       ${reversed}`);
    console.log(`Vowel Count    ${vowelCount}`);
}

// Allow the program to be used either interactiveky or via a CLI arguement with node index.ls "Reverse"
const argInput = process.argv.slice(2).join(' ');

if (argInput.trim().length > 0) {
    main(argInput);
} else {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter a word or sentence: ', (answer) => {
        main(answer);
        rl.close();
    });
}

module.exports = { reverseString, countVowels, main };