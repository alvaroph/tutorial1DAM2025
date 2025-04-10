// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Simple category filter functionality
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) {
    categoryFilter.addEventListener('change', function() {
      const selectedCategory = this.value;
      const cards = document.querySelectorAll('.moto-card-container');
      
      cards.forEach(card => {
        if (selectedCategory === 'all') {
          card.style.display = 'block';
        } else {
          const cardCategory = card.getAttribute('data-category');
          card.style.display = (cardCategory === selectedCategory) ? 'block' : 'none';
        }
      });
    });
  }
  
  // Simple search functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const cards = document.querySelectorAll('.moto-card-container');
      
      cards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        card.style.display = cardText.includes(searchTerm) ? 'block' : 'none';
      });
    });
  }
  
  // Add click event to cards for simple details
  const motoCards = document.querySelectorAll('.moto-card');
  motoCards.forEach(card => {
    card.addEventListener('click', function() {
      const motoId = this.getAttribute('data-moto-id');
      const motoName = this.querySelector('.card-title').textContent;
      
      // Simple interaction - can be expanded to show a modal with more details
      alert(`You selected ${motoName} (ID: ${motoId}). Click OK to see details.`);
      window.location.href = `/motorcycles/${motoId}/edit`;
    });
  });
}); 