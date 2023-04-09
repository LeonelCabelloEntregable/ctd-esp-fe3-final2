import React from 'react'
import { useEffect } from 'react'
import { useContext, createContext, useState } from 'react'

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const GlobalContextProvider = ({children}) => {
  const key = "globalState"

    
  
  const [global, setGlobal] = useState({favorites:[], theme:"light"})
  useEffect(
    () =>{
      if(!localStorage.getItem(key)){
        console.log("No existe local storage")
        localStorage.setItem(key, JSON.stringify(global))
      }
      else{
        setGlobal(JSON.parse(localStorage.getItem(key)))
      }
    },[]
  )

  const save = (data) => {
    localStorage.setItem(key, JSON.stringify(data))
    console.log("guardado")
  }
  const getGlobalHistory = () => JSON.parse(localStorage.getItem(key))

    const addFavorite = (user) => {
        const globalHistory = getGlobalHistory()
        globalHistory.favorites= [...globalHistory.favorites,user]
        save(globalHistory)
        setGlobal(globalHistory)
    }
    const isInFavorites = (id) => global.favorites.some(favorite => favorite.id ===id)
    const deleteFromFavorites = (id) => {
      const globalHistory = getGlobalHistory()
      globalHistory.favorites = globalHistory.favorites.filter(favorite => favorite.id !== id)
      save(globalHistory)
      setGlobal(globalHistory)
    }

    const changeTheme = () =>{
      const globalHistory = getGlobalHistory()
      globalHistory.theme === "dark" ? globalHistory.theme = "light" : globalHistory.theme = "dark"
      save(globalHistory)
      setGlobal(globalHistory)
  }
  const isDark = () => global.theme === "dark"

  return (
    <GlobalContext.Provider value={{global, addFavorite, isInFavorites, deleteFromFavorites, changeTheme, isDark}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
