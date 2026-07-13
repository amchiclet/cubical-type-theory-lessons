/* Reusable retrieval-practice widgets for the CTT course.
   Two widgets, both give immediate automatic feedback (tight feedback loop).

   1) Multiple choice — <div class="quiz" data-answer="B"> ... </div>
        <p class="q">Question text</p>
        <button class="opt" data-key="A">option one</button>
        <button class="opt" data-key="B">option two</button>
        <div class="explain">Shown after any answer.</div>

   2) Retrieval flip — recall from memory FIRST, then check.
        <div class="reveal">
          <p class="prompt">Explain X in your own words.</p>
          <div class="answer">Model answer, hidden until revealed.</div>
        </div>

   Answers are deliberately styled identically (no length/format tells). */

document.addEventListener("DOMContentLoaded", function () {
  // ---- Multiple choice ----
  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var answer = quiz.getAttribute("data-answer");
    var explain = quiz.querySelector(".explain");
    if (explain) explain.style.display = "none";
    var done = false;

    quiz.querySelectorAll(".opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (done) return;
        done = true;
        var chosen = btn.getAttribute("data-key");
        quiz.querySelectorAll(".opt").forEach(function (b) {
          var k = b.getAttribute("data-key");
          b.disabled = true;
          if (k === answer) b.classList.add("correct");
          else if (k === chosen) b.classList.add("wrong");
        });
        if (explain) explain.style.display = "block";
      });
    });
  });

  // ---- Retrieval flip ----
  document.querySelectorAll(".reveal").forEach(function (card) {
    var ans = card.querySelector(".answer");
    if (!ans) return;
    ans.style.display = "none";
    var btn = document.createElement("button");
    btn.className = "reveal-btn";
    btn.textContent = "Show a model answer";
    btn.addEventListener("click", function () {
      var open = ans.style.display === "block";
      ans.style.display = open ? "none" : "block";
      btn.textContent = open ? "Show a model answer" : "Hide";
    });
    card.appendChild(btn);
  });
});
