document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Validación del formulario de login
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        document.querySelector(".container").classList.add("hidden");
        document.getElementById("payment-form").classList.remove("hidden");
    }
});
