import { Route, Switch } from 'react-router-dom'
import { useAuth } from './contexts'
import { GuestRoute } from './components'
import { Dashboard, Home, Login, Register } from './pages'

import './app.css'

export default function App() {
  const { currentUser } = useAuth()

  return (
    <Switch>
      <Route exact path='/' component={currentUser.isAuth ? Dashboard : Home} />

      <GuestRoute
        exact
        path='/sign-in'
        isAuth={currentUser.isAuth}
        component={Login}
        redirect='/'
      />

      <GuestRoute
        exact
        path='/sign-up'
        isAuth={currentUser.isAuth}
        component={Register}
        redirect='/'
      />
    </Switch>
  )
}
