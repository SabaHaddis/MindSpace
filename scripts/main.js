
    const waitlistForm = document.querySelector('.waitlist-form');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (event) => {
            const emailInput = waitlistForm.querySelector('input[type="email"]');
            if (!emailInput.value || !isValidEmail(emailInput.value)) {
                event.preventDefault(); // Prevent form submission
                alert('Please enter a valid email address.');
                emailInput.focus();
            } else {
                event.preventDefault(); // Prevent default for demo
                alert('Thank you for joining the waitlist!');
                emailInput.value = '';
            }
        });
    }

    function isValidEmail(email) {
        // Basic regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');

    const answer = button.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

function downloadApp() {
  alert("Redirecting to download...");
}


