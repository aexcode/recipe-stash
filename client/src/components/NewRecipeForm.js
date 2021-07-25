import { useRef } from 'react'
import { useRecipes } from '../contexts'

export const NewRecipeForm = () => {
  const { addRecipe } = useRecipes()
  const urlRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    addRecipe(urlRef.current.value)
  }
  return (
    <div className='row mb-4'>
      <div className='col-md-2 col-lg-3'></div>
      <div className='col-12 col-md-8 col-lg-6'>
        <form
          className='d-flex flex-column flex-md-row align-items-md-center '
          onSubmit={handleSubmit}>
          <div className='col-md-8'>
            <input
              className='w-100 mb-3'
              type='url'
              placeholder='https://greatrecipes.com/delicious-meal'
              ref={urlRef}
              required
            />
          </div>
          <div className='col-md-4'>
            <button type='submit' className='btn btn-primary w-100 mb-3'>
              Add Recipe
            </button>
          </div>
        </form>
      </div>
      <div className='col-md-2 col-lg-3'></div>
    </div>
  )
}
