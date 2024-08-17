function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.toString().slice(0, -1);
}

function appendCharacter(number) {
    document.getElementById('display').value += number;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        // Checking for division by zero
        if (display.value.includes('/0')) {
            display.value = "Can't Divide";
        } else {
            display.value = eval(display.value);
        }
    } catch (e) {
        display.value = 'Error';
    }
}