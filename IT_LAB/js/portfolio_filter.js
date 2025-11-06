const filterButtons = document.querySelectorAll('.filter-btn');
const caseCards = document.querySelectorAll('.case');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        filterButtons.forEach(btn => btn.classList.remove('active'));

        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        caseCards.forEach(card => {
            if (filterValue === 'all') {
                card.classList.remove('hidden');
            }
            else {
                if (card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hidden');
                }
                else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});