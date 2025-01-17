const display = document.getElementById('display');
const preview = document.getElementById('preview');

function appendValue(value) {
    display.value += value;
    updatePreview();
}

function clearDisplay() {
    display.value = '';
    preview.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    updatePreview();
}

function calculateResult() {
    try {
        preview.value = eval(display.value.replace(/\^/g, '**').replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (e) {
        alert("Expressão inválida");
        clearDisplay();
    }
}

function updatePreview() {
    try {
        preview.value = eval(display.value.replace(/\^/g, '**').replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (e) {
        preview.value = '';
    }
}

// Funções matemáticas especiais
function factorial(n) {
    if (n < 0) return NaN;
    return n === 0 ? 1 : n * factorial(n - 1);
}

function doubleFactorial(n) {
    if (n <= 0) return 1;
    return n * doubleFactorial(n - 2);
}

function primorial(n) {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes.reduce((prod, p) => prod * p, 1);
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function subFactorial(n) {
    if (n === 0) return 1;
    if (n === 1) return 0;
    return (n - 1) * (subFactorial(n - 1) + subFactorial(n - 2));
}

function termial(n) {
    return (n * (n + 1)) / 2;
}

function oscillatingFactorial(n) {
    let numerator = factorial(n);
    let denominator = Math.pow(factorial(Math.floor(n / 2)), 2);
    return numerator / denominator;
}

function iteratedDoubleFactorial(n) {
    return factorial(doubleFactorial(n));
}

function iteratedTermial(n) {
    return termial(termial(n));
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function calculateNotable(operation) {
    let value = parseInt(display.value);
    if (isNaN(value)) {
        alert("Digite um número válido!");
        return;
    }

    switch (operation) {
        case 'sqrt':
            preview.value = Math.sqrt(value);
            break;
        case 'factorial':
            preview.value = factorial(value);
            break;
        case 'doubleFactorial':
            preview.value = doubleFactorial(value);
            break;
        case 'primorial':
            preview.value = primorial(value);
            break;
        case 'subFactorial':
            preview.value = subFactorial(value);
            break;
        case 'termial':
            preview.value = termial(value);
            break;
        case 'oscillatingFactorial':
            preview.value = oscillatingFactorial(value);
            break;
        case 'iteratedDoubleFactorial':
            preview.value = iteratedDoubleFactorial(value);
            break;
        case 'iteratedTermial':
            preview.value = iteratedTermial(value);
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

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button) button.click();
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const body = document.body;

    // Verifica se o usuário já tem uma preferência armazenada
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Alterna entre os modos e armazena a preferência do usuário
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
