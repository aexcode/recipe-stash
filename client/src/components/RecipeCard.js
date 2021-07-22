import { useState, useRef } from 'react'
import pencilImg from '../assets/bx-pencil.svg'

export const RecipeCard = ({ recipe }) => {
  const [isEditing, setIsEditing] = useState(false)
  const titleRef = useRef()
  const descriptionRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    })
  }
  return (
    <div>
      <button
        aria-label='Edit this recipe'
        onClick={() => setIsEditing(!isEditing)}>
        <img src={pencilImg} alt='' />
      </button>

      {!isEditing && (
        <div>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </div>
      )}

      {isEditing && (
        <>
          <button type='submit' onClick={handleSubmit}>
            Save Changes
          </button>

          <button type='button' onClick={() => setIsEditing(false)}>
            Delete Recipe
          </button>

          <input
            type='text'
            aria-label='Edit recipe title'
            defaultValue={recipe.title}
            ref={titleRef}
          />

          <textarea
            aria-label='Edit recipe description'
            ref={descriptionRef}
            defaultValue={recipe.description}></textarea>
        </>
      )}
    </div>
  )
}
