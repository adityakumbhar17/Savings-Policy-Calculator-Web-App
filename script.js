function calculateSavings() {
    var age = parseInt(document.getElementById('age').value);
    var salary = parseInt(document.getElementById('salary').value);
    var expenses = parseInt(document.getElementById('expenses').value);

    var savings = (salary - expenses) * 12;
    var policy = suggestPolicy(age, savings);

    var result = document.getElementById('result');
    result.innerHTML = `<br>Your annual savings: ${savings}<br>Suggested Policy:, ${policy}`;
}

function suggestPolicy(age, savings) {
    if (age < 30 && savings > 50000) {
        return "Youth Insurance Policy";
    } else if (age >= 30 && age < 50 && savings > 100000) {
        return "Life Insurance Policy";
    } else if (age >= 50 && savings > 200000) {
        return "Retirement Plan";
    } else {
        return "No specific policy suggestion";
    }
}
