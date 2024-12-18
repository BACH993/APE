// 1. Find the 10th character in an array
function findTenthChar() {
    let inputArray = prompt("Enter an array of elements separated by commas:").split(",");
    let result = inputArray.length >= 10 ? inputArray[9] : "The array is too short!";
    alert(result);
}

// 2. Find the last element of an array
function findLastElement() {
    let inputArray = prompt("Enter an array of elements separated by commas:").split(",");
    alert("The last element is: " + inputArray[inputArray.length - 1]);
}

// 3. Allow only a 10-digit number
function validateTenDigits() {
    let input = prompt("Enter a 10-digit number:");
    if (/^\d{10}$/.test(input)) {
        alert("You entered: " + input);
    } else {
        alert("Error! Enter exactly 10 digits.");
    }
}

// 4. Find repeated characters in a word
function findRepeatedCharacters() {
    let word = prompt("Enter a word:");
    let repeatedChars = word.split("").filter((char, index, arr) => arr.indexOf(char) !== index);
    alert("Repeated characters: " + [...new Set(repeatedChars)].join(", "));
}

// 5. Count vowels in an array of characters
function countVowels() {
    let vowels = "aeiouAEIOU";
    let inputArray = prompt("Enter an array of characters separated by commas:").split(",");
    let vowelCount = inputArray.filter(char => vowels.includes(char)).length;
    alert("Number of vowels: " + vowelCount);
}

// 6. Find the longest word in a string
function findLongestWord() {
    let inputString = prompt("Enter a string:");
    let longestWord = inputString.split(" ").reduce((a, b) => (b.length > a.length ? b : a));
    alert("The longest word is: " + longestWord);
}

// 7. Convert uppercase to lowercase and vice versa
function convertCase() {
    let inputString = prompt("Enter a string:");
    let result = [...inputString].map(char =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join("");
    alert("Converted string: " + result);
}

// 8. Find the position of a word in a string
function findSubstringPosition() {
    let inputString = prompt("Enter a string:");
    let searchWord = prompt("Enter a word to search for:");
    let position = inputString.indexOf(searchWord);
    alert(position !== -1 ? "Word position: " + position : "Word not found.");
}

// 9. Modify an array using splice
function modifyArray() {
    let inputArray = prompt("Enter an array separated by commas:").split(",");
    let action = prompt("Enter an action: delete/insert/replace");

    if (action === "delete") {
        let index = parseInt(prompt("Enter the index to delete:"));
        inputArray.splice(index, 1);
    } else if (action === "insert") {
        let index = parseInt(prompt("Enter the index to insert at:"));
        let element = prompt("Enter the element to insert:");
        inputArray.splice(index, 0, element);
    } else if (action === "replace") {
        let index = parseInt(prompt("Enter the index to replace:"));
        let element = prompt("Enter the new element:");
        inputArray.splice(index, 1, element);
    }
    alert("Modified array: " + inputArray.join(", "));
}

// 10. Count words, characters, spaces, and special characters
function countElementsInString() {
    let inputString = prompt("Enter a string:");
    let wordCount = inputString.trim().split(/\s+/).length;
    let charCount = inputString.length;
    let spaceCount = (inputString.match(/\s/g) || []).length;
    let specialCharCount = (inputString.match(/[^\w\s]/g) || []).length;

    alert(`Words: ${wordCount}, Characters: ${charCount}, Spaces: ${spaceCount}, Special Characters: ${specialCharCount}`);
}

// Call all functions in sequence
findTenthChar();
findLastElement();
validateTenDigits();
findRepeatedCharacters();
countVowels();
findLongestWord();
convertCase();
findSubstringPosition();
modifyArray();
countElementsInString();