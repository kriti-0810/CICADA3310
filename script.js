window.onload = function() {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000);
};

function checkRiddle() {
    const answer = document.getElementById("riddleAnswer").value.toLowerCase();
    const result = document.getElementById("riddleResult");
    if (answer === "technogreen solutions" || answer === "technogreen") {
        result.textContent = "Correct! TechnoGreen Solutions is the environmental innovator.";
        result.style.color = "#00ff00";
    } else {
        result.textContent = "Not quite. Try again!";
        result.style.color = "#ff0000";
    }
}

function checkCaesar() {
    const answer = document.getElementById("caesarInput").value.toLowerCase();
    const result = document.getElementById("caesarResult");
    if (answer === "innovation for a sustainable future") {
        result.textContent = "Decoded! You've uncovered a core value of TechnoGreen.";
        result.style.color = "#00ff00";
    } else {
        result.textContent = "Not correct. Keep decoding!";
        result.style.color = "#ff0000";
    }
}

function checkBinary() {
    const answer = document.getElementById("binaryInput").value.toLowerCase();
    const result = document.getElementById("binaryResult");
    if (answer === "knowledge consulting") {
        result.textContent = "Decoded! You've revealed a key service of TechnoGreen.";
        result.style.color = "#00ff00";
    } else {
        result.textContent = "Not quite. Try decoding again!";
        result.style.color = "#ff0000";
    }
}

function checkReverse() {
    const answer = document.getElementById("reverseInput").value.toLowerCase();
    const result = document.getElementById("reverseResult");
    if (answer === "environmental technology") {
        result.textContent = "Correct! You've uncovered another core competency of TechnoGreen.";
        result.style.color = "#00ff00";
    } else {
        result.textContent = "Not right. Reverse your thinking!";
        result.style.color = "#ff0000";
    }
}

function checkAllCompleted() {
    const riddleResult = document.getElementById("riddleResult").textContent;
    const caesarResult = document.getElementById("caesarResult").textContent;
    const binaryResult = document.getElementById("binaryResult").textContent;
    const reverseResult = document.getElementById("reverseResult").textContent;

    if (riddleResult.includes("Correct") && 
        caesarResult.includes("Decoded") && 
        binaryResult.includes("Decoded") && 
        reverseResult.includes("Correct")) {
        document.getElementById("final-message").style.display = "block";
    }
}

// Add event listeners to all verification buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", checkAllCompleted);
});