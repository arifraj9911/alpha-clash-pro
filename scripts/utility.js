function addHidden(elementId){
    const hiddenElementId = document.getElementById(elementId);
    hiddenElementId.classList.add('hidden');
};
function removeHidden(elementId){
    const hiddenElementId = document.getElementById(elementId);
    hiddenElementId.classList.remove('hidden');
};

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];

    return alphabet;

};

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);

    return value;
};

function setTextElement(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value ;
}

function setBackgroundColorById(elementId){
    const keyboardKey = document.getElementById(elementId);
    keyboardKey.classList.add('bg-orange-400');
}   
function removeBackgroundColorById(elementId){
    const keyboardKey = document.getElementById(elementId);
    keyboardKey.classList.remove('bg-orange-400');
}   