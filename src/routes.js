import { Home } from './Home'
import { Dashboard } from './Dashboard'
import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/dashboard',
    Component: Dashboard
  },
  {
    path: '*',
    Component: ErrorPage
  }
])