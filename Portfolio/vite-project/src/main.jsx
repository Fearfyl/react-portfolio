import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import Contact from './components/Contactform.jsx';
import Portfolio from './components/Portfolio.jsx';
import Resume from './components/Resume.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: 'About', element: <About /> },
      { path: 'Portfolio', element: <Portfolio /> },
      { path: 'Contact', element: <Contact /> },
      { path: 'Resume', element: <Resume /> },
      { path: '/', element: <About /> },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
