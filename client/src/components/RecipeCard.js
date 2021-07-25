import { useState } from 'react'
import { EditRecipeForm } from '../components'

import pencilIcon from '../assets/pencil.svg'

export const RecipeCard = ({ recipe }) => {
  const [isEditing, setIsEditing] = useState(false)
  const { image, title, url } = recipe

  return (
    <>
      {!isEditing && (
        <div className='col'>
          <div className='card mb-4'>
            <div className='aex-recipe-card-img'>
              <a href={url} target='_blank' rel='noreferrer'>
                <img src={image} className=' card-img-top' alt={title} />
              </a>
            </div>
            <div className='card-body rounded shadow  bg-light.bg-gradient d-flex justify-content-between align-items-start'>
              <h5 className='card-title'>
                <a
                  className='link-dark'
                  href={url}
                  target='_blank'
                  rel='noreferrer'>
                  {title}
                </a>
              </h5>
              <button
                type='button'
                className='btn btn-link'
                aria-label='Edit this recipe'
                onClick={() => setIsEditing(!isEditing)}>
                <img className='h5' src={pencilIcon} alt='' />
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditing && (
        <EditRecipeForm setIsEditing={setIsEditing} recipe={recipe} />
      )}
    </>
  )
}
