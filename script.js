const questions = document.querySelectorAll('.questions');
let prevAns = null;
let prevQuestion = null;

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const ans = question.nextElementSibling;

        // Close previous answer if different from the current one
        if (prevAns && prevAns !== ans) {
            prevAns.classList.remove('show');
            prevAns.style.display = "none";
            prevQuestion.classList.remove("open");
        }

        // Toggle current answer
        if (!ans.classList.contains("show")) {
            ans.classList.add('show');
            ans.style.display = "block";
            question.classList.add("open");
            prevAns = ans;
            prevQuestion = question;
        } else {
            ans.classList.remove('show');
            ans.style.display = "none";
            question.classList.remove("open");
            prevAns = null;
            prevQuestion = null;
        }
    });
});
