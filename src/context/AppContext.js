import { createContext, useState} from 'react'
export const AppContext = createContext();

const AppContextProvider = ({children}) =>{

    const getFavPokeFromLS=()=>{
        let poke = localStorage.getItem('favorite')
        if (poke){
            return JSON.parse(poke)
        }
    }

    const [favPoke, _setFavPoke] = useState(getFavPokeFromLS()??'')

    const setFavPoke=(poke)=>{
        localStorage.setItem('favorite', JSON.stringify(poke))
        _setFavPoke(poke)
    }

    const values={
        favPoke,
        setFavPoke
    }


    return(
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider

