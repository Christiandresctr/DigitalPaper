// JavaScript personalizado para El diario de la Comunidad
document.addEventListener('DOMContentLoaded', function() {
  console.log('El diario de la Comunidad - Inicializado');
  
  // Manejar el formulario de búsqueda
  const searchForm = document.querySelector('form.d-flex');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchInput = this.querySelector('input[type="search"]');
      const searchTerm = searchInput.value.trim();
      
      if (searchTerm) {
        alert(`Buscando: "${searchTerm}"`);
      } else {
        alert('Por favor, ingresa un término de búsqueda');
      }
    });
  }
  
  // Volver arriba con animación suave
  const backToTop = document.querySelector('.float-end a');
  if (backToTop) {
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});