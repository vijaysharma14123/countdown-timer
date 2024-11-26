// Timer Duration: Set for 10 minutes (600 seconds)
console.log("Countdown timer script is running!");

const timerDuration = 600;
let timeLeft = timerDuration;

// Create a container for the timer
const timerContainer = document.createElement("div");
timerContainer.id = "order-timer";
timerContainer.style = `
  font-size: 16px;
  color: red;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
`;

// Append the timer container to the checkout page
const targetElement = document.querySelector("#checkout-main");
if (targetElement) {
  targetElement.prepend(timerContainer);
} else {
  console.error("Target element #checkout-main not found");
}

// Update the timer every second
const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerContainer.textContent = `Order reserved for the next ${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
  timeLeft--;

  // Stop the timer when time runs out
  if (timeLeft < 0) {
    timerContainer.textContent = "Reservation expired. Please refresh the page.";
    clearInterval(timerInterval);
  }
};

// Start the countdown timer
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
