document.getElementById("calculate").addEventListener("click", calculateTax);

function validateInputs() {
    let isValid = true;

    const inputs = [
        { id: "grossAnnualIncome", errorId: "grossAnnualIncome-error" },
        { id: "extraIncome", errorId: "extraIncome-error" },
        { id: "deductions", errorId: "deductions-error" },
        { id: "ageGroup", errorId: "ageGroup-error" },
    ];

    inputs.forEach((input) => {
        const inputElement = document.getElementById(input.id);
        const errorElement = document.getElementById(input.errorId);

        if (inputElement.value === "" || inputElement.value <= 0) {
            errorElement.style.display = "block";
            isValid = false;
        } else {
            errorElement.style.display = "none";
        }
    });

    return isValid;
}

function calculateTax() {
    // Validate inputs before calculating tax
    if (!validateInputs()) {
        return;
    }

    // Get input values
    const grossAnnualIncome = parseFloat(document.getElementById("grossAnnualIncome").value);
    const extraIncome = parseFloat(document.getElementById("extraIncome").value);
    const deductions = parseFloat(document.getElementById("deductions").value);
    const ageGroup = document.getElementById("ageGroup").value;

    // Calculate tax amount based on age group and overall income
    let taxAmount = 0;

    if (ageGroup === "under40") {
        taxAmount = grossAnnualIncome * 0.1 + extraIncome * 0.2 - deductions;
    } else if (ageGroup === "fortyToSixty") {
        taxAmount = grossAnnualIncome * 0.15 + extraIncome * 0.25 - deductions;
    } else if (ageGroup === "over60") {
        taxAmount = grossAnnualIncome * 0.2 + extraIncome * 0.3 - deductions;
    }

    // Round tax amount to two decimal places
    taxAmount = Math.round(taxAmount * 100) / 100;

    // Display tax amount
    document.getElementById("result").style.display = "block";
    document.getElementById("taxAmount").textContent = taxAmount;
}