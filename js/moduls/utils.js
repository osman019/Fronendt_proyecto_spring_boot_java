/**
 * Obtiene un elemento del DOM por su ID con manejo de errores
 * @param {string} id - ID del elemento
 * @returns {HTMLElement|null} - Elemento encontrado o null
 */
export function getElement(id) {
  const element = document.getElementById(id)
  if (!element) {
    console.warn(`Elemento con ID "${id}" no encontrado`)
  }
  return element
}

/**
 * Agrega un evento a un elemento con manejo de errores
 * @param {HTMLElement|string} element - Elemento o ID del elemento
 * @param {string} eventType - Tipo de evento (click, change, etc.)
 * @param {Function} handler - Función manejadora del evento
 */
export function addEvent(element, eventType, handler) {
  const el = typeof element === "string" ? getElement(element) : element
  if (el) {
    el.addEventListener(eventType, handler)
  }
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
 * Registra eventos en la consola para depuración
 * @param {string} message - Mensaje a registrar
 * @param {any} data - Datos adicionales (opcional)
 */
export function logEvent(message, data = null) {
  if (data) {
    console.log(`[Event] ${message}:`, data)
  } else {
    console.log(`[Event] ${message}`)
  }
}
