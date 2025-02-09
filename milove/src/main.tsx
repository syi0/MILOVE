import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Auth from './Auth/Authentication.tsx'
import Social from './MainSocial/Homepage.tsx'
import Graph from './GraphUML/Graph.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import {store} from "./app/store"
import Profile from './Profile/Profile.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/social",
    element: <Social />
  },
  {
    path: "/graph",
    element: <Graph />
  },
  {
    path: "/uml",
    element: <Graph />
  },
  {
    path: "/profile",
    element: <Profile />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
