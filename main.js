
let text = document.getElementById('text');
let msg =  document.getElementById('msg');
let char = document.getElementById('char');
let word = document.getElementById('word');
let container = document.querySelector('.container');
let maxLength = text.getAttribute('maxLength')

let test =`Word : 0`;
text.addEventListener('focus',() => msg.style.cssText = `transform:translate(20px,-17px);`)

text.addEventListener('input',(e) => {
    let wordArray = text.value.trim().split(/[\n\r\s]+/g );
    word.innerHTML = `Word : ${wordArray.length}`;
    char.innerHTML = `characters : ${maxLength - text.value.length}`;
    if(char.innerHTML ===`characters : 0`) {
        text.classList.add('zero');
        
    } else {
        text.classList.remove('zero');
    }

})


window.open( container.style.transform = 'scale(1)')