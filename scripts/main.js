
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
document.addEventListener('DOMContentLoaded', function() {
            const track = document.querySelector('.testimonials-track');
            const wrapper = document.querySelector('.testimonials-wrapper');
            const cards = document.querySelectorAll('.testimonial-card');
            
            // Duplicate cards to create seamless loop
            cards.forEach(card => {
                const clone = card.cloneNode(true);
                track.appendChild(clone);
            });
            
            // Animation variables
            let animationId;
            let speed = 0.5; // pixels per frame
            let direction = -1; // -1 for left, 1 for right
            let position = 0;
            const cardWidth = cards[0].offsetWidth + 30; // width + gap
            
            // Start animation
            function animate() {
                position += speed * direction;
                
                // Reset position when we've scrolled one set of cards
                if (direction === -1 && position < -cardWidth * cards.length) {
                    position = 0;
                } else if (direction === 1 && position > 0) {
                    position = -cardWidth * cards.length;
                }
                
                track.style.transform = `translateX(${position}px)`;
                animationId = requestAnimationFrame(animate);
            }
            
            // Start the animation
            animate();
        });


