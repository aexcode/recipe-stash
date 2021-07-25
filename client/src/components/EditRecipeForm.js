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
    <div className='col'>
      <div className='card mb-4'>
        <div className='aex-recipe-card-img'>
          <img src={recipe.image} className='card-img-top' alt={recipe.title} />
        </div>
        <div className='card-body rounded shadow  bg-light.bg-gradient '>
          <h5 className='card-title'>
            <input
              className='w-100 p-2'
              type='text'
              defaultValue={recipe.title}
              ref={titleRef}
              aria-label='Edit recipe name'
            />
          </h5>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     <button type='submit' onClick={() => handleSaveChanges(recipe._id)}>
  //       Save Changes
  //     </button>

  //     <button type='button' onClick={() => deleteRecipe(recipe._id)}>
  //       Delete Recipe
  //     </button>

  //     <input
  //       type='text'
  //       aria-label='Edit recipe title'
  //       defaultValue={recipe.title}
  //       ref={titleRef}
  //     />
  //   </div>
  // )
}
