/**
 * Obtiene un elemento del DOM por su ID
 * @param {string} id - ID del elemento
 * @returns {HTMLElement|null} - Elemento encontrado o null
 */
export function getElement(id) {
  return document.getElementById(id)
}

/**
 * Oculta un elemento del DOM
 * @param {HTMLElement|string} element - Elemento o ID del elemento a ocultar
 */
export function hideElement(element) {
  const el = typeof element === "string" ? getElement(element) : element
  if (el) {
    el.style.display = "none"
  }
}

/**
 * Muestra un elemento del DOM
 * @param {HTMLElement|string} element - Elemento o ID del elemento a mostrar
 * @param {string} displayValue - Valor de display a aplicar (default: 'block')
 */
export function showElement(element, displayValue = "block") {
  const el = typeof element === "string" ? getElement(element) : element
  if (el) {
    el.style.display = displayValue
  }
}

/**
 * Actualiza el texto de un elemento
 * @param {HTMLElement|string} element - Elemento o ID del elemento
 * @param {string} text - Texto a establecer
 */
export function setText(element, text) {
  const el = typeof element === "string" ? getElement(element) : element
  if (el) {
    el.textContent = text
  }
}

/**
 * Crea un elemento HTML con atributos y contenido
 * @param {string} tag - Etiqueta HTML
 * @param {Object} attributes - Atributos del elemento
 * @param {string|HTMLElement} content - Contenido del elemento
 * @returns {HTMLElement} - Elemento creado
 */
export function createElement(tag, attributes = {}, content = "") {
  const element = document.createElement(tag)

  // Establecer atributos
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })

  // Establecer contenido
  if (typeof content === "string") {
    element.textContent = content
  } else if (content instanceof HTMLElement) {
    element.appendChild(content)
  }

  return element
}

/**
 * Formatea una fecha a string legible
 * @param {Date|string} date - Fecha a formatear
 * @returns {string} - Fecha formateada
 */
export function formatDate(date) {
  const d = date instanceof Date ? date : new Date(date)
  return d.toLocaleDateString()
}

/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {boolean} - True si es válido
 */
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}
