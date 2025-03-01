function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let feet = parseFloat(document.getElementById("feet").value);
    let inches = parseFloat(document.getElementById("inches").value);
    
    if (isNaN(weight) || isNaN(feet) || isNaN(inches) || feet <= 0) {
        document.getElementById("result").textContent = "Please enter valid values!";
        return;
    }
    
    let heightInCm = (feet * 30.48) + (inches * 2.54); // Convert feet and inches to cm
    let heightInMeters = heightInCm / 100; // Convert cm to meters
    
    let bmi = weight / (heightInMeters * heightInMeters);
    let category = "";
    
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    
    document.getElementById("result").textContent = `Your BMI: ${bmi.toFixed(2)} (${category})`;
}