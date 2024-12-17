// Product data array
const products = [
    { id: "1", name: "Premium Widget" },
    { id: "2", name: "Super Gadget" },
    { id: "3", name: "Mega Tool" },
    { id: "4", name: "Ultra Device" }
];

// Populate product options dynamically
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Handle form submission and review counter using localStorage
    const form = document.getElementById('review-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Increment review count in localStorage
        let reviewCount = localStorage.getItem('reviewCount');
        reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
        localStorage.setItem('reviewCount', reviewCount);

        // Redirect to review confirmation page (review.html)
        window.location.href = 'review.html';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Variables para las estrellas y la calificación
    const stars = document.querySelectorAll('.rating input[type="radio"]');
    const starLabels = document.querySelectorAll('.rating label');
    let selectedRating = 0;  // Calificación inicial

    // Llenado dinámico de las estrellas basadas en el estado actual de la calificación
    function updateStars() {
        stars.forEach((star, index) => {
            // Si el índice de la estrella es menor que la calificación, la estrella se llena
            if (index < selectedRating) {
                starLabels[index].style.color = '#dc384e'; // Color de la estrella llena
            } else {
                starLabels[index].style.color = '#ccc'; // Color de la estrella vacía
            }
        });
    }

    // Event listener para cada estrella (radio button)
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            selectedRating = index + 1;  // Asignamos la calificación basada en la estrella seleccionada
            updateStars();
        });
    });

    // Muestra la calificación seleccionada cuando el formulario se envía
    const form = document.getElementById('review-form');
    form.addEventListener('submit', function() {
        // Asignamos el valor de la calificación al campo oculto de la estrella
        const ratingInput = document.getElementById('rating');
        ratingInput.value = selectedRating;
    });

    // Inicializamos el estado visual de las estrellas
    updateStars();
});
