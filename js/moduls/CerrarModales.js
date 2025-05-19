export function CerrarModales() {
    const loginModal = document.getElementById("login-modal")
    const registerModal = document.getElementById("register-modal")
    const closeLoginBtn = document.getElementById("close-login")
    const closeRegisterBtn = document.getElementById("close-register")

    closeLoginBtn.addEventListener("click", () => {
        loginModal.classList.remove("active")
    })

    closeRegisterBtn.addEventListener("click", () => {
        registerModal.classList.remove("active")
    })
}