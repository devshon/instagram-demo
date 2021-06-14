import React from 'react-router'
import { Router, Route, Switch } from "react-router"
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

function MobileInstarMain(props) {


  return (
    <div className="MobileInstarMain">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default MobileInstarMain