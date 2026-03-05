document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for "Comprar agora" buttons
    const catalogSection = document.getElementById('catalog');
    
    // Find all buttons/links that should scroll to catalog
    // In the React app, this was passed as onScrollToCatalog prop
    // We'll identify them by a specific class or ID
    const scrollTriggers = document.querySelectorAll('.js-scroll-to-catalog');
    
    scrollTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
