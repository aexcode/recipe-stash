import { useRef } from 'react'
import { useRecipes } from '../contexts'

export const EditRecipeForm = ({ recipe }) => {
  const { updateRecipe, deleteRecipe } = useRecipes()
  const titleRef = useRef()

  const handleSaveChanges = (id) => {
    updateRecipe({
      id,
      title: titleRef.current.value,
    })
  }

  return (
    <div>
      <button type='submit' onClick={() => handleSaveChanges(recipe._id)}>
        Save Changes
      </button>

      <button type='button' onClick={() => deleteRecipe(recipe._id)}>
        Delete Recipe
      </button>

      <input
        type='text'
        aria-label='Edit recipe title'
        defaultValue={recipe.title}
        ref={titleRef}
      />
    </div>
  )
}
