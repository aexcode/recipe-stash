import { useRecipes } from '../contexts'

import Layout from '../layout/Layout'
import { NewRecipeForm, EmptyRecipeDisplay, RecipeCard } from '../components'

export const Dashboard = () => {
  const { recipes } = useRecipes()

  return (
    <Layout>
      <div className='container'>
        <NewRecipeForm />

        {recipes.length === 0 && <EmptyRecipeDisplay />}
        {recipes.length > 0 && (
          <div>
            {recipes.map((recipe, i) => (
              <RecipeCard recipe={recipe} key={i} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}
