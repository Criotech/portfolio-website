import { useState } from "react";
import voriancoralli from "./images/voriancoralli.png"
import valor from "./images/valor.png"
import rchme from "./images/rchme.png";
import { motion } from "framer-motion";
import Navcont from "./Navcont"
import Projectinfo from './Projectinfo'

function Works() {
    const [visible, showNav] = useState(true)
    const [portfolio, showPortfolio] = useState(false)
    const [work, viewWork] = useState({})

    const containerVariants = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring' }
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

    const openProject = (data)=>{
        viewWork(data)
        showPortfolio(true)
    }

    const data = [
        {
            name: "Vorian Corelli",
            description: "An Agro commodity trading Application",
            role: "Backend Developer",
            link: "https://app.voriancorelli.com",
            tech_used: "Node Js, Express Js, MongoDB, Agenda Schdular, Next Js",
            img: voriancoralli
        },
        {
            name: "Rch Me",
            description: "R'ch Me™ is a digital business card that helps you share your information instantly - without carrying a stack of cards around make use of a Near Field Communication Technology(NFC). Also entials and ecoommerce, and an affiliate marketing system",
            role: "Backend Developer",
            link: "https://rchme.com",
            tech_used: "Node Js, Express Js, MongoDB, Agenda Schdular, React Js",
            img: rchme
        },
        {
            name: "Valor Exchange",
            description: "A P to p crypto trading application ",
            role: "Backend Developer",
            link: "https://valorex-staging.vercel.app",
            tech_used: "Node Js, Express Js, MongoDB, Agenda Schdular, Next Js, Web Socket",
            img: valor
        }
    ]

    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {
                !portfolio ?
                    <section className="glass d-flex flex-column m-5">
                        <nav onClick={() => showNav(!visible)} className="my-nav">
                            <div className={visible ? "menu-btn" : "menu-btn open"}>
                                {visible ? <i className="fa fa-bars" style={{ color: "#ffff" }} aria-hidden="true"></i> :
                                    <i className="fa fa-close" style={{ color: "#ffff" }} aria-hidden="true"></i>
                                }
                            </div>
                        </nav>
                        {
                            visible ?
                                (
                                    <section>
                                        <div className="my-5">
                                            <h2 className="main-h2 mb-3 text-center">Recent Work</h2>
                                        </div>

                                        <div className="row">
                                            {
                                                data.map((x, i) => {
                                                    return (
                                                        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex flex-column align-items-center justify-content-center">
                                                            <div>
                                                                <div className="frame">
                                                                    <img src={x.img} height="100%" width="100%" style={{ borderRadius: 10 }} alt="mypic" />

                                                                </div>
                                                                <h5 className="my-4 main-h5">{x.name}</h5>
                                                                <motion.button onClick={()=>openProject(x)} variants={buttonVariants}
                                                                    whileHover="hover" style={{ marginRight: 20, fontSize: 15 }} className="main-btn mr-3">
                                                                    View Project
                                                                </motion.button>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }





                                        </div>
                                    </section>) :
                                (

                                    <div className="d-flex flex-column justify-content-center main-content">
                                        <Navcont />
                                    </div>
                                )}
                    </section>
                    : <Projectinfo data={work} showPortfolio={showPortfolio} />
            }
        </motion.main>
    );
}

export default Works;
