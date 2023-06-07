import facebookIcon from '../public/facebook-icon.png';
import githubIcon from '../public/github-icon.png';
import instagramIcon from '../public/instagram-icon.png';
import twitterIcon from '../public/twitter-icon.png';
import { AboutContainer } from './AboutContainer';
import { ButtonsContainer } from './ButtonsContainer';
import { InfoContainer } from './InfoContainer';
import { InterestsContainer } from './InterestsContainer';
import { TopImage } from './TopImage';
import './styles.css';

export default function App() {
  return (
    <div className="content">
      <TopImage />
      <div className="main-container">
        <InfoContainer />
        <ButtonsContainer />
        <AboutContainer />
        <InterestsContainer />
        <footer className="footer">
          <img src={twitterIcon} alt="Twitter Icon" />
          <img src={githubIcon} alt="Github Icon" />
          <img src={instagramIcon} alt="Instagram Icon" />
          <img src={facebookIcon} alt="Facebook Icon" />
        </footer>
      </div>
    </div>
  );
}
