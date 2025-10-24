document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('interestForm');
    const formMessage = document.getElementById('formMessage');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(email)) {
            // In a real application, this would send data to a backend
            formMessage.textContent = 'Thanks! We\'ll notify you when we launch.';
            formMessage.className = 'form-message success';
            form.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        } else {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.className = 'form-message error';
        }
    });
});
