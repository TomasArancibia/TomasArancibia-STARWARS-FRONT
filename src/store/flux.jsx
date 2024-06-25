const getState = ({ getStore, getActions, setStore }) => {
  const loadFavoritesFromLocalStorage = () => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  };
  const saveFavoritesToLocalStorage = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return {
    store: {
      favorites: loadFavoritesFromLocalStorage(),
      characters: [],
      planets: [],
    },
    actions: {
      loadCharacters: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const CharactersData = await response.json();
          setStore({ characters: CharactersData["results"] });
        } catch (error) {
          console.error("An error occurred while loading characters:", error);
        }
      },

      loadCharacter: async (id) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const CharacterData = await response.json();
          return CharacterData["result"];
        } catch (error) {
          console.error("An error occurred while loading characters:", error);
        }
      },

      loadPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const PlanetsData = await response.json();
          setStore({ planets: PlanetsData["results"] });
        } catch (error) {
          console.error("An error occurred while loading planets:", error);
        }
      },

      loadPlanet: async (id) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/planets/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const PlanetData = await response.json();
          return PlanetData["result"];
        } catch (error) {
          console.error("An error occurred while loading planets:", error);
        }
      },

      addFavorite: (item, category) => {
        const { favorites } = getStore();
        const prefixedUid = `${category}-${item.uid}`;
        if (!favorites.some(favorite => favorite.prefixedUid === prefixedUid)) {
          const updatedFavorites = [...favorites, { ...item, prefixedUid }];
          setStore({ favorites: updatedFavorites });
          saveFavoritesToLocalStorage(updatedFavorites);
        }
      },

      removeFavorite: (item, category) => {
        const { favorites } = getStore();
        const prefixedUid = `${category}-${item.uid}`;
        const updatedFavorites = favorites.filter(favorite => favorite.prefixedUid !== prefixedUid);
        setStore({ favorites: updatedFavorites });
        saveFavoritesToLocalStorage(updatedFavorites);
      },
    },
  };
};

export default getState;