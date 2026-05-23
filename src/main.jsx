import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layout/root-layout/RootLayout.jsx'
import Homepage from './pages/homepage/Homepage.jsx'
import Timeline from './pages/timeline/Timeline.jsx'
import Stats from './pages/stats/Stats.jsx'
import ContextProvider from './components/context/ContextProvider.jsx'
import Details from './components/all-friends/Details.jsx'
import NotFound from './components/not-found/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: "/timeline",
        Component: Timeline
      },
      {
        path: "/stats",
        Component: Stats
      },
      {
        path: "/friend/:id",
        Component: Details
      },
      {
        path: "*",
        Component: NotFound
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </StrictMode>,
)
