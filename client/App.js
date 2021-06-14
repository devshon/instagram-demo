import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import './main.css';

function App() {
  return (
    <div>
      <BrowserView>
      browser
      </BrowserView>
      <MobileView>
      mobile
      </MobileView>
    </div>
  );
}

export default App;
