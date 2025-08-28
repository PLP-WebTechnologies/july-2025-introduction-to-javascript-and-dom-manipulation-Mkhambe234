// Variables & Conditionals
    function checkAge() {
      const age = document.getElementById("ageInput").value;
      let message = "";

      if (age >= 18) {
        message = `You are ${age} years old. Eligible to vote!`;
      } else if (age > 0) {
        message = `You are ${age} years old. Not eligible yet.`;
      } else {
        message = "Please enter a valid age.";
      }

      document.getElementById("ageOutput").textContent = message;
    }
 // Functions
    function calculateSum() {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);

      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sumOutput").textContent =
          "Please enter valid numbers.";
        return;
      }

      const sum = num1 + num2;
      document.getElementById("sumOutput").textContent =
        `The sum of ${num1} + ${num2} = ${sum}`;
    }

// Loops
    function listNumbers() {
      let numbers = "";
      for (let i = 1; i <= 10; i++) {
        numbers += i + (i < 10 ? ", " : "");
      }
      document.getElementById("loopOutput").textContent = numbers;
    }

// DOM Manipulation
    function changeColor() {
      const colors = ["#f4f6fa", "#ffefef", "#e8ffe8", "#e6f7ff", "#fffbe6"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.background = randomColor;
      document.getElementById("colorOutput").textContent =
        ` Background changed to ${randomColor}`;
    }
