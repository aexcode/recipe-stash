import { Route, Redirect } from 'react-router-dom'

export const GuestRoute = ({
  isAuth,
  component: Component,
  redirect,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth) {
          return <Component />
        } else {
          return (
            <Redirect
              to={{
                pathname: redirect,
                state: { from: props.location },
              }}
            />
          )
        }
      }}
    />
  )
}
