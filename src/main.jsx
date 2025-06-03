import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {App,RequireAuth} from './App.jsx'
import "./index.scss";
import HomePage from './page/homepage/HomePage.jsx';
import SinglePage from './page/singlepage/Singlepage.jsx';
import Login from './page/loginpage/Login.jsx';
import Profile from './page/profilepage/Profile.jsx';
import Register from './page/register/Register.jsx';
import ProfileUpdate from './page/profileupdate/ProfileUpdate.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import NewPostPage from './page/newPostPage/NewPostPage.jsx';
import { listPageLoader, profilePageLoader, singlePageLoader } from './lib/loaders.js';
import List from './page/listpage/List.jsx';
import { SocketContextProvider } from './context/SocketContext.jsx';
import AboutUs from './page/aboutpage/AboutUs.jsx';
import Contact from './page/contactpage/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/list",
        element: <List />,
        loader: listPageLoader,
      },
      {
        path: "/post/:id",
        element: <SinglePage />,
        loader: singlePageLoader, 
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      
    ],
  },
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
        loader: profilePageLoader
      },
      {
        path: "/profile/update",
        element: <ProfileUpdate />,
      },
      {
        path: "/add",
        element: <NewPostPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <SocketContextProvider>
    <RouterProvider router={router}/>
    </SocketContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
