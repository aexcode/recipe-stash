import onlineGroceries from '../assets/undraw_online_groceries_a02y.svg'
import { Heading } from '../components'

export const EmptyRecipeDisplay = () => {
  return (
    <div className='text-center'>
      <Heading size={2}>You have no saved recipes.</Heading>

      <img
        className='w-75 mt-3'
        src={onlineGroceries}
        alt='woman looking at online recipes'
        style={{ maxWidth: '400px' }}
      />
    </div>
  )
}
