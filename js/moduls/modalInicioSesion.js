export function modalInicioSesion(){
    const loginModal = document.getElementById("login-modal")
    const loginBtn = document.getElementById("login-btn")
    const mobileLoginBtn = document.getElementById("mobile-login-btn")
    const mobileNav = document.getElementById("mobile-nav");
    
    loginBtn.addEventListener("click", () => {
        loginModal.classList.add("active")
    })

    mobileLoginBtn.addEventListener("click", () => {
        loginModal.classList.add("active")
        mobileNav.classList.remove("active")
    })
}