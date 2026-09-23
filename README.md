# string-reversal-vowel-counter
A simple Node.ls program that takes a word or sentence as an input, reverses it with any inbuilt function or method and counts the number of vowels (a, e, i, o, u) it contains

## Approach

- **Reversal:** The string is treated as an indexable sequence of characters.
  A loop starts at the last index (`input.length - 1`) and walks backward to
  index `0`, appending each character to a new `reversed` string. This avoids
  any built-in `.reverse()`, `.split('').reverse().join('')`, or similar
  shortcut — the reversal logic is written by hand.
- **Vowel counting:** The program loops through every character, lowercases
  it, and checks whether it belongs to the vowel set `{a, e, i, o, u}`. Every
  match increments a counter. Case is ignored, so `A` and `a` both count.

Both operations run in a single pass over the string, so the overall time
complexity is O(n), where n is the length of the input.

- **Input validation:** Input read from the command line or `readline` is
  always a string in Node.js, so there's no "non-string" input to worry
  about — typing `12345` or `!!!` just gets processed as text (correctly
  reporting 0 vowels, for example). The one edge case handled explicitly is
  empty or whitespace-only input, which prints a clear error message instead
  of silently returning an empty reversal and a vowel count of 0.

## How to Run

**Requirements:** [Node.js](https://nodejs.org/) (v14 or later recommended).
No external dependencies are required.

1. Clone the repository and navigate into it.
2. Run the program in one of two ways:

   **Interactive mode** (it will prompt you for input):
   ```bash
   node solution.js
   ```

   **Argument mode** (pass the input directly):
   ```bash
   node solution.js "Hello World"
   ```

## Sample Input and Output and Complexity

Input:
```
Tel Solutions Africa
```

Output:
```
Input:            Tel Solutions Africa
Reversed:         acirfA snoituloS leT
Vowel Count:      8
```
Complexity:
Let n be the length of the input
```
Time Complexity:    O(n)
Space Complexity:   O(n)
```

## Project Structure

```
.
├── index.js   # Main program (reversal + vowel counting logic)
└── README.md     # This file
```