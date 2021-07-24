import onlineGroceries from '../assets/undraw_online_groceries_a02y.svg'
import { Heading } from '../components'

export const EmptyRecipeDisplay = () => {
  return (
    <div>
      <Heading size={2}>You have no saved recipes.</Heading>
      <img src={onlineGroceries} alt='woman looking at online recipes' />
    </div>
  )
}
