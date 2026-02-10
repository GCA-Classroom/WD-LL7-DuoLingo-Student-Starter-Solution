let xpTotal = 0;
const xpRewards = [10, 15, 20];

const xpDisplay = document.getElementById("xp-total");
const button = document.getElementById("complete-lesson");
const feedback = document.getElementById("feedback");

button.addEventListener("click", function () {
  const earnedXP = xpRewards[Math.floor(Math.random() * xpRewards.length)];
  xpTotal += earnedXP;
  xpDisplay.textContent = xpTotal;

  // Conditional outcomes (example solution)
  if (xpTotal < 50) {
    feedback.textContent = `Nice start! You earned ${earnedXP} XP 👍`;
    feedback.className = "good text-center";
  } else if (xpTotal >= 50 && xpTotal < 100) {
    feedback.textContent = `You're on a streak! 🔥 +${earnedXP} XP`;
    feedback.className = "mid text-center";
  } else {
    feedback.textContent = `LEVEL UP! 🎉 You're crushing it!`;
    feedback.className = "great text-center";
  }
});
