import { createContext, useEffect,useReducer } from "react";

const themes ={
  light:{
    id:"light",
    color:"black",
    backgroundColor:"white"
  },
  dark:{
    id:"dark",
    color:"white",
    backgroundColor:"black"
  }
}


export const initial = {
    theme:themes.light,
    favoriteDentist:JSON.parse(localStorage.getItem("favoriteDentist"))||[]
  }

export const ContextGlobal = createContext(undefined);

function reducer(state, action) {
  switch (action.type) {
    case "addFavDentist":
      return {...state,favoriteDentist: [...state.favoriteDentist,action.dentist]};
    case "deleteFav":
        const dentistas = state.favoriteDentist.filter((dentist) => dentist.id != action.id);
        return {
          ...state,
          favoriteDentist:dentistas
        };
    case "deleteFavs":
        return [];
    case "changeTheme":
      const newTheme = state.theme.id == "light" ? themes.dark : themes.light 
      return {
        ...state, theme: newTheme};
    default:
      throw new error();
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initial);

 
  useEffect(() => {
    localStorage.setItem("favoriteDentist", JSON.stringify(state.favoriteDentist));
  }, [state.favoriteDentist]);


  return (
    <ContextGlobal.Provider value={{state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
