import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import { TEST } from "./actions/testAction";
import "./App.scss";
//import AOS from 'aos';
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
const AOS = require("aos");
AOS.init();

const { connect } = require("react-redux");

//declaring an interface for state is necessary due to default readonly state { }
interface State {
  name: string;
}
interface Props {
  data: string;
  dispatch: any;
  staticContext: any;
  __proto__: object;
}

class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "test"
    };
  }

  componentDidMount() {
  

  }

  render() {
    return (
      <div className="App">
        <div id="landing">
          <h1 id="title">The Dragon Prince</h1>
          <video
            className="videosize"
            style={{}}
            ref="dragonVid"
            autoPlay
            loop
            id="dragonVideo"
            muted
            plays-inline="true"
            preload="true"
          >
            {window.innerWidth > 1280 ? (
              <source src="dragonIntro_Trim.mp4" type="video/mp4" />
            ) : (window.innerWidth <= 1280 && window.innerWidth > 480) ?  <source src="dragonPB1_Trim.mp4" type="video/mp4" /> : <source src="dragonPB13G_Trim.mp4" type="video/mp4" />
          }
          </video>
        </div>
        <div
          id="content1"
          onMouseEnter={(e: React.MouseEvent) => {
            /* let landing : any = document.getElementById('landing');
    let dragonGif1 : any = document.getElementById('dragonGif1');
    let xadiaText : any = document.getElementById('xadiaText');
    

      
      console.log("yes2")
      dragonGif1.style.animation = "dragonGif1Animation 0.8s ease-out 1";
      dragonGif1.style.animationFillMode = "forwards";
      xadiaText.style.animation = "xadiaTextAnimation 1s ease-out 1s 1"
      xadiaText.style.animationFillMode = "forwards"*/
          }}
        >
          <div id="content1text">
            <p className="xadiaText xadiaTextBis" data-aos="zoom-in">
              The series is set in a fantasy world where humans and elves are in
              conflict. Long ago, the humans used dark magic, and were driven
              off by the dragons and elves to one end of the continent. Now,
              after humans killed the dragon king and his egg, war is imminent.
            </p>
          </div>
          <picture>
            <img
              data-aos="fade-left"
              alt="dragon prince gif"
              id="dragonGif1"
              src="Dragon3.jpg"
              className="dragonGif"
            />
          </picture>
        </div>
        <div id="content2">
          <picture>
            <img
              data-aos="fade-right"
              id="dragonGif2"
              src="Xadia.jpg"
              className="dragonGif2"
            />
          </picture>

          <div id="content2text">
            <p className="xadiaText xadiaTextBis" data-aos="zoom-in">
              Xadia is a land rich in magic. There, everything bears a
              connection to one of the six Primal Sources: every creature,
              plant, tree, even the earth itself. The most intelligent of the
              magical creatures, the elves and the dragons, rule over the
              harmonious races of Xadia.
            </p>
          </div>
        </div>
        <div
          ref={(el: any) => {
            console.log(el.getBoundingClientRect());
          }}
          id="content3"
        >
          <div id="content3text">
            <p data-aos="fade-down" style={{width: "80%", textAlign: "center", position: "relative", top: "-13vh"}} className="xadiaText">
              Rejoin Callum, Ezran and Rayla in crazy unexpected adventures!
            </p>
          </div>
          <picture style={{height: "100%", width: "100%"}}>
            <img
              
              src="dragon2.jpeg"
              id="dragonGif3"
            />
          </picture>
        </div>

        <div id="content4">
         <p data-aos="fade-right" className="xadiaText" id="xadiaText41" >From Katolis...</p>
         <p data-aos="fade-left" className="xadiaText"  id="xadiaText42">....to the Border</p>
       
        <picture>
       
         <img
              data-aos="fade-down"
              src="Katolis.png"
             
            />
        </picture>
        <picture>

         <img
              data-aos="fade-up"
              src="TheBorder.png"
              
            />
        </picture>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    data: state.testReducer.data
  };
};

const Connected = connect(mapStateToProps)(App);

export default Connected;