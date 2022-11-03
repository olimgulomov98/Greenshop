import { useReducer } from 'react'
import { createContext } from 'react'
import { blogData, productsData, swiperData } from '../utils/data'
import { reducer } from './reducer'

export const PlantContext = createContext()

export const PlantsContext = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {
        swiperData: swiperData,
        blogData: blogData,
        productsData: productsData,
    })

  return (
    <PlantContext.Provider value={[state, dispatch]}>
        {children}
    </PlantContext.Provider>
  )
}

