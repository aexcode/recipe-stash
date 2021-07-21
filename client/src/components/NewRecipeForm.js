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
    <form onSubmit={handleSubmit}>
      <input
        type='url'
        placeholder='https://greatrecipes.com/delicious-meal'
        ref={urlRef}
        required
      />

      <input type='submit' value='Add Recipe' />
    </form>
  )
}
