export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function configurarFormularios() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit);
  }

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegisterSubmit);
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  let isValid = true;

  if (!validateEmail(email)) {
    document.getElementById("login-email-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("login-email-error").style.display = "none";
  }

  if (password.length < 6) {
    document.getElementById("login-password-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("login-password-error").style.display = "none";
  }

  if (!isValid) return;

  const loginData = {
    username: email,
    password: password,
  };

  fetch("http://localhost:8080/auth/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Credenciales incorrectas");
      return response.json();
    })
    .then((data) => {
      const serverRole = (data.role || "").toUpperCase().trim();

      // Guardar datos
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("tipoUsuario", serverRole);

      // Cerrar modal y ocultar contenido principal
      document.getElementById("login-modal").classList.remove("active");
      document.getElementById("contenido-principal").style.display = "none";

      // Redirigir según rol
      switch (serverRole) {
        case "ROLE_CUSTOMER":
          import("./panelCliente.js").then((module) => {
            module.mostrarPanelCliente(email.split("@")[0]);
            module.mostrarProductos();
          });
          break;
        case "ROLE_SUPPLIER":
          import("./panelProveedor.js").then((module) => {
            module.mostrarPanelProveedor(email.split("@")[0]);
            module.mostrarMisHerramientas();
          });
          break;
        case "ROLE_ADMINISTRATOR":
          import("../admin/modules/panelAdmin.js").then((module) => {
            module.mostrarPanelAdmin(email.split("@")[0]);
          });
          break;
        default:
          alert("Rol no reconocido, contacte al administrador.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error al iniciar sesión: " + error.message);
    });
}

function handleRegisterSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("register-confirm-password").value;
  const tipoUsuario = document.getElementById("register-tipo").value.toLowerCase();
  const telefono = document.getElementById("register-telefono").value;

  let isValid = true;

  if (name.trim() === "") {
    document.getElementById("register-name-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("register-name-error").style.display = "none";
  }

  if (!validateEmail(email)) {
    document.getElementById("register-email-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("register-email-error").style.display = "none";
  }

  if (password.length < 6) {
    document.getElementById("register-password-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("register-password-error").style.display = "none";
  }

  if (password !== confirmPassword) {
    document.getElementById("register-confirm-password-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("register-confirm-password-error").style.display = "none";
  }

  // Teléfono obligatorio para proveedor y cliente (según tu código original)
  if ((tipoUsuario === "proveedor" || tipoUsuario === "customer") && telefono.trim() === "") {
    document.getElementById("register-telefono-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("register-telefono-error").style.display = "none";
  }

  if (!isValid) return;

  const data = {
    name,
    telefono,
    username: email,
    password,
    repeatedPassword: confirmPassword,
  };

  const url =
    tipoUsuario === "proveedor"
      ? "http://localhost:8080/suppliers"
      : "http://localhost:8080/customers";

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("userId", data.id);

      document.getElementById("register-modal").classList.remove("active");
      document.getElementById("contenido-principal").style.display = "none";

      if (tipoUsuario === "cliente" || tipoUsuario === "customer") {
        import("./panelCliente.js").then((module) => {
          module.mostrarPanelCliente(name);
          module.mostrarProductos();
        });
      } else if (tipoUsuario === "proveedor") {
        import("./panelProveedor.js").then((module) => {
          module.mostrarPanelProveedor(name);
          module.mostrarMisHerramientas();
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Ocurrió un error al registrar el usuario.");
    });
}
