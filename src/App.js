import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import { Route } from "react-router";
import Main from './Main'
import './main.css';

function App() {
  return (
    <Main isBrowser={isBrowser} isMobile={isMobile} />
  );
}

export default App;
