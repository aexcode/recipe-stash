// Dependencies
import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from '../contexts'
import Axios from 'axios'
import { set } from 'mongoose'

// Create recipe context
const RecipeContext = createContext()

// Custom hook to use recipe context
export const useRecipes = () => useContext(RecipeContext)

export const RecipeProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const { currentUser } = useAuth()

  const addRecipe = async (url) => {
    setLoading(true)

    if (currentUser.isAuth) {
      const recipeRes = await Axios.post(
        '/api/recipes',
        { url },
        {
          headers: {
            'auth-token': currentUser.token,
          },
        }
      ).catch((error) => {
        console.log(error.response.data.msg)
      })

      if (recipeRes.data.success) {
        getRecipes()
      }
    }

    setLoading(false)
  }

  const updateRecipe = async ({ id, title }) => {
    setLoading(true)

    if (currentUser.isAuth) {
      const recipeRes = await Axios.put(
        `/api/recipes/${id}`,
        {
          title,
        },
        {
          headers: {
            'auth-token': currentUser.token,
          },
        }
      )

      if (recipeRes.data.success) {
        getRecipes()
      }
    }
    setLoading(false)
  }

  const getRecipes = async () => {
    setLoading(true)
    if (currentUser.isAuth) {
      const recipeRes = await Axios.get('/api/recipes', {
        headers: {
          'auth-token': currentUser.token,
        },
      }).catch((error) => {
        console.log(error.response.data.msg)
      })
      if (recipeRes.data.success) setRecipes(recipeRes.data.recipes)
    }
    setLoading(false)
  }

  const deleteRecipe = async (id) => {
    setLoading(true)
    if (currentUser.isAuth) {
      const recipeRes = await Axios.delete(`/api/recipes/${id}`, {
        headers: {
          'auth-token': currentUser.token,
        },
      })

      if (recipeRes.data.success) {
        getRecipes()
      }
    }

    setLoading(false)
  }

  useEffect(() => {
    getRecipes()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser.isAuth])

  const value = { addRecipe, updateRecipe, deleteRecipe, recipes }

  if (loading) return <h1>Loading...</h1>
  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  )
}
