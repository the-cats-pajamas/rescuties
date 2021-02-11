let initialState = {
    favorites: [],
  };
  
  const FavoritesReducers = (state = initialState, action) => {
    let { type, payload } = action;
  
    switch (type) {
  
      case 'ANIMALS':
        return { ...state, activeCategory: payload }
  
      case 'GET':
        let saved = JSON.parse(localStorage.getItem("favorites"));
        console.log('saved', saved);
        return { favorites: saved }

        case 'ADD-ANIMAL':
            console.log(state)
            localStorage.setItem("favorites", JSON.stringify([...state.favorites, payload]));
            return { ...state, favorites: [...state.favorites, payload] }
          
        case 'DELETE ANIMAL':
            return { 
              favorites: [
                ...state.favorites.filter(pets => pets !== payload)
            ]
        }

      default:
        return state;
  }
};

export default FavoritesReducers;