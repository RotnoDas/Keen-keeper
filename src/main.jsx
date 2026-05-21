import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layout/root-layout/RootLayout.jsx'
import Homepage from './pages/homepage/Homepage.jsx'
import Timeline from './pages/timeline/Timeline.jsx'
import Stats from './pages/stats/Stats.jsx'

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
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
