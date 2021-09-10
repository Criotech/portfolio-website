import { useState } from "react";
import { Link } from 'react-router-dom';
import myPicture from "./images/ope.jpg"
import svg from "./images/rocket.svg"
import { motion } from 'framer-motion';
import Navcont from "./Navcont"


const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: 5
    }
  }
}

const rocketVariants = {
  hover: {
    y: 20,
    transition: {
      duration: 1.2,
      yoyo: Infinity
    }
  }
}

function Home() {
  const [visible, showNav] = useState(true)
  return (
    <motion.main variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">

      <section className="glass d-flex flex-column">
        <nav onClick={() => showNav(!visible)} className="my-nav">
          <div className={visible ? "menu-btn" : "menu-btn open"}>
            {visible ? <i className="fa fa-bars" style={{ color: "#ffff" }} aria-hidden="true"></i> :
              <i className="fa fa-close" style={{ color: "#ffff" }} aria-hidden="true"></i>
            }
          </div>
        </nav>

        {
          visible ? (
            <div className="row main-row main-content">
              <div className="col-md-6 col-sm-12 main-col">
                <p className="small-p">Hello, I'm</p>
                <h1 className="main-h1 mt-1 mb-2">Siyanbola Opeoluwa</h1>
                <p className="main-p">Software Developer</p>
                <div style={{ marginTop: 10 }} className="d-flex toColum">

                  <Link to="/about">
                    <motion.button variants={buttonVariants}
                      whileHover="hover" className="main-btn mr-3 zz">
                      More About Me
                    </motion.button>
                  </Link>

                  <Link to="/portfolio">
                    <motion.button variants={buttonVariants}
                      whileHover="hover" className="main-btn">
                      Portfolio
                    </motion.button>
                  </Link>

                </div>
              </div>

              <div className="col-md-6 col-sm-12  main-col right-col">

                <div className="picture-circle">

                  <img src={myPicture} height="100%" width="100%" style={{ borderRadius: "50%" }} alt="mypic" />

                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column justify-content-center main-content">
              <Navcont />
            </div>
          )
        }

      </section>



      <div className="circle-color1" />
      <div className="circle-color2" />
      <motion.img src={svg} variants={rocketVariants}
        animate="hover" className="rocket2" alt="mypic" />
      <motion.img src={svg} variants={rocketVariants}
        animate="hover" className="rocket" alt="mypic" />

      <div className="circle1" />
      <div className="circle2" />
    </motion.main>
  )
}

export default Home;
