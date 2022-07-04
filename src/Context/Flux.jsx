
const getState = ({ getStore, getActions, setStore }) => {
    return{

        store: {
            characters: [],
            planets: [],
            vehicles: [],
            favourites: [],
            person: null,
            planet: null,
            vehicle: null,
        },

        actions: {
            getCharacters: () => {
                fetch('https://swapi.dev/api/people/')
                .then(response => response.json())
                .then(data =>
                    setStore({ characters: data.results}))
                .catch((error) => console.log(error));
            },
            getPerson: url => {
                fetch(url)
                .then(response => response.json())
                .then(data =>
                    setStore({ person: data}))
                .catch((error) => console.log(error));
            },
            getPlanets: () => {
                fetch('https://swapi.dev/api/planets')
                .then(response => response.json())
                .then(data =>
                    setStore({ planets: data.results}))
                .catch((error) => console.log(error));
            },
            getPlanet: url => {
                fetch(url)
                .then(response => response.json())
                .then(data =>
                    setStore({ planet: data}))
                .catch((error) => console.log(error));
            },
            getVehicles: () => {
                fetch('https://swapi.dev/api/vehicles')
                .then(response => response.json())
                .then(data =>
                    setStore({ vehicles: data.results}))
                .catch((error) => console.log(error));
            },
            getVehicle: url => {
                fetch(url)
                .then(response => response.json())
                .then(data =>
                    setStore({ vehicle: data}))
                .catch((error) => console.log(error));
            },
            addFavourites: item => {
                const {favourites} = getStore();
                if(favourites.find((fav) => fav === item)){
                    console.log('encontrado')
                }else{
                    favourites.push(item);
                    setStore({favourites})
                }
            },
            filterFavourites: item => {
                const {favourites} = getStore();
                let filtered = favourites.filter((fav) => fav !== item)
                setStore({favourites: filtered});
            },    
        }
    }
}

export default getState;