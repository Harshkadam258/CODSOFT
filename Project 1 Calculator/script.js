function appendValue(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert('Invalid Expression');
    }
}
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});
