const form = document.getElementById("bmi-form");
const resultText = document.getElementById("result-text");
const resultCategory = document.getElementById("result-category");
const bmiPointer = document.getElementById("bmi-pointer");
const nameInput = document.getElementById("name");
const heightInput = document.getElementById("ht");
const weightInput = document.getElementById("wt");

const fatImage = document.getElementById("fat");
const thinImage = document.getElementById("thin");
const normalImage = document.getElementById("normal");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const button = e.target.querySelector("button");
    button.disabled = true;
    button.innerText = "Calculating...";

    const name = nameInput.value.trim();
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    // Reset results
    resultText.innerText = "Your Result";
    resultCategory.innerText = "";
    bmiPointer.style.left = `0%`;

    setTimeout(() => {
        if (!name || height <= 0 || weight <= 0) {
            resultText.innerText = "Error";
            resultCategory.innerText = "Please fill out all fields correctly.";
        } else {
            const heightInMeters = height / 100;
            const bmi = weight / (heightInMeters ** 2);
            resultText.innerText = `Your BMI is ${bmi.toFixed(1)}`;

            let category = "";
            if (bmi < 18.5) {
                category = "Underweight";
            } else if (bmi >= 18.5 && bmi < 25) {
                category = "Normal weight";
            } else if (bmi >= 25 && bmi < 30) {
                category = "Overweight";
            } else {
                category = "Obesity";
            }
            resultCategory.innerText = category;

            // Update gauge pointer
            const bmiRange = 40; // Assuming a max BMI of 40 for the gauge
            let pointerPercentage = (bmi / bmiRange) * 100;
            if (pointerPercentage > 100) pointerPercentage = 100;
            bmiPointer.style.left = `${pointerPercentage}%`;
        }

        button.disabled = false;
        button.innerText = "Calculate BMI";
    }, 500);
});