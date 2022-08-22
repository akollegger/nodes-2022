import './neo4j-header.css';

/* eslint-disable-next-line */
export interface Neo4jHeaderProps {}

export function Neo4jHeader(props: Neo4jHeaderProps) {
  return (
    <>
    <div id="callout-banner" className="text-center py-2 bg-primary">
      <span className="text-white">
        <a
          className="text-white text-sm"
          target="_blank"
          rel="noreferrer"
          href="https://sessionize.com/neo4j-nodes-2022/"
        >
          NODES 2022 – Neo4j Online Developer Expo and Summit – November 16-17 –
          Submit Your Talk by<strong> August 31</strong>
        </a>
      </span>
    </div>
    <div
      data-c="mobile main navigation"
      className="sticky hide-for-large z-40"
      style={{ height: 70, top: 0 }}
    >
      <div
        className="title-bar justify-between px-4 py-2 hide-for-large sticky w-full top-0 z-10 shadow-sm"
        style={{ height: 70, top: 0 }}
      >
        <a href="/">
          <img
            height="34px"
            width="104px"
            src="https://dist.neo4j.com/wp-content/uploads/20210423072428/neo4j-logo-2020-1.svg"
            alt="The Neo4j Graph Platform – The #1 Platform for Connected Data"
          />
        </a>
        <a
          type="button"
          data-toggle="toggle-neo4j-mobile-menu-container"
          className="m-0 mobile-menu-toggle-button inline-block"
          aria-expanded="false"
          aria-controls="toggle-neo4j-mobile-menu-container"
        >
          <span className="sr-only">Menu</span>
          <span className="n-icon n-icon-navigation-menu n-icon-lg" />
        </a>
      </div>
    </div>
    {/* Height is set to 70px to work well with secondary menu that stay fixed after scroll on pages like /product */}
    <div
      className="off-canvas position-left is-transition-overlap is-closed"
      data-off-canvas="h4aoi2-off-canvas"
      id="toggle-neo4j-mobile-menu-container"
      aria-hidden="true"
    >
      <div className="title-bar">
        <img
          height="34px"
          width="104px"
          src="https://dist.neo4j.com/wp-content/uploads/20210423072428/neo4j-logo-2020-1.svg"
          alt="The Neo4j Graph Platform – The #1 Platform for Connected Data"
        />
        <a
          type="button"
          className="m-0 pr-2 mobile-menu-toggle-button inline-block"
          data-toggle="toggle-neo4j-mobile-menu-container"
          aria-expanded="false"
          aria-controls="toggle-neo4j-mobile-menu-container"
        >
          <span className="sr-only">Close</span>
          <span className="n-icon n-icon-close n-icon-size-lg" />
        </a>
      </div>
      <div className="hide-for-large" id="mobile-menu">
        <ul
          className="vertical menu accordion-menu"
          data-accordion-menu="16lq7u-accordion-menu"
          role="tree"
          aria-multiselectable="true"
        >
          <li
            className="search-button cursor-pointer hover:bg-whitesmoke p-4 flex items-center text-sm"
            style={{ lineHeight: 0 }}
            role="treeitem"
          >
            <span className="n-icon n-icon-search mr-2" />
            Search
          </li>
          <li
            role="treeitem"
            className="is-accordion-submenu-parent"
            aria-controls="hv1iy8-acc-menu"
            aria-expanded="false"
            id="mb4xja-acc-menu-link"
          >
            <a href="#" role="menuitem">
              Products
            </a>
            <ul
              className="menu vertical submenu is-accordion-submenu"
              data-submenu=""
              role="group"
              aria-labelledby="mb4xja-acc-menu-link"
              aria-hidden="true"
              id="hv1iy8-acc-menu"
              style={{ display: "none" }}
            >
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/product/" role="menuitem">
                  Platform Overview
                </a>
              </li>
              <li
                role="treeitem"
                className="is-accordion-submenu-parent is-submenu-item is-accordion-submenu-item"
                aria-controls="eqndun-acc-menu"
                aria-expanded="false"
                id="dnb37h-acc-menu-link"
              >
                <a href="#" role="menuitem">
                  Graph Database
                </a>
                <ul
                  className="menu vertical submenu is-accordion-submenu"
                  data-submenu=""
                  role="group"
                  aria-labelledby="dnb37h-acc-menu-link"
                  aria-hidden="true"
                  id="eqndun-acc-menu"
                  style={{ display: "none" }}
                >
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/product/neo4j-graph-database/" role="menuitem">
                      Neo4j Graph Database
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a
                      href="/cloud/platform/aura-graph-database/"
                      role="menuitem"
                    >
                      Neo4j AuraDB
                    </a>
                  </li>
                </ul>
              </li>
              <li
                role="treeitem"
                className="is-accordion-submenu-parent is-submenu-item is-accordion-submenu-item"
                aria-controls="l7rfqo-acc-menu"
                aria-expanded="false"
                id="7y5y8d-acc-menu-link"
              >
                <a href="#" role="menuitem">
                  Graph Data Science
                </a>
                <ul
                  className="menu vertical submenu is-accordion-submenu"
                  data-submenu=""
                  role="group"
                  aria-labelledby="7y5y8d-acc-menu-link"
                  aria-hidden="true"
                  id="l7rfqo-acc-menu"
                  style={{ display: "none" }}
                >
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/product/graph-data-science/" role="menuitem">
                      Neo4j Graph Data Science
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/product/graph-data-science/" role="menuitem">
                      Neo4j AuraDS
                    </a>
                  </li>
                </ul>
              </li>
              <li
                role="treeitem"
                className="is-accordion-submenu-parent is-submenu-item is-accordion-submenu-item"
                aria-controls="q5lcbh-acc-menu"
                aria-expanded="false"
                id="9wi9xs-acc-menu-link"
              >
                <a href="#" role="menuitem">
                  User Tools
                </a>
                <ul
                  className="menu vertical submenu is-accordion-submenu"
                  data-submenu=""
                  role="group"
                  aria-labelledby="9wi9xs-acc-menu-link"
                  aria-hidden="true"
                  id="q5lcbh-acc-menu"
                  style={{ display: "none" }}
                >
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/product/developer-tools/" role="menuitem">
                      Neo4j Developer Tools
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a
                      href="/product/cypher-graph-query-language/"
                      role="menuitem"
                    >
                      Cypher Query Language
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/product/graphql-library/" role="menuitem">
                      Neo4j GraphQL Library
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/product/connectors/" role="menuitem">
                      Neo4j Data Connectors
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/product/bloom/" role="menuitem">
                      Neo4j Bloom
                    </a>
                  </li>
                </ul>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/download-center/" role="menuitem">
                  Download Center
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/pricing/" role="menuitem">
                  Pricing
                </a>
              </li>
            </ul>
          </li>
          <li
            role="treeitem"
            className="is-accordion-submenu-parent"
            aria-controls="z74ey0-acc-menu"
            aria-expanded="false"
            id="0ezgsm-acc-menu-link"
          >
            <a href="#" role="menuitem">
              Solutions
            </a>
            <ul
              className="menu vertical submenu is-accordion-submenu"
              data-submenu=""
              role="group"
              aria-labelledby="0ezgsm-acc-menu-link"
              aria-hidden="true"
              id="z74ey0-acc-menu"
              style={{ display: "none" }}
            >
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/use-cases/" role="menuitem">
                  Use Cases
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/case-studies/" role="menuitem">
                  Case Studies
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/customers/" role="menuitem">
                  Customers
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/professional-services/" role="menuitem">
                  Professional Services
                </a>
              </li>
            </ul>
          </li>
          <li
            role="treeitem"
            className="is-accordion-submenu-parent"
            aria-controls="q12435-acc-menu"
            aria-expanded="false"
            id="vqzgcn-acc-menu-link"
          >
            <a href="#" role="menuitem">
              Learn
            </a>
            <ul
              className="menu vertical submenu is-accordion-submenu"
              data-submenu=""
              role="group"
              aria-labelledby="vqzgcn-acc-menu-link"
              aria-hidden="true"
              id="q12435-acc-menu"
              style={{ display: "none" }}
            >
              <li
                role="treeitem"
                className="is-accordion-submenu-parent is-submenu-item is-accordion-submenu-item"
                aria-controls="2gxmjy-acc-menu"
                aria-expanded="false"
                id="zgk2uu-acc-menu-link"
              >
                <a href="#" role="menuitem">
                  Resources
                </a>
                <ul
                  className="menu vertical submenu is-accordion-submenu"
                  data-submenu=""
                  role="group"
                  aria-labelledby="zgk2uu-acc-menu-link"
                  aria-hidden="true"
                  id="2gxmjy-acc-menu"
                  style={{ display: "none" }}
                >
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/who-uses-neo4j/" role="menuitem">
                      Who Uses Neo4j?
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/graph-database-executive-insights/" role="menuitem">
                      Executive Insights
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="https://graphacademy.neo4j.com/" role="menuitem">
                      GraphAcademy
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/blog/" role="menuitem">
                      Neo4j Blog
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/videos/" role="menuitem">
                      Videos
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/books/" role="menuitem">
                      Books
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/resources/" role="menuitem">
                      Resource Library
                    </a>
                  </li>
                </ul>
              </li>
              <li
                role="treeitem"
                className="is-accordion-submenu-parent is-submenu-item is-accordion-submenu-item"
                aria-controls="hpjvva-acc-menu"
                aria-expanded="false"
                id="jzw3d1-acc-menu-link"
              >
                <a href="#" role="menuitem">
                  Events
                </a>
                <ul
                  className="menu vertical submenu is-accordion-submenu"
                  data-submenu=""
                  role="group"
                  aria-labelledby="jzw3d1-acc-menu-link"
                  aria-hidden="true"
                  id="hpjvva-acc-menu"
                  style={{ display: "none" }}
                >
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/graphsummit/" role="menuitem">
                      GraphSummit
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/connections/" role="menuitem">
                      Connections
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/events/" role="menuitem">
                      Events Calendar
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/live-demos/" role="menuitem">
                      Live Demos
                    </a>
                  </li>
                  <li
                    role="treeitem"
                    className="is-submenu-item is-accordion-submenu-item"
                  >
                    <a href="/webinars/" role="menuitem">
                      Webinars
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            role="treeitem"
            className="is-accordion-submenu-parent"
            aria-controls="eg4qqw-acc-menu"
            aria-expanded="false"
            id="3z3cbq-acc-menu-link"
          >
            <a href="#" role="menuitem">
              Developers
            </a>
            <ul
              className="menu vertical submenu is-accordion-submenu"
              data-submenu=""
              role="group"
              aria-labelledby="3z3cbq-acc-menu-link"
              aria-hidden="true"
              id="eg4qqw-acc-menu"
              style={{ display: "none" }}
            >
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/developer/" role="menuitem">
                  Developer Home
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/docs/" role="menuitem">
                  Documentation
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/download-center/" role="menuitem">
                  Download Center
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/developer-blog/" role="menuitem">
                  Developer Blog
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="https://community.neo4j.com/" role="menuitem">
                  Community
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/developer/online-meetup/" role="menuitem">
                  Online Meetups
                </a>
              </li>
            </ul>
          </li>
          <li
            role="treeitem"
            className="is-accordion-submenu-parent"
            aria-controls="m22ci6-acc-menu"
            aria-expanded="false"
            id="y2e90z-acc-menu-link"
          >
            <a href="#" role="menuitem">
              Data Scientists
            </a>
            <ul
              className="menu vertical submenu is-accordion-submenu"
              data-submenu=""
              role="group"
              aria-labelledby="y2e90z-acc-menu-link"
              aria-hidden="true"
              id="m22ci6-acc-menu"
              style={{ display: "none" }}
            >
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/product/graph-data-science/" role="menuitem">
                  Graph Data Science Home
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/docs/graph-data-science/current/" role="menuitem">
                  Data Science Documentation
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a
                  href="https://graphacademy.neo4j.com/categories/data-scientist/"
                  role="menuitem"
                >
                  GraphAcademy for Data Science
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/developer/graph-data-science/" role="menuitem">
                  Data Science Guides
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a
                  href="https://community.neo4j.com/c/neo4j-graph-platform/graph-algorithms/73"
                  role="menuitem"
                >
                  Data Science Community
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/graph-data-science-software/" role="menuitem">
                  Get Started with Graph Data Science
                </a>
              </li>
            </ul>
          </li>
          <li
            role="treeitem"
            className="is-accordion-submenu-parent"
            aria-controls="v2qbj3-acc-menu"
            aria-expanded="false"
            id="pic23r-acc-menu-link"
          >
            <a href="" role="menuitem">
              Sign In
            </a>
            <ul
              className="menu vertical submenu is-accordion-submenu"
              data-submenu=""
              role="group"
              aria-labelledby="pic23r-acc-menu-link"
              aria-hidden="true"
              id="v2qbj3-acc-menu"
              style={{ display: "none" }}
            >
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a
                  href="https://console.neo4j.io/?mpp=4bfb2414ab973c741b6f067bf06d5575&mpid=182bfb383e380e-09ff97f1fde722-3b62684b-16a7f0-182bfb383e425ac"
                  role="menuitem"
                >
                  Neo4j Aura
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="https://sandbox.neo4j.com/" role="menuitem">
                  Neo4j Sandbox
                </a>
              </li>
            </ul>
          </li>
          <li
            role="treeitem"
            className="is-accordion-submenu-parent"
            aria-controls="h9cqz7-acc-menu"
            aria-expanded="false"
            id="n0125z-acc-menu-link"
          >
            <a
              href="/cloud/platform/aura-graph-database/?ref=nav-get-started-cta"
              role="menuitem"
            >
              Get Started
            </a>
            <ul
              className="menu vertical submenu is-accordion-submenu"
              data-submenu=""
              role="group"
              aria-labelledby="n0125z-acc-menu-link"
              aria-hidden="true"
              id="h9cqz7-acc-menu"
              style={{ display: "none" }}
            >
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a
                  href="/cloud/platform/aura-graph-database/?ref=get-started-dropdown-cta"
                  role="menuitem"
                >
                  Neo4j AuraDB
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a
                  href="https://sandbox.neo4j.com/?ref=get-started-dropdown-cta&persona=data-scientist"
                  role="menuitem"
                >
                  Neo4j Sandbox
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/download/?ref=get-started-dropdown-cta" role="menuitem">
                  Neo4j Desktop
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a
                  href="/cloud/platform/aura-graph-data-science/?ref=get-started-dropdown-cta"
                  role="menuitem"
                >
                  Neo4j AuraDS
                </a>
              </li>
            </ul>
          </li>{" "}
          <li
            role="treeitem"
            className="is-accordion-submenu-parent"
            aria-controls="sc4kbm-acc-menu"
            aria-expanded="false"
            id="7yyg9q-acc-menu-link"
          >
            <a href="/partners/" role="menuitem">
              Partners
            </a>
            <ul
              className="menu vertical submenu is-accordion-submenu"
              data-submenu=""
              role="group"
              aria-labelledby="7yyg9q-acc-menu-link"
              aria-hidden="true"
              id="sc4kbm-acc-menu"
              style={{ display: "none" }}
            >
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/partners/directory/" role="menuitem">
                  Find a Partner
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/partners/neo4j-partner-program/" role="menuitem">
                  Become a Partner
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/partners/solution-partners/" role="menuitem">
                  Solution Partners
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/partners/oem-partners/" role="menuitem">
                  OEM Partners
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/partners/technology-partners/" role="menuitem">
                  Technology Partners
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="https://partner.neo4j.com/" role="menuitem">
                  Partner Portal Login
                </a>
              </li>
            </ul>
          </li>
          <li
            role="treeitem"
            className="is-accordion-submenu-parent"
            aria-controls="790cbu-acc-menu"
            aria-expanded="false"
            id="x7eyy0-acc-menu-link"
          >
            <a href="#" role="menuitem">
              Company
            </a>
            <ul
              className="menu vertical submenu is-accordion-submenu"
              data-submenu=""
              role="group"
              aria-labelledby="x7eyy0-acc-menu-link"
              aria-hidden="true"
              id="790cbu-acc-menu"
              style={{ display: "none" }}
            >
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/company/" role="menuitem">
                  About Us
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/newsroom/" role="menuitem">
                  Newsroom
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/awards/" role="menuitem">
                  Awards and Honors
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/graphs4good/" role="menuitem">
                  Graphs4Good
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/careers/" role="menuitem">
                  Careers
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/culture/" role="menuitem">
                  Culture
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/diversity-and-inclusion/" role="menuitem">
                  Diversity
                </a>
              </li>
              <li
                role="treeitem"
                className="is-submenu-item is-accordion-submenu-item"
              >
                <a href="/leadership/" role="menuitem">
                  Leadership
                </a>
              </li>
            </ul>
          </li>
          <li role="treeitem">
            <a href="/contact-us/" role="menuitem">
              Contact Us
            </a>
          </li>
          <li role="treeitem">
            <a href="https://support.neo4j.com/" role="menuitem">
              Support
            </a>
          </li>{" "}
        </ul>
      </div>
    </div>
    <div className="js-off-canvas-overlay is-overlay-fixed" />
    <div
      id="menu-container-main"
      className="show-for-large bg-white shadow-sm sticky z-50"
      data-c="main navigation"
    >
      <div id="eyebrow-menu-container">
        <div
          id="eyebrow-menu"
          className="grid-container vertical-flex justify-center"
        >
          <div className="top-bar desktop-top-menu">
            <div className="top-bar-right">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n  #marketo-contact-us-modal {\n    width: 600px;\n    max-width: 75rem;\n    border: none;\n    border-style: none;\n    position: fixed;\n    margin: 0 auto;\n    top: 2rem !important;\n    right: 0;\n    left: 0;\n    bottom: auto;\n    max-height: 55rem;\n  }\n\n  #marketo-contact-us-modal form {\n    font-family: "Nunito Sans","Helvetica Neue",helvetica,roboto,arial,sans-serif !important;\n  }\n  \n  #marketo-contact-us-modal .close-button {\n    appearance: none;\n    border: 0;\n    border-radius: 5px;\n    background: 0 0;\n    position: absolute;\n    z-index: 10;\n    color: #404752;\n    cursor: pointer;\n    right: 1rem;\n    top: 0.5rem;\n    font-size: 2em;\n    line-height: 1;\n    font-weight: 100;\n    padding: 0;\n  }\n\n  #marketo-contact-us-modal h4 {\n    line-height: 1.3;\n    letter-spacing: .25px;\n    font-family: Nudista;\n    padding-bottom: 0.5rem;\n    font-size: 1.5625rem;\n    margin-top: 0;\n  }\n\n  #marketo-contact-us-modal input {\n    height: 40px!important;\n    border-radius: 4px!important;\n    box-shadow: none!important;\n    width: 320px!important;\n    padding: 16px!important;\n    border: 1px solid #91a1ae!important;\n    font-size: 16px!important;\n    margin-bottom: 0!important;\n    display: block;\n    box-sizing: border-box;\n    margin: 0 0 1rem;\n    background-color: #fff;\n    font-family: inherit;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #151e29;\n    transition: box-shadow .5s,border-color .25s ease-in-out;\n    appearance: none;\n  }\n\n  #marketo-contact-us-modal input::placeholder, #marketo-contact-us-modal select, #marketo-contact-us-modal textarea::placeholder {\n    color: rgb(117, 117, 117) !important;\n    font-weight: lighter !important;\n  }\n\n  #marketo-contact-us-modal .neo-marketo-form .mktoFormRow, #marketo-contact-us-modal .neo-marketo-form .mktoButtonRow {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n\n  #marketo-contact-us-modal .mktoForm .mktoButton {\n    width: 320px!important;\n    padding: 16px!important;\n    background: #018bff!important;\n    border: none!important;\n    font-size: 16px!important;\n    color: #fff;\n    cursor: pointer;\n  }\n\n  #marketo-contact-us-modal .mktoForm .mktoAsterix{\n    display: none;\n  }\n\n  #marketo-contact-us-modal select {\n    height: 40px!important;\n    border-radius: 4px!important;\n    box-shadow: none!important;\n    width: 320px!important;\n    border: 1px solid #91a1ae!important;\n    font-size: 16px!important;\n    margin-bottom: 0!important;\n    padding: 0 32px 0 16px!important;\n    margin: 0 0 1rem;\n    appearance: none;\n    background-color: #fff;\n    font-family: inherit;\n    line-height: 1.5;\n    background-origin: content-box;\n    background-position: right -1rem center;\n    background-repeat: no-repeat;\n    background-size: 9px 6px;\n    transition: box-shadow .5s,border-color .25s ease-in-out;\n  }\n\n  #marketo-contact-us-modal .mktoErrorMsg {\n    text-align: left;\n    margin-top: 4px;\n    --tw-text-opacity: 1;\n    color: rgba(237,18,82,var(--tw-text-opacity));\n    font-size: .875rem;\n    line-height: 1.25rem;\n  }\n\n  #marketo-contact-us-modal textarea {\n    border-radius: 4px!important;\n    box-shadow: none!important;\n    width: 320px!important;\n    padding: 16px!important;\n    border: 1px solid #91a1ae!important;\n    font-size: 16px!important;\n    height: auto;\n    max-height: 5rem;\n  }\n\n  #marketo-contact-us-modal .mktoFormCol {\n    margin-bottom: 16px!important;\n  }\n\n  #marketo-contact-us-modal .privacy-policy {\n    width: 320px!important;\n    margin: auto!important;\n    margin-top: 24px!important;\n    font-size: 14px!important;\n  }\n\n  #marketo-contact-us-modal .privacy-policy .mktoHtmlText {\n    color: #151e29;\n    text-align: center;\n  }\n\n  #marketo-contact-us-modal a {\n    color: #0070d9;\n    font-weight: normal;\n    text-decoration: none;\n  }\n\n  #marketo-contact-us-modal a:hover {\n    color: #0056b3;\n    text-decoration: underline;\n  }  \n  \n  #marketo-contact-us-modal label {\n    display: block;\n    margin: 0;\n    font-size: .875rem;\n    font-weight: 400;\n    line-height: 1.8;\n    color: #151e29;\n  }\n\n  #eyebrow-menu a:focus {\n    color: rgba(64,71,82,1);\n    text-decoration: none;\n  }\n\n  #eyebrow-menu a:hover {\n    color: inherit;\n    text-decoration: none;\n  }\n'
                }}
              />
              <ul
                className="items-center z-20 flex m-0 mt-2"
                id="eyebrow-menu-items"
              >
                <li className="m-0 mr-6 group relative">
                  <a
                    href="/partners/"
                    className="text-xs font-normal text-charcoal hover:text-black p-0 cursor-pointer"
                  >
                    Partners{" "}
                    <i
                      className="n-icon n-icon-chevron-down n-icon-sm ml-1"
                      aria-hidden="true"
                    />
                  </a>{" "}
                  <div
                    className="hidden group-hover:block absolute pt-2 z-50"
                    style={{ left: "-24px" }}
                  >
                    <ul className="py-2 border-none border-radius shadow-md dropdown-submenu rounded-md">
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/partners/directory/"
                          data-l="Find a Partner"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Find a Partner
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/partners/neo4j-partner-program/"
                          data-l="Become a Partner"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Become a Partner
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/partners/solution-partners/"
                          data-l="Solution Partners"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Solution Partners
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/partners/oem-partners/"
                          data-l="OEM Partners"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            OEM Partners
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/partners/technology-partners/"
                          data-l="Technology Partners"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Technology Partners
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="https://partner.neo4j.com/"
                          data-l="Partner Portal Login"
                          target="_blank"
                          rel="noopener"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Partner Portal Login
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-0 mr-6 group relative">
                  <span className="text-xs font-normal text-charcoal hover:text-black p-0 cursor-default">
                    Company{" "}
                    <i
                      className="n-icon n-icon-chevron-down n-icon-sm ml-1"
                      aria-hidden="true"
                    />
                  </span>{" "}
                  <div
                    className="hidden group-hover:block absolute pt-2 z-50"
                    style={{ left: "-24px" }}
                  >
                    <ul className="py-2 border-none border-radius shadow-md dropdown-submenu rounded-md">
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/company/"
                          data-l="About Us"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            About Us
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/newsroom/"
                          data-l="Newsroom"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Newsroom
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/awards/"
                          data-l="Awards and Honors"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Awards and Honors
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/graphs4good/"
                          data-l="Graphs4Good"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Graphs4Good
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/careers/"
                          data-l="Careers"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Careers
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/culture/"
                          data-l="Culture"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Culture
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/diversity-and-inclusion/"
                          data-l="Diversity"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Diversity
                          </span>
                        </a>
                      </li>
                      <li className="hover:bg-whitesmoke m-0 relative">
                        <a
                          href="/leadership/"
                          data-l="Leadership"
                          className="menu-dropdown-item  px-4 py-2 block"
                        >
                          <span className="block whitespace-nowrap text-charcoal text-xs">
                            Leadership
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="m-0 mr-6 group relative">
                  <span className="hidden contact-us-variant">
                    <a
                      data-open="marketo-contact-us-modal"
                      href="javascript:"
                      className="text-xs font-normal text-charcoal hover:text-black p-0 cursor-pointer"
                      aria-controls="marketo-contact-us-modal"
                      aria-haspopup="true"
                      tabIndex={0}
                    >
                      Contact Us{" "}
                    </a>
                  </span>
                  <span className="contact-us-control">
                    <a
                      href="/contact-us/"
                      className="text-xs font-normal text-charcoal hover:text-black p-0 cursor-pointer"
                    >
                      Contact Us{" "}
                    </a>
                  </span>{" "}
                </li>
                <li className="m-0 mr-6 group relative">
                  <a
                    href="https://support.neo4j.com/"
                    className="text-xs font-normal text-charcoal hover:text-black p-0 cursor-pointer"
                  >
                    Support{" "}
                  </a>{" "}
                </li>
                <li
                  className="horizontal-flex text-charcoal search-button cursor-pointer hover:bg-whitesmoke rounded p-2 m-0"
                  style={{ lineHeight: 0 }}
                >
                  <span className="n-icon n-icon-search" />
                </li>
              </ul>
              {/* Control the marketo modal */}
            </div>
          </div>
        </div>
      </div>
      <div id="neo4j-main-menu-container" className="bg-white z-10 w-full top-0">
        <div
          id="neo4j-main-menu"
          className="grid-container vertical-flex justify-center py-3"
        >
          <div className=" desktop-menu flex">
            <div>
              <a href="/" className="mr-8">
                <img
                  height="34px"
                  width="104px"
                  src="https://dist.neo4j.com/wp-content/uploads/20210423072428/neo4j-logo-2020-1.svg"
                  alt="The Neo4j Graph Platform – The #1 Platform for Connected Data"
                />
              </a>
            </div>
            <div className="flex items-center w-full ml-4">
              <div className="w-full h-full">
                <ul className="items-center z-50 flex m-0 h-full">
                  <li className="group relative m-0 flex items-center self-stretch n-products-menu">
                    <span className="text-charcoal hover:text-black px-4 text-sm font-normal cursor-default">
                      Products
                    </span>
                    <div
                      className="hidden group-hover:block absolute top-full"
                      style={{ top: "100%" }}
                    >
                      <ul className="py-4 border-none border-radius menu-dropdown-shadow bg-white text-left m-0 dropdown-submenu rounded-md">
                        <div className="flex flex-row gap-x-4">
                          <div className="flex flex-col w-full">
                            <div className="flex-1">
                              <li className="menu-item-wrapper ">
                                <a
                                  href="/product/"
                                  data-l="Platform Overview  →"
                                  className="menu-dropdown-item"
                                >
                                  <span className="menu-item-title">
                                    Platform Overview →{" "}
                                  </span>
                                  <span className="menu-item-description">
                                    Neo4j graph technology products help the world
                                    make sense of data.
                                  </span>
                                </a>
                                {/* Maybe flyout submenu */}
                              </li>{" "}
                              <div className="flex flex-row mt-2">
                                <div>
                                  <span className="px-8 pt-4 pb-2 text-overline text-sm text-primary block font-bold">
                                    Graph Database
                                  </span>
                                  <li className="menu-item-wrapper ">
                                    <a
                                      href="/product/neo4j-graph-database/"
                                      data-l="Neo4j Graph Database"
                                      className="menu-dropdown-item"
                                    >
                                      <span className="menu-item-title">
                                        Neo4j Graph Database{" "}
                                      </span>
                                      <span className="menu-item-description">
                                        Self-managed, deploy anywhere
                                      </span>
                                    </a>
                                    {/* Maybe flyout submenu */}
                                  </li>
                                  <li className="menu-item-wrapper ">
                                    <a
                                      href="/cloud/platform/aura-graph-database/"
                                      data-l="Neo4j AuraDB"
                                      className="menu-dropdown-item"
                                    >
                                      <span className="menu-item-title">
                                        Neo4j AuraDB{" "}
                                      </span>
                                      <span className="menu-item-description">
                                        Fully managed graph database as a service
                                      </span>
                                    </a>
                                    {/* Maybe flyout submenu */}
                                  </li>
                                </div>
                                <div>
                                  <span className="px-8 pt-4 pb-2 text-overline text-sm text-primary block font-bold">
                                    Graph Data Science
                                  </span>
                                  <li className="menu-item-wrapper ">
                                    <a
                                      href="/product/graph-data-science/"
                                      data-l="Neo4j Graph Data Science"
                                      className="menu-dropdown-item"
                                    >
                                      <span className="menu-item-title">
                                        Neo4j Graph Data Science{" "}
                                      </span>
                                      <span className="menu-item-description">
                                        Graph analytics and modeling platform
                                      </span>
                                    </a>
                                    {/* Maybe flyout submenu */}
                                  </li>
                                  <li className="menu-item-wrapper ">
                                    <a
                                      href="/cloud/platform/aura-graph-data-science/"
                                      data-l="Neo4j AuraDS"
                                      className="menu-dropdown-item"
                                    >
                                      <span className="menu-item-title">
                                        Neo4j AuraDS
                                        <span className="text-primary font-normal text-xs border border-primary-50 border-solid rounded-full inline-block px-2 ml-2">
                                          New!
                                        </span>{" "}
                                      </span>
                                      <span className="menu-item-description">
                                        Fully managed graph data science as a
                                        service
                                      </span>
                                    </a>
                                    {/* Maybe flyout submenu */}
                                  </li>
                                </div>
                              </div>
                            </div>
                            <div className="px-8">
                              <hr />
                              <div className="flex gap-x-8 with-underline-anchors py-2">
                                <div
                                  className="grow"
                                  style={{ flexBasis: "100%" }}
                                >
                                  <li className="menu-item-wrapper text-sm">
                                    <div className="font-bold">
                                      Download Center
                                    </div>
                                    <div className="font-normal menu-item-text-light">
                                      <a
                                        data-l="product download-center db"
                                        className="menu-dropdown-item-link menu-item-text-light"
                                        href="/download-center/"
                                      >
                                        Graph Database
                                      </a>{" "}
                                      •{" "}
                                      <a
                                        data-l="product download-center ds"
                                        href="/graph-data-science-software/"
                                        className="menu-dropdown-item-link menu-item-text-light"
                                      >
                                        Graph Data Science
                                      </a>
                                    </div>
                                  </li>
                                </div>
                                <div
                                  className="grow"
                                  style={{ flexBasis: "100%" }}
                                >
                                  <li className="menu-item-wrapper text-sm">
                                    <div className="font-bold">Pricing</div>
                                    <div className="font-normal menu-item-text-light">
                                      <a
                                        data-l="product pricing db"
                                        href="/pricing/"
                                        className="menu-dropdown-item-link menu-item-text-light"
                                      >
                                        Graph Database
                                      </a>{" "}
                                      •{" "}
                                      <a
                                        data-l="product pricing ds"
                                        href="/pricing/#graph-data-science"
                                        className="menu-dropdown-item-link menu-item-text-light"
                                      >
                                        Graph Data Science
                                      </a>
                                    </div>
                                  </li>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-whitesmoke mr-4 rounded-md py-2 menu-group-with-background">
                            <span className="px-8 pt-4 pb-2 text-overline text-aluminum text-sm block">
                              User Tools
                            </span>
                            <li className="menu-item-wrapper ">
                              <a
                                href="/product/developer-tools/"
                                data-l="Neo4j Developer Tools"
                                className="menu-dropdown-item"
                              >
                                <span className="menu-item-title">
                                  Neo4j Developer Tools{" "}
                                </span>
                                <span className="menu-item-description">
                                  Desktop, Browser, and Data Importer
                                </span>
                              </a>
                              {/* Maybe flyout submenu */}
                            </li>
                            <li className="menu-item-wrapper ">
                              <a
                                href="/product/cypher-graph-query-language/"
                                data-l="Cypher Query Language"
                                className="menu-dropdown-item"
                              >
                                <span className="menu-item-title">
                                  Cypher Query Language{" "}
                                </span>
                                <span className="menu-item-description">
                                  Powerful, intuitive, and graph-optimized
                                </span>
                              </a>
                              {/* Maybe flyout submenu */}
                            </li>
                            <li className="menu-item-wrapper ">
                              <a
                                href="/product/graphql-library/"
                                data-l="Neo4j GraphQL Library"
                                className="menu-dropdown-item"
                              >
                                <span className="menu-item-title">
                                  Neo4j GraphQL Library{" "}
                                </span>
                                <span className="menu-item-description">
                                  Low-code, open source API library
                                </span>
                              </a>
                              {/* Maybe flyout submenu */}
                            </li>
                            <li className="menu-item-wrapper ">
                              <a
                                href="/product/connectors/"
                                data-l="Neo4j Data Connectors"
                                className="menu-dropdown-item"
                              >
                                <span className="menu-item-title">
                                  Neo4j Data Connectors{" "}
                                </span>
                                <span className="menu-item-description">
                                  Apache Kafka, Apache Spark, and BI tools
                                </span>
                              </a>
                              {/* Maybe flyout submenu */}
                            </li>
                            <li className="menu-item-wrapper ">
                              <a
                                href="/product/bloom/"
                                data-l="Neo4j Bloom"
                                className="menu-dropdown-item"
                              >
                                <span className="menu-item-title">
                                  Neo4j Bloom{" "}
                                </span>
                                <span className="menu-item-description">
                                  Easy graph visualization and exploration
                                </span>
                              </a>
                              {/* Maybe flyout submenu */}
                            </li>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </li>
                  <li className="group relative m-0 flex items-center self-stretch n-solutions-menu">
                    <span className="text-charcoal hover:text-black px-4 text-sm font-normal cursor-default">
                      Solutions
                    </span>
                    <div
                      className="hidden group-hover:block absolute top-full"
                      style={{ top: "100%" }}
                    >
                      <ul className="py-4 border-none border-radius menu-dropdown-shadow bg-white text-left m-0 dropdown-submenu rounded-md">
                        <li className="menu-item-wrapper  group-flyout">
                          <a
                            href="/use-cases/"
                            data-l="Use Cases"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">Use Cases </span>
                            <span className="menu-item-description">
                              Fraud detection, knowledge graphs and more
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                          <div
                            className="n-icon n-icon-chevron-right"
                            style={{
                              height: 10,
                              width: 10,
                              position: "absolute",
                              right: "1rem",
                              top: "calc(50% - 8px)"
                            }}
                          />
                          <div
                            className="flyout hidden absolute pt-0 z-50 top-full"
                            style={{ left: "100%", top: 0, width: "max-content" }}
                          >
                            <div className="py-4 m-0 border-none border-radius rounded-tl-none menu-dropdown-shadow bg-white text-left rounded-md">
                              <div className="menu-dropdown-item relative">
                                <span className="menu-item-title">
                                  Knowledge Graphs
                                </span>
                                <span className="menu-item-description whitespace-pre-line">
                                  Knowledge graphs are the force multiplier of
                                  smart data management and analytics use cases.
                                </span>
                                <a
                                  data-l="knowledge graphs"
                                  href="/use-cases/knowledge-graph/"
                                  className="block arrowed full-clickable mt-2"
                                  id="knowledge-graphs-menu-link"
                                >
                                  Learn More
                                </a>
                              </div>
                              <hr />
                              <div className="flex">
                                <div
                                  style={{ maxWidth: "18rem", flexBasis: "50%" }}
                                >
                                  <div className="pt-3 pb-1 px-8 font-bold text-primary text-overline">
                                    By Application
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/graph-data-science-artificial-intelligence/"
                                      data-l="Analytics and Data Science"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Analytics and Data Science{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/fraud-detection/"
                                      data-l="Fraud Detection"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Fraud Detection{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/knowledge-graph/"
                                      data-l="Knowledge Graphs"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Knowledge Graphs{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/real-time-recommendation-engine/"
                                      data-l="Real Time Recommendations"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Real Time Recommendations{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/supply-chain-management/"
                                      data-l="Supply Chain Management"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Supply Chain Management{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/identity-and-access-management/"
                                      data-l="Identity and Access Management"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Identity and Access Management{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/master-data-management/"
                                      data-l="Master Data Management"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Master Data Management{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/network-and-it-operations/"
                                      data-l="Network and IT Operations"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Network and IT Operations{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/privacy-risk-compliance/"
                                      data-l="Data Privacy, Risk and Compliance"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Data Privacy, Risk and Compliance{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/social-network/"
                                      data-l="Social Networking"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Social Networking{" "}
                                    </a>
                                  </div>
                                </div>
                                <div
                                  style={{ maxWidth: "18rem", flexBasis: "50%" }}
                                >
                                  <div className="pt-3 pb-1 px-8 font-bold text-primary text-overline">
                                    By Industry
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/financial-services/"
                                      data-l="Financial Services"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Financial Services{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/retail/"
                                      data-l="Retail"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Retail{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/life-sciences/"
                                      data-l="Life Sciences"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Life Sciences{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/telecom/"
                                      data-l="Telecommunications"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Telecommunications{" "}
                                    </a>
                                  </div>
                                  <div className="m-0 relative">
                                    <a
                                      href="/use-cases/government/"
                                      data-l="Government"
                                      className="menu-dropdown-item flyout-menu-dropdown-item"
                                    >
                                      Government{" "}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/case-studies/"
                            data-l="Case Studies"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">Case Studies </span>
                            <span className="menu-item-description">
                              In-depth looks at customer success stories
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/customers/"
                            data-l="Customers"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">Customers </span>
                            <span className="menu-item-description">
                              Companies, governments and NGOs using Neo4j
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/professional-services/"
                            data-l="Professional Services"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Professional Services{" "}
                            </span>
                            <span className="menu-item-description">
                              The world’s best graph database consultants
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>{" "}
                      </ul>
                    </div>
                  </li>
                  <li className="group relative m-0 flex items-center self-stretch n-learn-menu">
                    <span className="text-charcoal hover:text-black px-4 text-sm font-normal cursor-default">
                      Learn
                    </span>
                    <div
                      className="hidden group-hover:block absolute z-50 top-full"
                      style={{ top: "100%" }}
                    >
                      <ul className="py-4 border-none border-radius menu-dropdown-shadow bg-white text-left m-0 dropdown-submenu flex rounded-md">
                        <div>
                          <span className="px-8 pt-4 pb-2 text-overline text-sm text-primary block font-bold">
                            Resources
                          </span>
                          <li className="menu-item-wrapper ">
                            <a
                              href="/who-uses-neo4j/"
                              data-l="Who Uses Neo4j?"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">
                                Who Uses Neo4j?{" "}
                              </span>
                              <span className="menu-item-description">
                                75 percent of Fortune 100 companies
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>
                          <li className="menu-item-wrapper ">
                            <a
                              href="/graph-database-executive-insights/"
                              data-l="Executive Insights"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">
                                Executive Insights{" "}
                              </span>
                              <span className="menu-item-description">
                                Get to Know Graph Technology
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>
                          <li className="menu-item-wrapper ">
                            <a
                              href="https://graphacademy.neo4j.com/"
                              data-l="GraphAcademy"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">
                                GraphAcademy{" "}
                              </span>
                              <span className="menu-item-description">
                                Free online courses and certifications
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>
                          <li className="menu-item-wrapper ">
                            <a
                              href="/blog/"
                              data-l="Neo4j Blog"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">Neo4j Blog </span>
                              <span className="menu-item-description">
                                Daily reads on general Neo4j topics
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>
                          <li className="menu-item-wrapper ">
                            <a
                              href="/videos/"
                              data-l="Videos"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">Videos </span>
                              <span className="menu-item-description">
                                Up-to-date, searchable archive
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>
                          <li className="menu-item-wrapper ">
                            <a
                              href="/books/"
                              data-l="Books"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">Books </span>
                              <span className="menu-item-description">
                                Learn in depth with free books
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>
                          <li className="menu-item-wrapper ">
                            <a
                              href="/resources/"
                              data-l="Resource Library"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">
                                Resource Library{" "}
                              </span>
                              <span className="menu-item-description">
                                White papers, data sheets and more
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>{" "}
                        </div>
                        <div>
                          <span className="px-8 pt-4 pb-2 text-overline text-sm text-primary block font-bold">
                            Events
                          </span>
                          <li className="menu-item-wrapper ">
                            <a
                              href="/graphsummit/"
                              data-l="GraphSummit"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">
                                GraphSummit{" "}
                              </span>
                              <span className="menu-item-description">
                                Live events in EMEA and APAC
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>
                          <li className="menu-item-wrapper ">
                            <a
                              href="/connections/"
                              data-l="Connections"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">
                                Connections{" "}
                              </span>
                              <span className="menu-item-description">
                                Our marquee digital event series
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>
                          <li className="menu-item-wrapper ">
                            <a
                              href="/events/"
                              data-l="Events Calendar"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">
                                Events Calendar{" "}
                              </span>
                              <span className="menu-item-description">
                                Live online events, trainings and demos
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>
                          <li className="menu-item-wrapper ">
                            <a
                              href="/live-demos/"
                              data-l="Live Demos"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">Live Demos </span>
                              <span className="menu-item-description">
                                Weekly demos with Neo4j experts
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>
                          <li className="menu-item-wrapper ">
                            <a
                              href="/webinars/"
                              data-l="Webinars"
                              className="menu-dropdown-item"
                            >
                              <span className="menu-item-title">Webinars </span>
                              <span className="menu-item-description">
                                Upcoming live and on-demand webinars
                              </span>
                            </a>
                            {/* Maybe flyout submenu */}
                          </li>{" "}
                        </div>
                      </ul>
                    </div>
                  </li>
                  <li className="group relative m-0 flex items-center self-stretch n-developers-menu">
                    <span className="text-charcoal hover:text-black px-4 text-sm font-normal cursor-default">
                      Developers
                    </span>
                    <div
                      className="hidden group-hover:block absolute top-full"
                      style={{ top: "100%" }}
                    >
                      <ul className="py-4 border-none border-radius menu-dropdown-shadow bg-white text-left m-0 dropdown-submenu rounded-md">
                        <li className="menu-item-wrapper ">
                          <a
                            href="/developer/"
                            data-l="Developer Home"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Developer Home{" "}
                            </span>
                            <span className="menu-item-description">
                              Best practices, how-to guides and tutorials
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/docs/"
                            data-l="Documentation"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Documentation{" "}
                            </span>
                            <span className="menu-item-description">
                              Manuals for Neo4j products, Cypher and drivers
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/download-center/"
                            data-l="Download Center"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Download Center{" "}
                            </span>
                            <span className="menu-item-description">
                              Get Neo4j products, tools and integrations
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/developer-blog/"
                            data-l="Developer Blog"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Developer Blog{" "}
                            </span>
                            <span className="menu-item-description">
                              Deep dives into more technical Neo4j topics
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="https://community.neo4j.com/"
                            data-l="Community"
                            target="_blank"
                            rel="noopener"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">Community </span>
                            <span className="menu-item-description">
                              A global forum for online discussion
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/developer/online-meetup/"
                            data-l="Online Meetups"
                            target="_blank"
                            rel="noopener"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Online Meetups{" "}
                            </span>
                            <span className="menu-item-description">
                              Global developer conferences and workshops
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>{" "}
                      </ul>
                    </div>
                  </li>
                  <li className="group relative m-0 flex items-center self-stretch n-data-scientists-menu">
                    <span className="text-charcoal hover:text-black px-4 text-sm font-normal cursor-default">
                      Data Scientists
                    </span>
                    <div
                      className="hidden group-hover:block absolute top-full"
                      style={{ top: "100%" }}
                    >
                      <ul className="py-4 border-none border-radius menu-dropdown-shadow bg-white text-left m-0 dropdown-submenu rounded-md">
                        <li className="menu-item-wrapper ">
                          <a
                            href="/product/graph-data-science/"
                            data-l="Graph Data Science Home"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Graph Data Science Home{" "}
                            </span>
                            <span className="menu-item-description">
                              Learn what Neo4j offers for data science
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/docs/graph-data-science/current/"
                            data-l="Data Science Documentation"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Data Science Documentation{" "}
                            </span>
                            <span className="menu-item-description">
                              Manual for the Graph Data Science library
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="https://graphacademy.neo4j.com/categories/data-scientist/"
                            data-l="GraphAcademy for Data Science"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              GraphAcademy for Data Science{" "}
                            </span>
                            <span className="menu-item-description">
                              Free online courses and certifications for data
                              scientists
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/developer/graph-data-science/"
                            data-l="Data Science Guides"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Data Science Guides{" "}
                            </span>
                            <span className="menu-item-description">
                              Deep dives &amp; how-tos on more technical topics
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="https://community.neo4j.com/c/neo4j-graph-platform/graph-algorithms/73"
                            data-l="Data Science Community"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Data Science Community{" "}
                            </span>
                            <span className="menu-item-description">
                              A global forum for online discussion
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/graph-data-science-software/"
                            data-l="Get Started with Graph Data Science"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Get Started with Graph Data Science{" "}
                            </span>
                            <span className="menu-item-description">
                              Download our software or get started in Sandbox
                              today!
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>{" "}
                      </ul>
                    </div>
                  </li>
                  <li className="group relative m-0 flex items-center self-stretch n-sign-in-menu">
                    <a
                      data-l="Sign In"
                      href=""
                      className="text-charcoal hover:text-black p-4 text-sm font-normal cursor-pointer"
                    >
                      Sign In
                    </a>
                    <div
                      className="hidden group-hover:block absolute top-full"
                      style={{ top: "100%" }}
                    >
                      <ul className="py-4 border-none border-radius menu-dropdown-shadow bg-white text-left m-0 dropdown-submenu rounded-md">
                        <li className="menu-item-wrapper ">
                          <a
                            href="https://console.neo4j.io/?mpp=4bfb2414ab973c741b6f067bf06d5575&mpid=182bfb383e380e-09ff97f1fde722-3b62684b-16a7f0-182bfb383e425ac"
                            data-l="Sign In Aura"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">Neo4j Aura </span>
                            <span className="menu-item-description">
                              Fully managed, cloud-native graph service
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="https://sandbox.neo4j.com/"
                            data-l="Sign In Sandbox"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Neo4j Sandbox{" "}
                            </span>
                            <span className="menu-item-description">
                              Learn graph databases and graph data science
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>{" "}
                      </ul>
                    </div>
                  </li>
                  <li className="group relative m-0 flex items-center self-stretch n-get-started-menu">
                    <a
                      data-l="Get Started"
                      href="/cloud/platform/aura-graph-database/?ref=nav-get-started-cta"
                      className="text-charcoal hover:text-black p-4 text-sm font-normal cursor-pointer"
                    >
                      Get Started
                    </a>
                    <div
                      className="hidden group-hover:block absolute top-full"
                      style={{ top: "100%" }}
                    >
                      <ul className="py-4 border-none border-radius menu-dropdown-shadow bg-white text-left m-0 dropdown-submenu rounded-md">
                        <li className="menu-item-wrapper ">
                          <a
                            href="/cloud/platform/aura-graph-database/?ref=get-started-dropdown-cta"
                            data-l="Get Started AuraDB"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Neo4j AuraDB
                              <span className="text-primary font-normal text-xs border border-primary-50 border-solid rounded-full inline-block px-2 ml-2">
                                Start Free
                              </span>{" "}
                            </span>
                            <span className="menu-item-description">
                              Start your fully managed Neo4j cloud database
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="https://sandbox.neo4j.com/?ref=get-started-dropdown-cta&persona=data-scientist"
                            data-l="Get Started Sandbox"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Neo4j Sandbox{" "}
                            </span>
                            <span className="menu-item-description">
                              Learn and use Neo4j for data science &amp; more
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/download/?ref=get-started-dropdown-cta"
                            data-l="Get Started Desktop"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Neo4j Desktop{" "}
                            </span>
                            <span className="menu-item-description">
                              Manage multiple local or remote Neo4j projects
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>
                        <li className="menu-item-wrapper ">
                          <a
                            href="/cloud/platform/aura-graph-data-science/?ref=get-started-dropdown-cta"
                            data-l="Get Started AuraDS"
                            className="menu-dropdown-item"
                          >
                            <span className="menu-item-title">
                              Neo4j AuraDS
                              <span className="text-primary font-normal text-xs border border-primary-50 border-solid rounded-full inline-block px-2 ml-2">
                                New!
                              </span>{" "}
                            </span>
                            <span className="menu-item-description">
                              Fully managed graph data science, starting at
                              $1/hour
                            </span>
                          </a>
                          {/* Maybe flyout submenu */}
                        </li>{" "}
                      </ul>
                    </div>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n.js-warning {\n  background-color: red;\n  color: white !important;\n  text-align: center;\n  padding: 10px;\n  border: 1px solid white;\n}\n"
      }}
    />
    <noscript>
      &amp;lt;h3 class="js-warning"&amp;gt;Warning: JavaScript is disabled on your
      browser. Parts of Neo4j.com will not work properly. &amp;lt;/h3&amp;gt;
    </noscript>
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n\n  body{\n    background-image: url("https://dist.neo4j.com/wp-content/uploads/20220818113124/BKGD_subtle-shapes_DT-copy.svg");\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n\n  #nodes-2022{\n    background-image: url("https://dist.neo4j.com/wp-content/uploads/20220818113445/Bkgd-shape_overlap-dot.png"), url("https://dist.neo4j.com/wp-content/uploads/20220818113447/Bkgd-shape_two-dots.svg");\n    background-repeat: no-repeat, no-repeat;\n    background-position: right, left;\n  }\n\n  /* Medium and up */\n  @media screen and (min-width: 40em) {\n\n    #nodes-hero{\n      background-image: url("https://dist.neo4j.com/wp-content/uploads/20220818112546/BKGDshape_v2.svg");\n      background-repeat:no-repeat;\n      background-position:center;\n    }\n\n    #nodes-hero::before{\n      content: url(\'https://dist.neo4j.com/wp-content/uploads/20220727094755/Art-2.svg\');\n      position: absolute;\n      z-index: 39; \n      left: 0px;\n      top: 100px;\n    }\n\n    #nodes-hero::after{\n      content: url(\'https://dist.neo4j.com/wp-content/uploads/20220727094754/Art-1.svg\');\n      position: absolute;\n      z-index: 39; \n      right: 0px;\n      top: 100px;\n    }\n    \n  }\n\n  /* Small only */\n  @media screen and (max-width: 39.9375em) {\n    #nodes-hero{\n      background-image: url("https://dist.neo4j.com/wp-content/uploads/20220729103511/nodes-hero-bg-mobile.svg");\n      min-height: 444px;\n    }\n\n    #nodes-hero::before{\n      content: url(\'https://dist.neo4j.com/wp-content/uploads/20220729103513/nodes-hero-right-mobile.svg\');\n      position: absolute;\n      z-index: 39; \n      left: 0px;\n      top: 50px;\n    }\n\n\n    #nodes-hero::after{\n      content: url(\'https://dist.neo4j.com/wp-content/uploads/20220729103512/nodes-hero-left-mobile.svg\');\n      position: absolute;\n      z-index: 39; \n      right: 0px;\n      top: 50px;\n    }\n  }\n\n   .video-container{\n      position: relative;\n      overflow: hidden;\n      width: 100%;\n      padding-top: 56.25%;\n   }\n\n   .responsive-iframe{\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n      height: 100%;\n      border-radius: 4px;\n   }\n\n   ul.checks{\n    list-style-image:url("https://dist.neo4j.com/wp-content/uploads/20220728155827/nodes-check.svg");\n   }\n\n   ul.checks li{\n     line-height: 2.5;\n     vertical-align: top;\n   }\n\n   .reverse-button{\n     background-color: transparent;\n     color: #fff;\n     border: 1px solid #fff;\n   }\n'
      }}
    />

    </>
  );
}

export default Neo4jHeader;
