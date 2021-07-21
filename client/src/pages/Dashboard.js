import { useRecipes } from '../contexts'
import {
  Layout,
  NewRecipeForm,
  EmptyRecipeDisplay,
  RecipeCard,
} from '../components'

export const Dashboard = () => {
  const { recipes } = useRecipes()

  return (
    <Layout>
      <NewRecipeForm />

      {recipes.length === 0 && <EmptyRecipeDisplay />}
      {recipes.length > 0 && (
        <div>
          {recipes.map((recipe, i) => (
            <RecipeCard recipe={recipe} key={i} />
          ))}
        </div>
      )}
    </Layout>
  )
}
