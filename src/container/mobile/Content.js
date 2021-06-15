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

  const contents = [
    { profile: profile01, poster: poster01, username: "taveler", views: 1400, like: 800, registeredAt: new Date(), comment: [{ username: "helloworld", text: "너무 이뻐요~", date: new Date() }, { username: "prtty_id", text: "좋아요~", date: new Date() }], },
    { profile: profile02, poster: poster02, username: "suyeon_9.6", views: 5000000, like: 3000000, registeredAt: new Date(), comment: [{ username: "helloworld", text: "너무 이뻐요~", date: new Date() }, { username: "prtty_id", text: "좋아요~", date: new Date() }], },
    { profile: profile03, poster: poster03, username: "jinso", views: 12000, like: 530, registeredAt: new Date(), comment: [{ username: "helloworld", text: "너무 이뻐요~", date: new Date() }, { username: "prtty_id", text: "좋아요~", date: new Date() }], },
    { profile: profile04, poster: poster04, username: "c_hee.bur", views: 140, like: 80, registeredAt: new Date(), comment: [{ username: "helloworld", text: "너무 이뻐요~", date: new Date() }, { username: "prtty_id", text: "좋아요~", date: new Date() }], },
    { profile: profile05, poster: poster05, username: "atto_oppa", views: 870, like: 120, registeredAt: new Date(), comment: [{ username: "helloworld", text: "너무 이뻐요~", date: new Date() }, { username: "prtty_id", text: "좋아요~", date: new Date() }], },
    { profile: profile06, poster: poster06, username: "h_young", views: 210, like: 90, registeredAt: new Date(), comment: [{ username: "helloworld", text: "너무 이뻐요~", date: new Date() }, { username: "prtty_id", text: "좋아요~", date: new Date() }], },
  ]
  const users = [
    { profile: profile01, username: "traveler", story: 3 },
    { profile: profile02, username: "suyeon_9.6", story: 1 },
    { profile: profile03, username: "jinso", story: 4 },
    { profile: profile04, username: "c_hee.bur", story: 1 },
    { profile: profile05, username: "atto_oppa", story: 0 },
    { profile: profile06, username: "h_young", story: 0 },
  ]

  return (
    <div className="ContentMain">
      <div className="ContentHeader">
        <div className="ContentHeaderMain">
          <div className="ContentHeaderWrap">
            <img className="ContenHeaderProfile" src={myProfile} width="50px" height="50px" />
          </div>
          <div className="ContentHeaderUsernameWrap">
            <span className="ContentHeaderUsername">seongho.zip</span>
          </div>
        </div>
        {users.map((item, index) => {
          return (
            <div className="ContentHeaderMain" key={index}>
              <div className={item.story > 0 ? "ContentHeaderWrap" : "UnContentHeaderWrap"} key={index}>
                <img className="ContenHeaderProfile" src={item.profile} width="50px" height="50px" />
              </div>
              <div className="ContentHeaderUsernameWrap">
                <span className="ContentHeaderUsername">{item.username}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="ContentContainer">
        {contents.map((item, index) => {
          return (
            <div className="ContentWrap" key={index}>
              <div className="ContentWrapHeader">
                <div className="ContentWrapHeaderProfile">
                  <div>
                    <img className="ContentWrapHeaderProfileImg" src={item.profile} width="40px" height="40px" />
                  </div>
                  <div className="ContentWrapHeaderProfileUsername">
                    <span>{item.username}</span>
                  </div>
                </div>
                <div className="ContenWrapHeaderInfo">info</div>
              </div>
              <div>
                <img src={item.poster} width="375px" height="350px" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Content