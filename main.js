
let text = document.getElementById('text');
let msg =  document.getElementById('msg');
let char = document.getElementById('char');
let word = document.getElementById('word');
let container = document.querySelector('.container')
let test =`Word : 0`;
text.addEventListener('focus',() => msg.style.cssText = `transform:translate(20px,-17px);`)

text.addEventListener('keydown',(e) => {
    let charactersText= e.target.value.trim();
    let wordArray = charactersText.split(/[\n\r\s]+/g );
    word.innerHTML = `Word : ${wordArray.length}`;
    char.innerHTML = `characters : ${charactersText.length}`;
    console.log(charactersText.length)
    if(charactersText.length === 0) word.innerHTML = test;

})

window.open( container.style.transform = 'scale(1)')