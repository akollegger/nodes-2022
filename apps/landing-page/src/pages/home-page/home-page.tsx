import './home-page.css';

/* eslint-disable-next-line */
export interface WelcomePageProps {}

export function WelcomePage(props: WelcomePageProps) {
  return (
    <div className="prose">
      <h1>Welcome to WelcomePage!</h1>
    </div>
  );
}

export default WelcomePage;
