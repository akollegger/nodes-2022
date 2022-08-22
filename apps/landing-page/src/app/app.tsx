import './app.scss';

import { useEffect } from 'react'
import { themeChange } from 'theme-change'

import { Route, Routes, Link } from 'react-router-dom';

import { Button, Navbar, Select } from 'react-daisyui';

import { WelcomePage } from '../pages/home-page/home-page'
import { PlainPage } from '../pages/plain-page/plain-page'
import { BlankPage } from '../pages/blank-page/blank-page';
import Neo4jHeader from '../components/neo4j-header/neo4j-header';
import Neo4jFooter from '../components/neo4j-footer/neo4j-footer';

export function App() {
  const pageLinks = [
    {
      title:"Home",
      url:"/",
      element: WelcomePage
    },
    {
      title:"Plain",
      url:"/plain",
      element: PlainPage
    },
    {
      title:"Blank",
      url:"/blank",
      element: BlankPage
    }
  ]
  const themeNames = [
    "neo4j", "nodes", "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
  ]
  useEffect( () => {
    themeChange(false)
  }, [])

  return (
    <>
      <Navbar className="bg-base-300 shadow min-h-0 py-0">
        <Navbar.Start className="grid grid-flow-col gap-2">
          <span className="text-primary text-xs">
            Nodes 2022 Landing Page Variations:
          </span>
          {
            pageLinks.map(pageLink => (
              <Link to={pageLink.url}><Button size='xs' className="text-sm normal-case" color="ghost">{pageLink.title}</Button></Link>
            ))
          }
        </Navbar.Start>
        <Navbar.End>
          <Select data-choose-theme size='xs' className="w-32 pr-0 m-0 border-none" color='ghost'>
            {themeNames.map( themeName => (<Select.Option value={themeName}>{themeName}</Select.Option>))}
          </Select>
        </Navbar.End>
      </Navbar>

      <Routes>
        {
          pageLinks.map(pageLink => (
            <Route path={pageLink.url} element ={(
              <div className="neo4j-page">
                <Neo4jHeader />
                <pageLink.element />
                <Neo4jFooter />
              </div>
            )} />
          ))
        }

      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
