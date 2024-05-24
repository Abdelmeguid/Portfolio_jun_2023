import "./App.css";
import React from "react";
import { useEffect, useRef } from "react";
import { SocialIcon } from "react-social-icons";

// install as below
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/react-fontawesome@latest
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
////below icons related to osama elzero method to add icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
////////////////////////////////////////////////////////////////////////
import { useInView } from "react-intersection-observer";

import Cart from "./Cart";

// npm install lottie-web
import lottie from "lottie-web";

function App() {
  const container2 = useRef(null);
  const container3 = useRef(null);
  //start animation divs
  const animationRef1 = useRef(null);
  const animationRef2 = useRef(null);
  const animationRef3 = useRef(null);
  const animationRef4 = useRef(null);
  const animationRef5 = useRef(null);
  const animationRef6 = useRef(null);

  const containertech = useRef(null);
  const containertech2 = useRef(null);
  // const [isVisible1, setIsVisible1] = useState(true);
  const { ref: xxx, inView: isVisible1 } = useInView();

  // useEffect(() => {
  //   const ControlAnimationDiv = () => {
  //     const scrollPosition2 = window.scrollY;
  //     const triggerPoint1 = 1500; // Change this to the position you want to trigger the action
  //     const triggerPoint2 = 125;

  //     if (triggerPoint2 < scrollPosition2 && scrollPosition2 <= triggerPoint1) {
  //       setIsVisible1(true);
  //     } else {
  //       setIsVisible1(false);
  //     }
  //   };

  //   window.addEventListener("scroll", ControlAnimationDiv);

  //   return () => {
  //     window.removeEventListener("scroll", ControlAnimationDiv);
  //   };
  // }, []);
  //start animation divs

  useEffect(() => {
    lottie.loadAnimation({
      animationData: require("./office.json"),
      autoplay: true,
      //container: document.getElementById("preview"),
      container: container2.current,
      loop: true,
      renderer: "svg",
    });

    return () => {
      lottie.destroy();
    };
  }, []);
  ///next svg

  useEffect(() => {
    lottie.loadAnimation({
      animationData: require("./next.json"),
      autoplay: true,
      //container: document.getElementById("preview"),
      container: container3.current,
      loop: true,
      renderer: "svg",
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  //ball SVG

  useEffect(() => {
    lottie.loadAnimation({
      animationData: require("./tech.json"),
      autoplay: true,
      //container: document.getElementById("preview"),
      container: containertech.current,
      loop: true,
      renderer: "svg",
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  ///////////////////////////////////
  //ball SVG2

  useEffect(() => {
    lottie.loadAnimation({
      animationData: require("./tech.json"),
      autoplay: true,
      //container: document.getElementById("preview"),
      container: containertech2.current,
      loop: true,
      renderer: "svg",
    });

    return () => {
      lottie.destroy();
    };
  }, []);
  //   ////svg1
  //   useEffect(() => {
  //     lottie.loadAnimation({
  //       animationData: require("./office.json"),
  //       autoplay: true,
  //       //container: document.getElementById("preview"),
  //       container: svgneu.current,
  //       loop: true,
  //       renderer: "svg",
  //     });

  //     return () => {
  //       lottie.destroy();
  //     };
  //   }, []);
  //   ////svg2
  //   useEffect(() => {
  //     lottie.loadAnimation({
  //       animationData: require("./office.json"),
  //       autoplay: true,
  //       //container: document.getElementById("preview"),
  //       container: svgneu.current,
  //       loop: true,
  //       renderer: "svg",
  //     });

  //     return () => {
  //       lottie.destroy();
  //     };
  //   }, []);
  //   ////svg3
  //   useEffect(() => {
  //     lottie.loadAnimation({
  //       animationData: require("./office.json"),
  //       autoplay: true,
  //       //container: document.getElementById("preview"),
  //       container: svgneu.current,
  //       loop: true,
  //       renderer: "svg",
  //     });

  //     return () => {
  //       lottie.destroy();
  //     };
  //   }, []);
  //   ////svg4
  //   useEffect(() => {
  //     lottie.loadAnimation({
  //       animationData: require("./office.json"),
  //       autoplay: true,
  //       //container: document.getElementById("preview"),
  //       container: svgneu.current,
  //       loop: true,
  //       renderer: "svg",
  //     });

  //     return () => {
  //       lottie.destroy();
  //     };
  //   }, []);
  //   ////svg5
  //   useEffect(() => {
  //     lottie.loadAnimation({
  //       animationData: require("./office.json"),
  //       autoplay: true,
  //       //container: document.getElementById("preview"),
  //       container: svgneu.current,
  //       loop: true,
  //       renderer: "svg",
  //     });

  //     return () => {
  //       lottie.destroy();
  //     };
  //   }, []);
  //   ////svg6
  //   useEffect(() => {
  //     lottie.loadAnimation({
  //       animationData: require("./office.json"),
  //       autoplay: true,
  //       //container: document.getElementById("preview"),
  //       container: svgneu.current,
  //       loop: true,
  //       renderer: "svg",
  //     });

  //     return () => {
  //       lottie.destroy();
  //     };
  //   }, []);
  ////find scroll position
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const FindScroll = () => {
  //     const currentScrollPosition = window.scrollY;
  //     setScrollPosition(currentScrollPosition);
  //   };

  //   window.addEventListener("scroll", FindScroll);

  //   return () => {
  //     window.removeEventListener("scroll", FindScroll);
  //   };
  // }, []);

  return (
    <div id="root">
      <body className="App">
        <div className="scrollb">
          <span className="font-link">
            Ahmed Abbdelmeguid
            {/* <FontAwesomeIcon id="mig" icon={faCoffee} />
            <FontAwesomeIcon
              icon={faFacebook}
              beat
              size="2xl"
              style={{ color: "#d6d61f" }}
            /> */}
          </span>

          <div className="icons">
            <a
              href="https://www.hotmail.com"
              target="_ccssccecc"
              rel="cccsceccsccc"
            >
              <SocialIcon url="https://github.com/Abdelmeguid" />
            </a>
            <a
              href="https://www.hotmail.com"
              target="ccsccecc"
              rel="ccceccsccc"
            >
              <SocialIcon url="https://www.linkedin.com/in/ahmed-abdel-meguid-b688a91b3/" />
            </a>
            <a href="https://twitter.com/" target="_ccsccecc" rel="cccesccccc">
              <SocialIcon url="https://www.upwork.com/freelancers/~012bd91af747be023f?qpn-profile-completeness=certificate" />
            </a>
            {/* <a href="https://www.hotmail.com" target="_cccccc" rel="cccccccc">
              <SocialIcon url="https://twitter.com/jaketrent" />
            </a>
            <a href="https://www.hotmail.com" target="_cccccc" rel="cccccccc">
              <SocialIcon url="https://facebook.com/jaketrent" />
            </a> */}
          </div>
        </div>
        {/*
       to make scroll defination
        <div className="scrollPosition2">Scroll position: {scrollPosition}</div>
        */}
        <div className="container1">
          <div
            ref={container2}
            className="svg1 "
            id="animation-container"
          ></div>

          <div className="introduction ">
            <div class="circle">
              <Cart />
            </div>
            <p>
              "I am a MERN Full stack developer familiar with react MongoDB
              Nodejs Next.js GraphQL RestAPI Tailwind & Chakra UI but i Prefere
              pure CSS ..my Valuable skill is Searching this mean i can search
              and learn any new technology.."
            </p>
          </div>
        </div>
        {/*<div class="wave-container">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffd700"
              fill-opacity="1"
              d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,192C672,160,768,96,864,101.3C960,107,1056,181,1152,229.3C1248,277,1344,299,1392,309.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
      </svg>
        </div>*/}
        <svg
          className="svgn4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="chartreuse"
            fill-opacity="1"
            d="M0,192L30,170.7C60,149,120,107,180,80C240,53,300,43,360,64C420,85,480,139,540,186.7C600,235,660,277,720,293.3C780,309,840,299,900,277.3C960,256,1020,224,1080,192C1140,160,1200,128,1260,117.3C1320,107,1380,117,1410,122.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
        {/* <svg
          className="svgn4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="chartreuse"
            fill-opacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,202.7C672,203,768,149,864,149.3C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}
        {/* <svg
          className="svgn1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#7fff00"
            fill-opacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,234.7C672,267,768,277,864,272C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}
        {/*second svg */}
        {/* <svg
          className="svgn3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#DFFF00"
            fill-opacity="1"
            d="M0,64L60,53.3C120,43,240,21,360,42.7C480,64,600,128,720,149.3C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg> */}
        {/* <svg
          className="svgn3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#DFFF00"
            fill-opacity="1"
            d="M0,64L60,53.3C120,43,240,21,360,42.7C480,64,600,128,720,149.3C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg> */}
        {/* <svg
          className="svgn3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="chartreuse"
            fill-opacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,202.7C672,203,768,149,864,149.3C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}
        <svg
          className="svgn3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="chartreuse"
            fill-opacity="1"
            d="M0,192L30,170.7C60,149,120,107,180,80C240,53,300,43,360,64C420,85,480,139,540,186.7C600,235,660,277,720,293.3C780,309,840,299,900,277.3C960,256,1020,224,1080,192C1140,160,1200,128,1260,117.3C1320,107,1380,117,1410,122.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <div ref={xxx} className="container2">
          <div className="Myprojects">
            My Projects
            <p>
              click on any project and a new tab will oben to see
              it.
            </p>
          </div>
          {isVisible1 && (
            <div
              ref={animationRef1}
              className={`animation-div1 ${isVisible1 ? "visible" : ""}`}
            >
              <a
                href="https://mern-ecommerce-project-dy8y.onrender.com/products"
                target="_blank"
                rel="noopener noreferrer"
                className="link2"
             
              >
                MERN_Ecommerce Project
              </a>
            </div>
          )}
          {isVisible1 && (
            <div
              ref={animationRef2}
              className={`animation-div2 ${isVisible1 ? "visible" : ""}`}
            >
              <a
                href="https://design-reports-of-all-employees-rest-api-frcb.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link2"
              >
                Design of Products RestAPI APP
              </a>
            </div>
          )}
          {isVisible1 && (
            <div
              ref={animationRef3}
              className={`animation-div3 ${isVisible1 ? "visible" : ""}`}
            >
              <a
                href="https://meetup-next-app-nu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="link2"
              >
                Meetup Next.js App
              </a>
            </div>
          )}
          {isVisible1 && (
            <div
              ref={animationRef4}
              className={`animation-div4 ${isVisible1 ? "visible" : ""}`}
            >
              <a
                href="https://abdelmeguid.github.io/restaurant_react_app/"
                target="_blank"
                rel="noopener noreferrer"
                className="link2"
              >
                Restaurant React_App
              </a>
            </div>
          )}
          {isVisible1 && (
            <div
              ref={animationRef5}
              className={`animation-div5 ${isVisible1 ? "visible" : ""}`}
            >
              <a
                href="https://abdelmeguid.github.io/countryIndicate/"
                target="_blank"
                rel="noopener noreferrer"
                className="link2"
              >
                country_Indicate React_App
              </a>
            </div>
          )}
          {isVisible1 && (
            <div
              ref={animationRef6}
              className={`animation-div6 ${isVisible1 ? "visible" : ""}`}
            >
              <a
                href="https://abdelmeguid.github.io/landing-page-primary_project/"
                target="_blank"
                rel="noopener noreferrer"
                className="link2"
              >
                landing-page-primary_project
              </a>
            </div>
          )}
        </div>
        <svg
          className="svgn4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="chartreuse"
            fill-opacity="1"
            d="M0,192L30,170.7C60,149,120,107,180,80C240,53,300,43,360,64C420,85,480,139,540,186.7C600,235,660,277,720,293.3C780,309,840,299,900,277.3C960,256,1020,224,1080,192C1140,160,1200,128,1260,117.3C1320,107,1380,117,1410,122.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
        {/* <svg
          className="svgn4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="chartreuse"
            fill-opacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,202.7C672,203,768,149,864,149.3C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}
        {/* <svg
          className="svgn1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#7fff00"
            fill-opacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,234.7C672,267,768,277,864,272C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}
        {/* <svg
          className="svgn4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#DFFF00"
            fill-opacity="1"
            d="M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,106.7C672,75,768,85,864,90.7C960,96,1056,96,1152,96C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}
        {/* <svg
          className="svgn3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#DFFF00"
            fill-opacity="1"
            d="M0,64L60,53.3C120,43,240,21,360,42.7C480,64,600,128,720,149.3C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg> */}
        {/* <svg
          className="svgn3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="chartreuse"
            fill-opacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,202.7C672,203,768,149,864,149.3C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}
        <svg
          className="svgn3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="chartreuse"
            fill-opacity="1"
            d="M0,192L30,170.7C60,149,120,107,180,80C240,53,300,43,360,64C420,85,480,139,540,186.7C600,235,660,277,720,293.3C780,309,840,299,900,277.3C960,256,1020,224,1080,192C1140,160,1200,128,1260,117.3C1320,107,1380,117,1410,122.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <div className="container3">
          <div className="MySkills">My skills</div>
          {/* Below related ball svg note the ref value */}
          <div ref={containertech} className="containertech1 "></div>
          <div ref={containertech2} className="containertech2 "></div>
          <div className="iconsn2 ">
            <div className="group1">
              <div id="i1">
                <iframe
                  title="1"
                  src="https://embed.lottiefiles.com/animation/63210"
                ></iframe>
              </div>
              <div id="i2">
                <iframe
                  title="2"
                  src="https://embed.lottiefiles.com/animation/296"
                ></iframe>
                <div id="u2"></div>
              </div>

              <div id="i3">
                <iframe
                  title="3"
                  src="https://embed.lottiefiles.com/animation/51775"
                ></iframe>
                <div id="u3"></div>
              </div>
            </div>
            <div className="group2">
              <div id="i4">
                <iframe
                  title="4"
                  src="https://embed.lottiefiles.com/animation/107688"
                ></iframe>
              </div>
              <div id="i5">
                <iframe
                  title="5"
                  src="https://embed.lottiefiles.com/animation/111575"
                ></iframe>
                <div id="u5"></div>
              </div>

              {/*  <iframe
              className="next"
              title="6"
              src="https://embed.lottiefiles.com/animation/119623"
            ></iframe>
        */}

              <div id="svg2" ref={container3}></div>
              <div id="backOfsvg2"></div>
            </div>
          </div>
        </div>
        <svg
          className="svgn4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="chartreuse"
            fill-opacity="1"
            d="M0,192L30,170.7C60,149,120,107,180,80C240,53,300,43,360,64C420,85,480,139,540,186.7C600,235,660,277,720,293.3C780,309,840,299,900,277.3C960,256,1020,224,1080,192C1140,160,1200,128,1260,117.3C1320,107,1380,117,1410,122.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>

        {/* <svg
          className="svgn4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="chartreuse"
            fill-opacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,202.7C672,203,768,149,864,149.3C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}
        {/* <svg
          className="svgn4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#DFFF00"
            fill-opacity="1"
            d="M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,106.7C672,75,768,85,864,90.7C960,96,1056,96,1152,96C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}
      </body>
    </div>
  );
}

export default App;
