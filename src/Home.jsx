import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <main>
      <h1>Home</h1>
      <Link to="/dashboard">
        Ir al dashboard
      </Link>
    </main>
  )
}