document.addEventListener('DOMContentLoaded', () => {
    const viewButtons = document.querySelectorAll('.view-btn');
  
    viewButtons.forEach(button => {
      button.addEventListener('click', () => {
        const apiType = button.dataset.apiType;
        const detailsSection = document.querySelector(`.api-details[data-api-type="${apiType}"]`);

        detailsSection.style.display = detailsSection.style.display === 'none' ? 'block' : 'none';
      });
    });
  });
  