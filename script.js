document.addEventListener("DOMContentLoaded", () => {
    const loginModal = document.getElementById("login-modal");
    const loginBtn = document.getElementById("login-btn");
    const closeModal = document.querySelector(".close");

    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = "none";
        }
    });

    document.getElementById("submit-login").addEventListener("click", () => {
        alert("Login functionality not implemented yet!");
    });
});
