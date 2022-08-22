/* eslint-disable jsx-a11y/anchor-is-valid */
import './plain-page.css';

/* eslint-disable-next-line */
export interface PlainPageProps { }

export function PlainPage(props: PlainPageProps) {
  return (
    <div id="nodes-2022">
        <section id="nodes-hero">
          <div className="grid-container">
            <div className="grid-x items-center justify-center">
              <div className="cell small-12 text-center">
                <img
                  src="https://dist.neo4j.com/wp-content/uploads/20220727094758/nodes-logo.svg"
                  alt=""
                />
                <div className="button-group mt-12 items-center justify-center">
                  <a
                    className="button reverse-button"
                    data-l="hero-primary"
                    data-open="aura-enterprise-contact-modal"
                    aria-controls="aura-enterprise-contact-modal"
                    aria-haspopup="true"
                    tabIndex={0}
                  >
                    Save my Spot
                  </a>
                  <a
                    className="button reverse-button"
                    data-l="hero-primary"
                    href="https://sessionize.com/neo4j-nodes-2022/"
                    target="_blank"
                  >
                    Submit Your Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="grid-container">
            <div className="grid-x grid-margin-y">
              <div className="cell small-12 medium-6 medium-offset-3 text-center">
                <h2>Welcome to NODES 2022 Online Conference!</h2>
                <p className="text-overline text-primary">
                  November 16th and 17th, 2022
                </p>
                <p>
                  NODES 2022 is a free two-day virtual conference of technical
                  presentations by developers and data scientists solving problems
                  with graphs.
                </p>
                <p>
                  Last year, 15,000 registered and 75 speakers from 30 countries
                  gave 85 talks, covering topics from ML and GraphQL to APIs and
                  Best Practices.
                </p>
              </div>
            </div>
            <div className="grid-x grid-margin-y mt-24">
              <div className="cell small-12 medium-6 medium-offset-3">
                <h3 className="text-center">Why You Should Attend NODES 2022</h3>
                <ul className="checks">
                  <li>An Event by and for Developers and Data Scientists</li>
                  <li>Multiple Tracks on a Wide Range of Graph Topics</li>
                  <li>The Best Network of Top Graph Experts and Practitioners</li>
                </ul>
              </div>
            </div>
            <div className="grid-x grid-margin-y mt-24">
              <div className="cell small-12 medium-6 medium-offset-3 text-center">
                <h3>Call for Papers Is Open</h3>
                <p className="text-overline text-primary">
                  CFP Deadline: August 31th, 2022
                </p>
                <p>
                  We're inviting all developers and data scientists in the Neo4j
                  community to submit talks on technical topics - from graph-powered
                  machine learning or knowledge graphs to algorithms, application
                  development, visualizations, or performance.
                </p>
                <a
                  className="button"
                  data-l="hero-primary"
                  href="https://sessionize.com/neo4j-nodes-2022/"
                  target="_blank"
                >
                  Submit Your Talk
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-0">
          <div id="video-tiles" className="pt-0 pb-0">
            <div className="grid-container p-16">
              <div className="grid-x grid-margin-x">
                <div className="cell small-12 mb-10 text-center">
                  <h3>Videos from NODES 2021</h3>
                </div>
              </div>
              <div className="grid-x grid-margin-x">
                <div className="cell small-12 small-12 medium-4 card card-minimal-style">
                  <div className="video-container">
                    <iframe
                      className="responsive-iframe"
                      src="https://www.youtube.com/embed/qdbhCG-Yn74?enablejsapi=1&origin=https%3A%2F%2Fneo4j.com"
                      title="9 - Building an ML Pipeline in Neo4j  Link Prediction Deep Dive"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      data-gtm-yt-inspected-8021936_349="true"
                      id="882142523"
                      data-gtm-yt-inspected-17="true"
                    />
                  </div>
                  <strong>
                    <p className="pb-8">
                      Building an ML Pipeline in Neo4j Link Prediction Deep Dive
                    </p>
                  </strong>
                </div>
                <div className="cell small-12 small-12 medium-4 card card-minimal-style">
                  <div className="video-container">
                    <iframe
                      className="responsive-iframe"
                      src="https://www.youtube.com/embed/YceBpk01Gxs?enablejsapi=1&origin=https%3A%2F%2Fneo4j.com"
                      title="9 - Best Practices For Using Cypher With GraphQL"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      data-gtm-yt-inspected-8021936_349="true"
                      id="841625759"
                      data-gtm-yt-inspected-17="true"
                    />
                  </div>
                  <strong>
                    <p className="pb-8">
                      Best Practices For Using Cypher With GraphQL
                    </p>
                  </strong>
                </div>
                <div className="cell small-12 small-12 medium-4 card card-minimal-style">
                  <div className="video-container">
                    <iframe
                      className="responsive-iframe"
                      src="https://www.youtube.com/embed/w42uqxGd7qM?enablejsapi=1&origin=https%3A%2F%2Fneo4j.com"
                      title="3 - Cypher MERGE Explained"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      data-gtm-yt-inspected-8021936_349="true"
                      id="964720722"
                      data-gtm-yt-inspected-17="true"
                    />
                  </div>
                  <strong>
                    <p className="pb-8">Cypher MERGE Explained</p>
                  </strong>
                </div>
              </div>
              <div className="text-center">
                <a className="button" href="https://neo4j.com/video/nodes-2021/">
                  Watch all the Presentations
                </a>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}