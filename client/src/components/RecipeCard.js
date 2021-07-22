import { useState } from 'react'
import { EditRecipeForm } from '../components'
import pencilImg from '../assets/bx-pencil.svg'

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
            <h2>
              <a href={recipe.url} target='_blank' rel='noreferrer'>
                {recipe.title}
              </a>
            </h2>
          </div>
        </>
      )}

      {isEditing && <EditRecipeForm recipe={recipe} />}
    </div>
  )
}
