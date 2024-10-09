document.addEventListener('DOMContentLoaded', function () {

    const filters = document.querySelectorAll('.check');
    const products = document.querySelectorAll('.item');
    const searchInput = document.getElementById('search');
    const cartCounts = document.getElementById('cart-count');
    let cartCount = 0; 


    const addToCartButtons = document.querySelectorAll('.item-btn');

    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        cartCount++; 
        cartCounts.textContent = cartCount; 
      });
    });

    // Filter products
    filters.forEach(filter => {
      filter.addEventListener('change', filterProducts);
    });

   

    //search input
    searchInput.addEventListener('input', filterProducts);

    function filterProducts() {
      const activeFilters = Array.from(filters).filter(filter => filter.checked).map(filter => filter.id);
      const searchTerm = searchInput.value.toLowerCase();

      products.forEach(product => {
        const category = product.classList[1];
        const name = product.querySelector('h3').textContent.toLowerCase();

        const matchesCategory = activeFilters.includes('all') || activeFilters.includes(category);
        const matchesSearch = name.includes(searchTerm);

        if (matchesCategory && matchesSearch) {
          product.classList.remove('hidden');
        } else {
          product.classList.add('hidden');
        }
      });
    }

    // Initialise filtering
    filterProducts();
  });