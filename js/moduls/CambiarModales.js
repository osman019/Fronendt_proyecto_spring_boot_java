export function CambiarModales(){
    const loginModal = document.getElementById("login-modal")
    const registerModal = document.getElementById("register-modal")
    const switchToRegister = document.getElementById("switch-to-register")
    const switchToLogin = document.getElementById("switch-to-login")

    switchToRegister.addEventListener("click", () => {
        loginModal.classList.remove("active")
        registerModal.classList.add("active")
    })

    switchToLogin.addEventListener("click", () => {
        registerModal.classList.remove("active")
        loginModal.classList.add("active")
    })
}