import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);
  
    const obtenerCategorias = async () => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const {data} = await axios(url)
        setCategorias(data.drinks)
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    return(
        <CategoriasContext.Provider 
           value={{
              categorias,
           }}
        >
            {children}
        </CategoriasContext.Provider>
    )
}

export {CategoriasProvider}

export default CategoriasContext;