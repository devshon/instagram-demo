import React from 'react';
import Home from './container/mobile/Home'

function Main(props){

    const {isBrowser,isMobile} = props

    return (
        <div>    
            {isBrowser ? null : isMobile ? <Home/>:null}
        </div>
    )
}

export default Main