import { saveToLocalStorage, getFromLocalStorage } from "../utils/localstorage";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: getFromLocalStorage("planets") || [],
      characters: getFromLocalStorage("characters") || [],
      favorites: getFromLocalStorage("favorites") || [],
    },
    actions: {
      addFavorite: (name) => {
        const store = getStore();
        const favorites = store.favorites;
        favorites.push(name);
        saveToLocalStorage("favorites", favorites);
        setStore({ favorites: favorites });
      },

      deleteFavorite: (name) => {
        const store = getStore();
        const favorites = store.favorites;
        const newFavorites = favorites.filter((item) => item !== name);
        saveToLocalStorage("favorites", newFavorites);
        setStore({ favorites: newFavorites });
      },

      getCharacters: async () => {
        try {
          const charactersFromStorage = localStorage.getItem("characters");
          if (charactersFromStorage) {
            // Cargar los datos del localStorage en el store
            setStore({ characters: JSON.parse(charactersFromStorage) });
            return;
          }
          // Si los datos no están en el localStorage, hacer la solicitud a la API
          const response = await fetch("https://www.swapi.tech/api/people");
          const data = await response.json();
          // Mapear los resultados para extraer solo los datos necesarios
          const characters = data.results.map((result) => ({
            id: result.uid,
            name: result.name,
            url: result.url,
          }));
          // Almacenar los datos en el localStorage
          localStorage.setItem("characters", JSON.stringify(characters));
          // Actualizar el store con los nuevos datos
          setStore({ characters });
        } catch (error) {
          console.error("Error fetching characters:", error);
        }
      },

      getCharacterDetails: async (uid) => {
        try {
          const response = await fetch(
            "https://www.swapi.tech/api/people/" + uid
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setStore({ characterDetails: data.result.properties });
        } catch (error) {
          console.error("Error fetching character details:", error);
        }
      },

      getPlanets: async () => {
        try {
          const planetsFromStorage = localStorage.getItem("planets");
          if (planetsFromStorage) {
            // Cargar los datos del localStorage en el store
            setStore({ planets: JSON.parse(planetsFromStorage) });
            return;
          }
          // Si los datos no están en el localStorage, hacer la solicitud a la API
          const response = await fetch("https://www.swapi.tech/api/planets");
          const data = await response.json();
          // Mapear los resultados para extraer solo los datos necesarios
          const planets = data.results.map((result) => ({
            id: result.uid,
            name: result.name,
            url: result.url,
          }));
          // Almacenar los datos en el localStorage
          localStorage.setItem("planets", JSON.stringify(planets));
          setStore({ planets });
        } catch (error) {
          console.error("Error fetching planets:", error);
        }
      },

      getPlanetDetails: async (uid) => {
        try {
          const response = await fetch(
            "https://www.swapi.tech/api/planets/" + uid
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setStore({ planetDetails: data.result.properties });
        } catch (error) {
          console.error("Error fetching planet details:", error);
        }
      },

      getVehicles: async () => {
        try {
          const vehiclesFromStorage = localStorage.getItem("vehicles");
          if (vehiclesFromStorage) {
            // Cargar los datos del localStorage en el store
            setStore({ vehicles: JSON.parse(vehiclesFromStorage) });
            return;
          }
          // Si los datos no están en el localStorage, hacer la solicitud a la API
          const response = await fetch("https://www.swapi.tech/api/vehicles");
          const data = await response.json();
          // Mapear los resultados para extraer solo los datos necesarios
          const vehicles = data.results.map((result) => ({
            id: result.uid,
            name: result.name,
            url: result.url,
          }));
          // Almacenar los datos en el localStorage
          localStorage.setItem("vehicles", JSON.stringify(vehicles));
          setStore({ vehicles });
        } catch (error) {
          console.error("Error fetching vehicles:", error);
        }
      },

      getVehicleDetails: async (uid) => {
        try {
          const response = await fetch(
            "https://www.swapi.tech/api/vehicles/" + uid
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setStore({ vehicleDetails: data.result.properties });
        } catch (error) {
          console.error("Error fetching vehicle details:", error);
        }
      },
    },
  };
};

export default getState;
