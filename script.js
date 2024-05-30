document.addEventListener('DOMContentLoaded', function() {
    // This part is used for the contact form validation
    const form = document.querySelector('#contact-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            const email = form.querySelector('input[name="email"]').value;
            const message = form.querySelector('textarea[name="message"]').value;
            
            // In here it works to check if email or message is empty
            if (!email || !message) {
                event.preventDefault(); // This will prevent form submission
                alert('Please fill out all fields.'); // It works to show alert message
            }
        });
    }

    // Dark mode
    const toggleSlider = document.getElementById('toggle-dark-mode');
    const sliderButton = toggleSlider.querySelector('.slider-button');
    
    toggleSlider.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    });

    // Typewriter 
    const typewriterElement = document.querySelector('#intro .description p');
    const text = "Hi I am Kristan! Feel free to explore my portfolio!";
    let index = 0;
    const speed = 1.65 * 100; // 1.65 seconds per character is used
    const delayBetweenLoops = 1000;

    function type() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index); // Add next character
            index++;
            setTimeout(type, speed); // Set timeout for next character
        } else {
            setTimeout(() => {
                typewriterElement.textContent = ''; // Clear text
                index = 0;
                setTimeout(type, speed); // Restart typing
            }, delayBetweenLoops);
        }
    }

    type(); // Start typing effect

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const sectionId = this.getAttribute('href').substring(1); // Get section ID
            const section = document.getElementById(sectionId); // Get section element
            section.scrollIntoView({ behavior: 'smooth' }); // Scroll to section smoothly
        });
    });
});
