document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();


    const answers = {
      q1: document.querySelector('input[name="q1"]:checked').value,
      q2: document.querySelector('input[name="q2"]:checked').value,
      q3: document.querySelector('input[name="q3"]:checked').value,
      q4: [...document.querySelectorAll('input[name="q4[]"]:checked')].map(input => input.value),
      q5: document.querySelector('textarea[name="q5"]').value,
      q6: document.querySelector('select[name="q6"]').value
    };


    let score = 0;
    if (answers.q1 === "b") score++;
    if (answers.q2 === "c") score++;
    if (answers.q3 === "a") score++;
    if (answers.q4.includes("a") && answers.q4.includes("b") && !answers.q4.includes("c") && !answers.q4.includes("d")) score++;
    if (answers.q5.trim() !== "") score++;
    if (answers.q6 === "b") score++;


    const percentage = (score / 6) * 100;

    // Выводим результат
    alert(`Ваша оценка: ${score} из 6 (${percentage}%).`);
  });
});
