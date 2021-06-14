import React from 'react-router'
import poster01 from "../../../src/images/posters/01.jpg"
import poster02 from "../../../src/images/posters/02.jpg"
import poster03 from "../../../src/images/posters/03.jpg"
import poster04 from "../../../src/images/posters/04.jpg"
import poster05 from "../../../src/images/posters/05.jpg"
import poster06 from "../../../src/images/posters/06.jpg"
import myProfile from "../../../src/images/profiles/00.jpg"
import profile01 from "../../../src/images/profiles/01.jpg"
import profile02 from "../../../src/images/profiles/02.jpg"
import profile03 from "../../../src/images/profiles/03.jpg"
import profile04 from "../../../src/images/profiles/04.jpg"
import profile05 from "../../../src/images/profiles/05.jpg"
import profile06 from "../../../src/images/profiles/06.jpg"

function Content(props) {

  const posters = [
    poster01, poster02, poster03, poster04, poster05, poster06
  ]
  const profiles = [
    profile01, profile02, profile03, profile04, profile05, profile06
  ]

  return (
    <div className="ContentMain">
      <div className="ContentHeader">
        <div className="ContentHeaderWrap">
          <img className="ContenHeaderProfile" src={myProfile} width="50px" height="50px" />
        </div>
        {profiles.map((item, index) => {
          return (
            <div className="ContentHeaderWrap" key={index}>
              <img className="ContenHeaderProfile" src={item} width="50px" height="50px" />
            </div>
          )
        })}
      </div>
      <hr />
      <div className="ContentContainer">
        {posters.map((item, index) => {
          return (
            <div className="ContentWrap" key={index}>
              <div className="ContentWrapHeader">
                <div className="ContentWrapHeaderProfile">profile</div>
                <div className="ContenWrapHeaderInfo">info</div>
              </div>
              <div>
                <img src={item} width="375px" height="350px" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Content