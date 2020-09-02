const pressed = [];
const secretCode = 'ArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba'

window.addEventListener('keyup', (event) => {
    pressed.push(event.key);
    pressed.splice(-10 - 1, pressed.length - 10)
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }
})
