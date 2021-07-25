import { useRef, useState } from 'react'
import { useRecipes } from '../contexts'

export const NewRecipeForm = () => {
  const [loading, setLoading] = useState(false)
  const { addRecipe } = useRecipes()
  const urlRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await addRecipe(urlRef.current.value)
    urlRef.current.value = ''
    setLoading(false)
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
              className='form-control border border-2 rounded w-100 mb-3 p-2'
              type='url'
              placeholder='https://greatrecipes.com/delicious-meal'
              ref={urlRef}
              required
            />
          </div>
          <div className='col-md-4'>
            <button
              type='submit'
              className='btn btn-primary w-100 mb-3 ms-md-2 p-2'
              disabled={loading}>
              {loading ? 'Please Wait...' : 'Add Recipe'}
            </button>
          </div>
        </form>
      </div>
      <div className='col-md-2 col-lg-3'></div>
    </div>
  )
}
