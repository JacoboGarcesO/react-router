import { Link, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <main>
      <h1>Page not found</h1>
      <h2>404</h2>
      <p>{error?.statusText || error?.message}</p>
      <Link to="/">Ir al home</Link>
    </main>
  )
}