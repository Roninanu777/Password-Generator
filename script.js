const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwd-display');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumberElement = document.getElementById('includeNumbers');
const includeSymbolElement = document.getElementById('includeSymbols');

//Passing ASCII values
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
);

characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumberElement.checked;
    const includeSymbols = includeSymbolElement.checked;
    const password = generatorPassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);

    passwordDisplay.innerText = password;
})

function generatorPassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
    let charCodes = LOWERCASE_CHAR_CODES;
    if(includeUppercase)
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if(includeNumbers)
        charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if(includeSymbols)
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    
    const passwordCharacters = [];
    for(let i = 0; i < characterAmount; i++){
        const character = charCodes[Math.floor(Math.random()*charCodes.length)];
        passwordCharacters.push(String.fromCharCode(character));
    }

    return passwordCharacters.join('');
}

function arrayFromLowToHigh(low,high){
    
    const array = [];
    for(let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}

function syncCharacterAmount(e){
    const value = e.target.value;
    console.log(value);
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}