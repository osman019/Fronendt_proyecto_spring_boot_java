# Proyecto Frontend - Gestión de Proveedores y Herramientas

Este proyecto es una aplicación frontend desarrollada en JavaScript que consume una API REST construida con Spring Boot. Permite gestionar proveedores, herramientas y reservas, mostrando información relevante tanto para clientes como para proveedores.

## Características

- **Gestión de Proveedores:**  
  - Listar, crear, actualizar y eliminar proveedores.
  - Consultar proveedor por ID.

- **Gestión de Herramientas:**  
  - Listar herramientas disponibles.
  - Mostrar herramientas por proveedor.
  - Visualización de imágenes de herramientas (en base64).
  - Reservar herramientas (para clientes).

- **Autenticación:**  
  - Manejo de tokens JWT para autenticación de usuarios y proveedores.

- **Interfaz de Usuario:**  
  - Paneles diferenciados para clientes y proveedores.
  - Visualización de tablas y tarjetas con información relevante.
  - Manejo de errores y mensajes amigables.

## Estructura del Proyecto

```
Fronendt_proyecto_spring_boot_java/
│
├── js/
│   ├── api/
│   │   ├── ApiSupplier.js
│   │   ├── mostrarHerramientasProveedor.js
│   │   └── MostrarHerramienta.js
│   └── moduls/
│       └── panelProveedor.js
│
├── img/
│   └── default.png
│
├── index.html
└── README.md
```

## Instalación y Ejecución

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/osman019/Fronendt_proyecto_spring_boot_java.git
   ```

2. **Configura el backend:**  
   Asegúrate de tener el backend de Spring Boot corriendo en `http://localhost:8080`.

3. **Abre el frontend:**  
   Puedes abrir `index.html` directamente en tu navegador o servirlo con una extensión como Live Server en VS Code.

4. **Configura el almacenamiento local:**  
   El frontend utiliza `localStorage` para manejar el token JWT y el `userId` del usuario autenticado.

## Uso

- Navega por las diferentes secciones (clientes, proveedores).
- Realiza operaciones CRUD sobre proveedores y herramientas.
- Visualiza imágenes de herramientas si están disponibles.
- Reserva herramientas como cliente.

## Dependencias

- **Frontend:** JavaScript ES6+, HTML5, CSS3.
- **Backend:** Spring Boot (API REST, JWT, JPA/Hibernate).

## Notas

- Asegúrate de que el backend y el frontend usen los mismos endpoints y estructura de datos.
- El campo de imagen de las herramientas debe enviarse en base64 para su correcta visualización.
- Si tienes problemas con la serialización de imágenes, revisa la configuración del DTO en el backend.

## Autor

- [Osman](https://github.com/osman019)
- [Stivenson](https://github.com/Stivenco12)
---
