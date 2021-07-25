import { useRef } from 'react'
import { useRecipes } from '../contexts'

export const EditRecipeForm = ({ recipe, setIsEditing }) => {
  const { updateRecipe, deleteRecipe } = useRecipes()
  const titleRef = useRef()

  const handleSaveChanges = (id) => {
    updateRecipe({
      id,
      title: titleRef.current.value,
    })
  }

  return (
    <div className='col'>
      <div className='card mb-4'>
        <div className='aex-recipe-card-img'>
          <img src={recipe.image} className='card-img-top' alt={recipe.title} />
        </div>

        <div className='card-body rounded shadow  bg-light.bg-gradient '>
          <h5 className='card-title'>
            <input
              className='form-control border border-2 rounded w-100 p-2'
              type='text'
              defaultValue={recipe.title}
              ref={titleRef}
              aria-label='Edit recipe name'
            />
          </h5>
          <div className='btn-group w-100' role='group'>
            <button
              className='btn btn-outline-danger'
              type='button'
              onClick={() => deleteRecipe(recipe._id)}>
              <span className='small'>DELETE</span>
            </button>
            <button
              className='btn btn-outline-secondary'
              type='button'
              onClick={() => setIsEditing(false)}>
              <span className='small'>CANCEL</span>
            </button>
            <button
              className='btn btn-outline-primary'
              type='button'
              onClick={() => handleSaveChanges(recipe._id)}>
              <span className='small'>SAVE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
