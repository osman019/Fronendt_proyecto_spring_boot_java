import { cambiarImagen } from "./moduls/cambiarImagen.js";
import { configurarMenuHamburguesa } from "./moduls/Hamburger.js";
import { cerrarMenu } from "./moduls/cerrarMenu.js";
import { ajustarLayout } from "./moduls/adjustLayout.js";
import { modalInicioSesion } from "./moduls/modalInicioSesion.js";
import { modalRegistro } from "./moduls/modalRegistro.js";
import { CerrarModales } from "./moduls/CerrarModales.js";
import { CerrarmodalesFuera } from "./moduls/CerrarmodalesFuera.js";
import { configurarFormularios, restaurarSesion } from "./moduls/formularios.js"; 
import { configurarNavegacion } from "./moduls/navegacion.js";
import { configurarPanelCliente } from "./moduls/panelCliente.js";
import { configurarPanelProveedor } from "./moduls/panelProveedor.js";
import { configurarFiltros } from "./moduls/filtros.js";
import { configurarReservas } from "./moduls/reservas.js";
import { configurarHerramientas } from "./moduls/herramientas.js";
import { configurarPedidos } from "./moduls/pedidos.js";
import { configurarDevoluciones } from "./moduls/devoluciones.js";
import { mostrarHerramientas } from "./api/MostrarHerramienta.js";

console.log("Archivo main.js cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
  try {
    console.log("Inicializando módulos...");

    // UI y layout
    cambiarImagen();
    configurarMenuHamburguesa();
    cerrarMenu();
    ajustarLayout();

    // Modales
    modalInicioSesion();
    modalRegistro();
    CerrarModales();
    CerrarmodalesFuera();

    // Formularios y restauración de sesión
    configurarFormularios();
    restaurarSesion();

    // Navegación y paneles
    configurarNavegacion();
    configurarPanelCliente();
    configurarPanelProveedor();

    // Funcionalidades
    configurarFiltros();
    configurarReservas();
    configurarHerramientas();
    configurarPedidos();
    configurarDevoluciones();

    // Ocultar paneles al inicio
    ocultarPaneles();

    console.log("Todos los módulos inicializados correctamente");
  } catch (error) {
    console.error("Error al inicializar los módulos:", error);
  }
});

function ocultarPaneles() {
  const clientePanel = document.getElementById("cliente-panel");
  const mobileClientePanel = document.getElementById("mobile-cliente-panel");
  const proveedorPanel = document.getElementById("proveedor-panel");
  const mobileProveedorPanel = document.getElementById("mobile-proveedor-panel");

  if (clientePanel) clientePanel.style.display = "none";
  if (mobileClientePanel) mobileClientePanel.style.display = "none";
  if (proveedorPanel) proveedorPanel.style.display = "none";
  if (mobileProveedorPanel) mobileProveedorPanel.style.display = "none";

  const paneles = [
    "panel-productos",
    "panel-reservas",
    "panel-mis-herramientas",
    "panel-agregar-herramienta",
    "panel-pedidos-pendientes",
    "panel-devoluciones",
  ];

  paneles.forEach((id) => {
    const panel = document.getElementById(id);
    if (panel) panel.style.display = "none";
  });

  const registerTipo = document.getElementById("register-tipo");
  if (registerTipo) {
    registerTipo.addEventListener("change", function () {
      const telefonoContainer = document.querySelector(".telefono-container");
      if (telefonoContainer) {
        telefonoContainer.style.display = this.value === "proveedor" ? "block" : "none";
      }
    });
  }
}
