const tags = document.getElementsByClassName('tags');
const arrows = document.getElementsByClassName('arrows');
const textarea = document.getElementById('textarea');
const button = document.getElementById('button');
const title = document.getElementById('title');
const coin = document.getElementById('coin');
const question = document.getElementById('question');


let state = 0;

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTag(e.target.value)
});

function createTag(input) {
    tags[state].innerText = input;
        
}

button.addEventListener("click", () => {
    state++;

    switch (state) {
        case 1:
            textarea.value = "";
            textarea.focus();
            title.innerText = "Enter 2nd Choice";
            break;
        case 2:
            button.textContent = "FLIP!";
            title.innerText = "";
            textarea.value = "";
            textarea.disabled = true;
            textarea.placeholder = "";
            break;
        case 3:
            question.classList.add('hidden')
            coin.classList.remove('hidden');
            setTimeout(choose, 1100)
            button.disabled = true;
            break;
        default:
            location.reload(true);
    }
})

function choose() {
    coin.classList.add('hidden');
    let chosen = Math.floor(Math.random() * 2);
    tags[chosen].classList.remove('badge-warning');
    tags[chosen].classList.add('badge-success');
    arrows[chosen].classList.remove('hidden');
    let notChosen = chosen == 0 ? 1 : 0;
    tags[notChosen].classList.remove('badge-warning');
    tags[notChosen].classList.add('badge-danger');
    button.innerText = "Try again"
    button.disabled = false;
}




