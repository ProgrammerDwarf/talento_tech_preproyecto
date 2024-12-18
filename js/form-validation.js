// form-validation.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact_page__form");
  
    form.addEventListener("submit", (event) => {
      // Prevent form submission for validation
      event.preventDefault();
  
      // Retrieve form inputs
      const nameInput = document.querySelector("#name");
      const emailInput = document.querySelector("#email");
      const messageInput = document.querySelector("#message");
  
      // Define validation patterns
      const namePattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  
      // Validation flags
      let isValid = true;
  
      // Validate name
      if (!namePattern.test(nameInput.value.trim())) {
        showError(nameInput, "Por favor, ingrese un nombre válido.");
        isValid = false;
      } else {
        clearError(nameInput);
      }
  
      // Validate email
      if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, "Por favor, ingrese un correo electrónico válido.");
        isValid = false;
      } else {
        clearError(emailInput);
      }
  
      // Validate message
      if (messageInput.value.trim() === "") {
        showError(messageInput, "El mensaje no puede estar vacío.");
        isValid = false;
      } else {
        clearError(messageInput);
      }
  
      // Submit the form if valid
      if (isValid) {
        form.submit();
      }
    });
  
    // Show error message
    function showError(input, message) {
      let error = input.nextElementSibling;
      if (!error || !error.classList.contains("error-message")) {
        error = document.createElement("span");
        error.classList.add("error-message");
        input.parentNode.appendChild(error);
      }
      error.textContent = message;
      input.classList.add("is-invalid");
    }
  
    // Clear error message
    function clearError(input) {
      const error = input.nextElementSibling;
      if (error && error.classList.contains("error-message")) {
        error.remove();
      }
      input.classList.remove("is-invalid");
    }
  });
  