import { useRecipes } from '../contexts'

import Layout from '../layout/Layout'
import {
  NewRecipeForm,
  EmptyRecipeDisplay,
  RecipeCard,
  Heading,
} from '../components'

export const Dashboard = () => {
  const { recipes } = useRecipes()
  let randomRecipeUrl

  const getRandomRecipe = () => {
    randomRecipeUrl = recipes[Math.floor(Math.random() * recipes.length)].url
    window.open(randomRecipeUrl)
  }

  return (
    <Layout>
      <div className='container'>
        <NewRecipeForm />

        {recipes.length === 0 && <EmptyRecipeDisplay />}
        {recipes.length > 0 && (
          <>
            <Heading size={2}>My Recipe Stash</Heading>
            <p className='text-end'>
              <button
                className='btn btn-link text-primary'
                type='button'
                onClick={getRandomRecipe}>
                I'm Feeling Lucky
              </button>
            </p>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-4'>
              {recipes.map((recipe, i) => (
                <RecipeCard recipe={recipe} key={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}
