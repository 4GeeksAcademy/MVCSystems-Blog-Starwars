// Función para guardar los datos en el almacenamiento local
export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Función para recuperar los datos del almacenamiento local
export function getFromLocalStorage(key) {
  try {
    const value = localStorage.getItem(key);
    if (value !== null && value !== "undefined") {
      return JSON.parse(value);
    } else {
      return null;
    }
  } catch (error) {
    console.error(
      `Error getting value from localStorage for key "${key}":`,
      error
    );
    return null;
  }
}

export default saveToLocalStorage && getFromLocalStorage;
