export function configurarFiltros() {
  configurarFiltroProductos()
  configurarFiltroHerramientas()
  configurarFiltroPedidos()
  configurarFiltroDevoluciones()
}

function configurarFiltroProductos() {
  const filtroCategoria = document.getElementById("filtro-categoria")
  const buscarProducto = document.getElementById("buscar-producto")
  const productoCards = document.querySelectorAll(".producto-card")

  if (filtroCategoria && buscarProducto && productoCards.length > 0) {
    filtroCategoria.addEventListener("change", () => filtrarProductos(filtroCategoria, buscarProducto, productoCards))
    buscarProducto.addEventListener("input", () => filtrarProductos(filtroCategoria, buscarProducto, productoCards))
  }
}

function filtrarProductos(filtroCategoria, buscarProducto, productoCards) {
  const categoriaSeleccionada = filtroCategoria.value
  const textoBusqueda = buscarProducto.value.toLowerCase()

  productoCards.forEach((card) => {
    const categoria = card.getAttribute("data-categoria")
    const nombre = card.querySelector(".producto-nombre").textContent.toLowerCase()
    const descripcion = card.querySelector(".producto-descripcion").textContent.toLowerCase()

    const coincideCategoria = categoriaSeleccionada === "todos" || categoria === categoriaSeleccionada
    const coincideBusqueda = nombre.includes(textoBusqueda) || descripcion.includes(textoBusqueda)

    if (coincideCategoria && coincideBusqueda) {
      card.style.display = "flex"
    } else {
      card.style.display = "none"
    }
  })
}

function configurarFiltroHerramientas() {
  const filtroEstado = document.getElementById("filtro-estado")
  const buscarHerramienta = document.getElementById("buscar-herramienta")
  const herramientaCards = document.querySelectorAll(".herramienta-card")

  if (filtroEstado && buscarHerramienta && herramientaCards.length > 0) {
    filtroEstado.addEventListener("change", () =>
      filtrarHerramientas(filtroEstado, buscarHerramienta, herramientaCards),
    )
    buscarHerramienta.addEventListener("input", () =>
      filtrarHerramientas(filtroEstado, buscarHerramienta, herramientaCards),
    )
  }
}

function filtrarHerramientas(filtroEstado, buscarHerramienta, herramientaCards) {
  const estadoSeleccionado = filtroEstado.value
  const textoBusqueda = buscarHerramienta.value.toLowerCase()

  herramientaCards.forEach((card) => {
    const estado = card.getAttribute("data-estado")
    const nombre = card.querySelector(".herramienta-nombre").textContent.toLowerCase()
    const categoria = card.querySelector(".herramienta-categoria").textContent.toLowerCase()

    const coincideEstado = estadoSeleccionado === "todos" || estado === estadoSeleccionado
    const coincideBusqueda = nombre.includes(textoBusqueda) || categoria.includes(textoBusqueda)

    if (coincideEstado && coincideBusqueda) {
      card.style.display = "flex"
    } else {
      card.style.display = "none"
    }
  })
}

function configurarFiltroPedidos() {
  const filtroPedidos = document.getElementById("filtro-pedidos")
  const buscarPedido = document.getElementById("buscar-pedido")
  const pedidoCards = document.querySelectorAll(".pedido-card")

  if (filtroPedidos && buscarPedido && pedidoCards.length > 0) {
    filtroPedidos.addEventListener("change", () => filtrarPedidos(filtroPedidos, buscarPedido, pedidoCards))
    buscarPedido.addEventListener("input", () => filtrarPedidos(filtroPedidos, buscarPedido, pedidoCards))
  }
}

function filtrarPedidos(filtroPedidos, buscarPedido, pedidoCards) {
  const estadoSeleccionado = filtroPedidos.value
  const textoBusqueda = buscarPedido.value.toLowerCase()

  pedidoCards.forEach((card) => {
    const estado = card.getAttribute("data-estado")
    const id = card.querySelector(".pedido-id").textContent.toLowerCase()
    const cliente = card.querySelector(".pedido-cliente").textContent.toLowerCase()

    const coincideEstado = estadoSeleccionado === "todos" || estado === estadoSeleccionado
    const coincideBusqueda = id.includes(textoBusqueda) || cliente.includes(textoBusqueda)

    if (coincideEstado && coincideBusqueda) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
}

function configurarFiltroDevoluciones() {
  const filtroDevoluciones = document.getElementById("filtro-devoluciones")
  const buscarDevolucion = document.getElementById("buscar-devolucion")
  const devolucionCards = document.querySelectorAll(".devolucion-card")

  if (filtroDevoluciones && buscarDevolucion && devolucionCards.length > 0) {
    filtroDevoluciones.addEventListener("change", () =>
      filtrarDevoluciones(filtroDevoluciones, buscarDevolucion, devolucionCards),
    )
    buscarDevolucion.addEventListener("input", () =>
      filtrarDevoluciones(filtroDevoluciones, buscarDevolucion, devolucionCards),
    )
  }
}

function filtrarDevoluciones(filtroDevoluciones, buscarDevolucion, devolucionCards) {
  const estadoSeleccionado = filtroDevoluciones.value
  const textoBusqueda = buscarDevolucion.value.toLowerCase()

  devolucionCards.forEach((card) => {
    const estado = card.getAttribute("data-estado")
    const id = card.querySelector(".devolucion-id").textContent.toLowerCase()
    const cliente = card.querySelector(".devolucion-info").textContent.toLowerCase()

    const coincideEstado = estadoSeleccionado === "todos" || estado === estadoSeleccionado
    const coincideBusqueda = id.includes(textoBusqueda) || cliente.includes(textoBusqueda)

    if (coincideEstado && coincideBusqueda) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
}
