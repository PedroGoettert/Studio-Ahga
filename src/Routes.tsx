import { createBrowserRouter } from 'react-router-dom'
import { Default } from './Layouts/Default'

import { Contacts } from './Pages/Contacts'
import { Home } from './Pages/Home'
import { Projects } from './Pages/Projects'
import { Answer } from './Pages/Answer'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: '/Projects',
        element: <Projects />
      },

      {
        path: '/Contacts',
        element: <Contacts />
      },

      {
        path: '/Answer',
        element: <Answer />
      }
    ]
  }
])