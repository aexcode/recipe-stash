import { useState } from 'react'
import { EditRecipeForm } from '../components'
import pencilImg from '../assets/bx-pencil.svg'

export const RecipeCard = ({ recipe }) => {
  const [isEditing, setIsEditing] = useState(false)
  const { image, title, url } = recipe

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
            <img src={image} alt='' />
            <h2>
              <a href={url} target='_blank' rel='noreferrer'>
                {title}
              </a>
            </h2>
          </div>
        </>
      )}

      {isEditing && <EditRecipeForm recipe={recipe} />}
    </div>
  )
}
