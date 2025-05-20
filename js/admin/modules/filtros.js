/**
 * Configura los filtros y búsqueda en las tablas
 */
export function configurarFiltros() {
  configurarBusqueda()
  configurarFiltrosSelect()
}

/**
 * Configura la búsqueda en las tablas
 */
function configurarBusqueda() {
  const searchInputs = document.querySelectorAll(".admin-search input")

  searchInputs.forEach((input) => {
    input.addEventListener("input", () => {
      const searchTerm = input.value.toLowerCase()
      const adminSection = input.closest(".admin-section")
      if (!adminSection) return

      const table = adminSection.querySelector(".admin-table")
      if (!table) return

      const rows = table.querySelectorAll("tbody tr")

      rows.forEach((row) => {
        let found = false
        const cells = row.querySelectorAll("td")

        cells.forEach((cell) => {
          if (cell.textContent.toLowerCase().includes(searchTerm)) {
            found = true
          }
        })

        row.style.display = found ? "" : "none"
      })
    })
  })
}

/**
 * Configura los filtros select en las tablas
 */
function configurarFiltrosSelect() {
  const filterSelects = document.querySelectorAll(".admin-filter select")

  filterSelects.forEach((select) => {
    select.addEventListener("change", () => {
      const filterValue = select.value
      const adminSection = select.closest(".admin-section")
      if (!adminSection) return

      const table = adminSection.querySelector(".admin-table")
      if (!table) return

      const rows = table.querySelectorAll("tbody tr")

      rows.forEach((row) => {
        if (filterValue === "todos") {
          row.style.display = ""
        } else {
          const cells = row.querySelectorAll("td")
          let match = false

          cells.forEach((cell) => {
            if (cell.textContent.toLowerCase() === filterValue.toLowerCase()) {
              match = true
            }
          })

          row.style.display = match ? "" : "none"
        }
      })
    })
  })
}
