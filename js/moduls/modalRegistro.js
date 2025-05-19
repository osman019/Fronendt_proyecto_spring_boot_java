export function modalRegistro(){
    const registerModal = document.getElementById("register-modal")
    const registerBtn = document.getElementById("register-btn")
    const mobileRegisterBtn = document.getElementById("mobile-register-btn")
    
    registerBtn.addEventListener("click", () => {
        registerModal.classList.add("active")
    })

    mobileRegisterBtn.addEventListener("click", () => {
        registerModal.classList.add("active")
        mobileNav.classList.remove("active")
    })

}