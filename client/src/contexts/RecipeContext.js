// Dependencies
import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from '../contexts'
import Axios from 'axios'

// Create recipe context
const RecipeContext = createContext()

// Custom hook to use recipe context
export const useRecipes = () => useContext(RecipeContext)

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])
  const { currentUser } = useAuth()

  const addRecipe = async (url) => {
    const response = await Axios.post(
      '/api/recipes',
      { url },
      {
        headers: {
          'auth-token': currentUser.token,
        },
      }
    ).catch((error) => {
      return {
        data: {
          success: false,
          messages: error.response.data.messages,
        },
      }
    })

    if (response.data.success) getRecipes()
    return response
  }

  const updateRecipe = async ({ id, title }) => {
    const response = await Axios.put(
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

    if (response.data.success) await getRecipes()
    return response
  }

  const getRecipes = async () => {
    const response = await Axios.get('/api/recipes', {
      headers: {
        'auth-token': currentUser.token,
      },
    }).catch((error) => {
      console.log(error.response.data.msg)
    })
    if (response.data.success) await setRecipes(response.data.recipes)
  }

  const deleteRecipe = async (id) => {
    const response = await Axios.delete(`/api/recipes/${id}`, {
      headers: {
        'auth-token': currentUser.token,
      },
    })

    if (response.data.success) await getRecipes()
    return response
  }

  useEffect(() => {
    getRecipes()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser.isAuth])

  const value = { addRecipe, updateRecipe, deleteRecipe, recipes }

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  )
}
