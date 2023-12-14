document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#gst").addEventListener("click", () => {
        document.querySelector(".calculator-container-1").style.display = "none";
        document.querySelector(".calculator-container").style.display = "block";
    });

    document.querySelector("#tax").addEventListener("click", () => {
        document.querySelector(".calculator-container").style.display = "none";
        document.querySelector(".calculator-container-1").style.display = "block";
    });
});

        function calculateGST() {
    const originalAmount = parseFloat(document.getElementById('originalAmount').value);
    const gstRate = parseFloat(document.getElementById('gstRate').value);

    if (isNaN(originalAmount) || isNaN(gstRate)) {
        alert('Please enter valid numbers for Original Amount and GST Rate.');
        return;
    }

    const calculatedGST = (originalAmount * gstRate) / 100;
    const totalAmount = originalAmount + calculatedGST;

    document.getElementById('calculatedGST').innerText = calculatedGST.toFixed(2);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);
}

function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);

    if (isNaN(income)) {
        alert('Please enter a valid annual income.');
        return;
    }

    let tax = 0;

    // Basic example tax calculation (adjust as per your country's tax rules)
    if (income <= 50000) {
        tax = income * 0.1; // 10% tax for income up to 50,000
    } else {
        tax = 50000 * 0.1 + (income - 50000) * 0.2; // 10% on the first 50,000 and 20% on the rest
    }

    document.getElementById('incomeTax').innerText = tax.toFixed(2);
}