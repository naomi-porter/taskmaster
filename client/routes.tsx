// page directory
// list all of the pages

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Season from './components/Season'

const routes = createBrowserRouter(
  createRoutesFromElements(

      <Route path='/'>
        <Route path='/' element={<App/>}/>
        <Route path='/seasons/:id' element={<Season/>}/>
      </Route>

  
  ),
)

export default routes
