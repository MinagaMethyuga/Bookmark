import Cards from '../Components/Cards';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Switcher from '../Components/Switcher';

import './home.css';

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="hero">
        <div className="leftsection">
          <h1>A Simple Bookmark Manager</h1>
          <p>A clean and simple interface to organize your favourite<br/>websites. Open a new browser tab and
              see your sites load <br/>instantly. Try it now for free.</p>
          <button className="btnchrome">Get it on Chrome</button>
          <button className="btnfirefox">Get it on Firefox</button>
        </div>
        <div className="rightsection">
          <div className="heroimg">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="657" height="466"><defs><filter id="a" width="118%" height="126.9%" x="-9%" y="-5.7%" filterUnits="objectBoundingBox"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter><rect id="c" width="578" height="385" rx="26"/><filter id="b" width="126%" height="139%" x="-13%" y="-11.7%" filterUnits="objectBoundingBox"><feOffset dy="30" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="20"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.18243335 0 0 0 0 0.230632694 0 0 0 0 0.506057518 0 0 0 0.200120192 0"/></filter><linearGradient id="d" x1="99.013%" x2="2.544%" y1="71.675%" y2="29.014%"><stop offset="0%" stopColor="#151515"/><stop offset="100%" stopColor="#3D3D3D"/></linearGradient><rect id="e" width="536" height="346" y="3" rx="8"/></defs><g fill="none" fillRule="evenodd" filter="url(#a)" transform="translate(39 9)"><g transform="translate(.5 .5)"><g fillRule="nonzero"><use fill="#000" filter="url(#b)" xlinkHref="#c"/><use fill="#777" xlinkHref="#c"/></g><rect width="574.23" height="381.865" x="2" y="2" fill="url(#d)" fillRule="nonzero" rx="25"/><g transform="translate(21.03 16.303)"><rect width="471.463" height="353.756" x="33" fill="#2A2A2A" fillRule="nonzero" opacity=".1" rx="5"/><mask id="f" fill="#fff"><use xlinkHref="#e"/></mask><use fill="#E8EAF6" fillRule="nonzero" xlinkHref="#e"/><g mask="url(#f)"><path fill="#5267DF" d="M-3.53 3.197h547v59h-547z"/><g transform="translate(22.47 17.197)" fill="#FFF"><circle cx="16" cy="16" r="16" opacity=".245"/><circle cx="477" cy="16" r="16" opacity=".104"/><g transform="translate(47 6)"><rect width="120" height="6" opacity=".75" rx="3"/><rect width="64" height="6" y="14" opacity=".25" rx="3"/></g></g></g><g mask="url(#f)"><g transform="translate(57 96)"><rect width="261" height="316" fill="#FFF" rx="8"/><rect width="128" height="316" x="295" fill="#FFF" rx="8"/><rect width="120" height="6" x="78.47" y="38.197" fill="#242A45" opacity=".5" rx="3"/></g></g></g></g><g transform="translate(110 135)"><circle cx="16" cy="26" r="16" fill="#F98E5D"/><rect width="88" height="6" x="284" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="20" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="40" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="60" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="94" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="114" fill="#242A45" opacity=".25" rx="3"/><rect width="88" height="6" x="284" y="134" fill="#242A45" opacity=".25" rx="3"/><rect width="64" height="6" x="47" y="30" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 201)"><circle cx="16" cy="16" r="16" fill="#6AC6D6"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 257)"><circle cx="16" cy="16" r="16" fill="#A47ED4"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g><g transform="translate(110 313)"><circle cx="16" cy="16" r="16" fill="#EC7878"/><rect width="120" height="6" x="47" y="6" fill="#242A45" opacity=".5" rx="3"/><rect width="64" height="6" x="47" y="20" fill="#242A45" opacity=".25" rx="3"/></g></g></svg>
          </div>
          <div className="bookmarkimg"></div>
        </div>
      </div>
      <Switcher/>
      <div className="thirdsec">
        <div className="thirdheader">
          <h1>Download the extension</h1>
          <p>We’ve got more browsers in the pipeline. Please do let us know if <br/>you’ve got a favourite you’d like us to prioritize.</p>
        </div>
        <div className="carddiv">
        <Cards 
          title="Add to Chrome" 
          contentp="Minimum version 62" 
          svg={<svg xmlns="http://www.w3.org/2000/svg" width="102" height="100"><g fill="none"><path fill="#E16B5A" d="M50.768.01s30.01-1.325 45.916 28.249H48.217s-9.154-.296-16.957 10.594c-2.25 4.561-4.65 9.27-1.95 18.538-3.9-6.472-20.708-35.164-20.708-35.164S20.457 1.186 50.768.009z"/><path fill="#FFD464" d="M95.122 75.095S81.284 101.238 47.21 99.952C51.414 92.82 71.45 58.8 71.45 58.8s4.837-7.626-.875-19.696c-2.903-4.192-11.7-8.586-21.237-10.928 7.67-.075 47.25.005 47.25.005s12.653 20.59-1.466 46.915z"/><path fill="#74B340" d="M6.628 75.294s-16.17-24.825 2.004-53.116l24.225 41.163s4.314 7.92 17.832 9.104c5.153-.368 10.514-.682 17.351-7.607C64.27 71.387 47.327 100 47.327 100s-24.51.448-40.7-24.706z"/><ellipse cx="50.646" cy="50.406" fill="#FFF" rx="23.064" ry="22.656"/><ellipse cx="50.638" cy="50.406" fill="#2995CC" rx="18.292" ry="17.969"/><path fill="#268CBF" d="M50.643 32.441c-.364 0-.724.014-1.082.034 9.598.55 17.209 8.369 17.209 17.934 0 9.568-7.611 17.386-17.21 17.937.36.02.72.034 1.083.034 10.101 0 18.292-8.046 18.292-17.97 0-9.923-8.19-17.969-18.292-17.969z"/></g></svg>} 
          className="card1"/>

        <Cards 
          title="Add to Firefox" 
          contentp="Minimum version 55" 
          svg={<svg xmlns="http://www.w3.org/2000/svg" width="105" height="100"><path fill="#FF9800" d="M105 50c0 28.862-23.513 50-52.5 50S0 76.588 0 47.726c0-9.043 2.33-17.59 6.392-25a.995.995 0 0 1 .23-.366C4.338 18.956 3.334 10.318 9.128 4.541c0 2.411 1.464 6.548 3.104 9.638 1.326 2.457 2.737 4.228 3.741 4 2.284-.543 10.27-.543 11.412 0 1.877-2.405 6.445-9.09 13.703-9.09-4.062 4.045-15.704 18.185 4.567 18.185h4.568L36.52 36.363s1.556 3 0 4.548c-1.732-1.732-9.128 1.862-9.128 6.815s5.296 11.363 15.98 11.363c10.683 0 7.986-4.548 13.696-4.548 5.709 0 6.844 4.548 6.844 4.548-7.855 0-13.558 9.09-22.824 9.09 4.567 3.364 7.58 4.547 13.696 4.547 15.113 0 27.392-12.225 27.392-27.274 0-6.09-2.008-11.683-5.388-16.224a27.414 27.414 0 0 1 10.96 19.498 40.554 40.554 0 0 0 1.279-10.089c0-13.683-5.84-31.776-15.98-38.637C87.655 4.358 105 18.466 105 45.452V50z"/></svg>} 
          className="card2"
        />

        <Cards 
          title="Add to Opera" 
          contentp="Minimum version 46" 
          svg={<svg xmlns="http://www.w3.org/2000/svg" width="96" height="100"><path fill="#EB6060" fill-rule="evenodd" d="M48 100C21.49 100 0 77.614 0 50S21.49 0 48 0s48 22.386 48 50-21.49 50-48 50zm0-10c13.807 0 25-17.909 25-40S61.807 10 48 10 23 27.909 23 50s11.193 40 25 40z"/></svg>} 
          className="card3"
        />
        </div>
      </div>
      <div className="fouthsection">
        <div className="fouthheadsection">
          <h1>Frequently Asked Questions</h1>
          <p>Here are some of our FAQs. If you habe any other questions<br/>you’d like answered please feel free to email us.</p>
        </div> 
        <div className="queslist">
          <div className="firstque">
            <h1>What is Bookmark?</h1>
            <p></p>
            <div className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
            </div>
          </div>
          <div className="secondque">
            <h1>How can I request a new browser?</h1>
            <p></p>
            <div className="arrow2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
            </div>
          </div>
          <div className="thirdque">
            <h1>Is there a mobile app?</h1>
            <p></p>
            <div className="arrow3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>           
            </div>
          </div>
          <div className="fourthque">
            <h1>What about other Chromium browsers?</h1>
            <p></p>
            <div className="arrow4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
            </div>
          </div>
          <button className='morebtnfouth'>More Info</button>
        </div>   
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
