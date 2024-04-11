document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    if (username === "") {
      alert("Пожалуйста, введите ваше имя.");
      return;
    }

    const answers = {
      q1: document.querySelector('input[name="q1"]:checked'),
      q2: document.querySelector('input[name="q2"]:checked'),
      q3: document.querySelector('input[name="q3"]:checked'),
      q4: document.querySelectorAll('input[name="q4[]"]:checked'),
      q5: document.querySelector('textarea[name="q5"]').value.trim(),
      q6: document.querySelector('select[name="q6"]').value
    };


    if (!answers.q1 || !answers.q2 || !answers.q3 || answers.q4.length === 0 || !answers.q5 || answers.q6 === "") {
      alert("Пожалуйста, заполните все обязательные поля.");
      return; 
    }


    let score = 0;
    if (answers.q1.value === "b") score++;
    if (answers.q2.value === "c") score++;
    if (answers.q3.value === "a") score++;
    if (answers.q4.length === 2) score++;
    if (answers.q5 !== "") score++;
    if (answers.q6 === "b") score++;

  
    let grade = "";
    if (score === 0 || score === 1) {
      grade = "1 - Неудовлетворительно";
    } else if (score === 2 || score === 3) {
      grade = "2 - Неудовлетворительно";
    } else if (score === 4 || score === 5) {
      grade = "3 - Удовлетворительно";
    } else if (score === 6 || score === 7) {
      grade = "4 - Хорошо";
    } else if (score === 8 || score === 9 || score === 10) {
      grade = "5 - Отлично";
    }

    alert(`Имя: ${username}\nОценка: ${grade}.`);
  });
});
