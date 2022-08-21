import './app.css';

import { useEffect } from 'react'
import { themeChange } from 'theme-change'

import { Route, Routes, Link } from 'react-router-dom';

import { WelcomePage } from '../pages/welcome-page/welcome-page'
import { Button, Navbar } from 'react-daisyui';


export function App() {

  const themeNames = [
    "neo4j", "nodes", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
  ]
  useEffect( () => {
    themeChange(false)
  }, [])

  return (
    <>
      <Navbar className="bg-base-300 shadow min-h-0">
        <Navbar.Start>
          <Button size='xs' className="text-sm normal-case" color="ghost">
            Nodes Prototypes
          </Button>
        </Navbar.Start>
        <Navbar.End>
          <Button size='xs' shape="square" color="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </Button>
        </Navbar.End>
      </Navbar>

      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <select data-choose-theme>
              {themeNames.map( themeName => (<option value={themeName}>{themeName}</option>))}
            </select>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/welcome">Welcome page</Link>
            </div>
          }
        />
        <Route
          path="/welcome"
          element={ <WelcomePage />}
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
