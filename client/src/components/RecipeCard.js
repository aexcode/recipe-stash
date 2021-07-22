import { useState } from 'react'
import pencilImg from '../assets/bx-pencil.svg'
import { EditRecipeForm } from '../components'

export const RecipeCard = ({ recipe }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      {!isEditing && (
        <>
          <button
            aria-label='Edit this recipe'
            onClick={() => setIsEditing(!isEditing)}>
            <img src={pencilImg} alt='' />
          </button>

          <div>
            <h2>{recipe.title}</h2>
          </div>
        </>
      )}

      {isEditing && <EditRecipeForm recipe={recipe} />}
    </div>
  )
}
