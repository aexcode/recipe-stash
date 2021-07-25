import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider, RecipeProvider } from './contexts'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RecipeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecipeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
