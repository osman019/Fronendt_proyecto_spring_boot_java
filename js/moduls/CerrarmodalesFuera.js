export function CerrarmodalesFuera(){
    const loginModal = document.getElementById("login-modal")
    const registerModal = document.getElementById("register-modal")

    window.addEventListener("click", (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove("active")
        }
        if (e.target === registerModal) {
            registerModal.classList.remove("active")
        }
    })
}