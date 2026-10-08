const form = document.getElementById("feedbackForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const rating = document.getElementById("rating").value;
    const feedback = document.getElementById("feedback").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    if (rating === "") {
        message.textContent = "Please select a rating.";
        message.style.color = "red";
        return;
    }

    if (feedback.length < 10) {
        message.textContent = "Feedback must contain at least 10 characters.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Feedback submitted successfully!";
    message.style.color = "green";

    form.reset();
});

form.addEventListener("reset", function() {
    message.textContent = "";
});