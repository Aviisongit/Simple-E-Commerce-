document.addEventListener("DOMContentLoaded", function() {
    const cartItems = [];
    const cartTotalElement = document.getElementById("cart-total");
    const cartItemsElement = document.getElementById("cart-items");
    const paymentForm = document.getElementById("payment-form");
    const paymentStatus = document.getElementById("payment-status");

    // Product filter functionality
    const productFilter = document.getElementById("product-filter");
    const products = document.querySelectorAll(".product");

    productFilter.addEventListener("change", function() {
        const filterValue = this.value;
        products.forEach(product => {
            if (filterValue === "all" || product.id === filterValue) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
    document.getElementById('product-filter').addEventListener('change', function() {
        const selectedCategory = this.value;
        const products = document.querySelectorAll('.product');
    
        products.forEach(product => {
            const category = product.getAttribute('data-category');
    
            if (selectedCategory === 'all' || category === selectedCategory) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
    
    // Cart functionality remains unchanged
    
    // Adding items to cart
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const itemName = this.getAttribute("data-name");
            const itemPrice = parseFloat(this.getAttribute("data-price"));

            // Adds item to checkout cart 
            cartItems.push({ name: itemName, price: itemPrice });

            // Updates the cart for the user to see
            updateCart();
        });
    });

    function updateCart() {
        // Clears the current cart items
        cartItemsElement.innerHTML = "";

        let total = 0;

        // Displays each item selected in the cart
        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsElement.appendChild(li);

            total += item.price;
        });

        // Updates the total price
        cartTotalElement.textContent = total.toFixed(2);
    }

    // Handles the payment 
    paymentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const cardNumber = document.getElementById("card-number").value;
        const expiry = document.getElementById("expiry").value;
        const cvc = document.getElementById("cvc").value;
        
        // Simulated payment processing
        if (name && cardNumber && expiry && cvc) {
            paymentStatus.textContent = "Payment successful! Thank you for your purchase.";
            paymentStatus.style.color = "green";
        } else {
            paymentStatus.textContent = "Please fill in all payment details.";
            paymentStatus.style.color = "red";
        }
    });
});
