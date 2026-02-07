// Get dropdown and class cards
const filterDropdown = document.getElementById('class-filter');
const classCards = document.querySelectorAll('.class-card');

// Filter function
filterDropdown.addEventListener('change', (e) => {
    const filterValue = e.target.value;
    
    classCards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        const cardTime = card.getAttribute('data-time');
        
        if (filterValue === 'all') {
            card.style.display = 'block';
        } else if (cardType === filterValue || cardTime === filterValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});