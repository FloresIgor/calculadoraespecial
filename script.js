function calculateNotable(operation) {
    let value = parseInt(display.value);
    if (isNaN(value)) {
        alert("Digite um número válido!");
        return;
    }

    switch (operation) {
        case 'sqrt':
            display.value = Math.sqrt(value);
            break;
        case 'factorial':
            display.value = factorial(value);
            break;
        case 'doubleFactorial':
            display.value = doubleFactorial(value);
            break;
        case 'primorial':
            display.value = primorial(value);
            break;
        case 'subFactorial':
            display.value = subFactorial(value);
            break;
        case 'termial':
            display.value = termial(value);
            break;
        case 'oscillatingFactorial':
            display.value = oscillatingFactorial(value);
            break;
        case 'iteratedDoubleFactorial':
            display.value = iteratedDoubleFactorial(value);
            break;
        case 'iteratedTermial':
            display.value = iteratedTermial(value);
            break;
        default:
            alert("Operação desconhecida!");
    }
}

// Listeners de clique e teclado
document.querySelector('.buttons').addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'BUTTON') {
        const operation = target.getAttribute('data-operation');
        const key = target.getAttribute('data-key');

        if (operation) {
            calculateNotable(operation);
        } else if (key) {
            if (key === 'Escape') clearDisplay();
            else if (key === 'Backspace') deleteLast();
            else if (key === 'Enter') calculateResult();
            else appendValue(key);
        }
    }
});
