import onlineGroceries from '../assets/undraw_online_groceries_a02y.svg'

export const EmptyRecipeDisplay = () => {
  return (
    <div>
      <h2>You have no saved recipes.</h2>
      <img src={onlineGroceries} alt='woman looking at online recipes' />
    </div>
  )
}
