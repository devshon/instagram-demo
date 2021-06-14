import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import './App.css';

function App() {
console.log("is browser >>> ",isBrowser)
console.log("is mobile >>> ",isMobile)
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
