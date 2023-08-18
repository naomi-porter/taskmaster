import { createRoot } from 'react-dom/client'
import routes from './routes'
import { RouterProvider } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={routes} />
  )
})
