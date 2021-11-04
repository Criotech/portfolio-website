import { useState } from "react";
import myPicture from "./images/opee.jpeg"
import CV from "./images/mycv.pdf"
import { motion } from "framer-motion";
import Navcont from "./Navcont";
import { Link } from 'react-router-dom';

function About() {
    const [visible, showNav] = useState(true)
    const [tab, toggleTab] = useState(false)

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



    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <section className="glass d-flex flex-column m-3">
                <nav onClick={() => showNav(!visible)} className="my-nav">
                    <div className={visible ? "menu-btn" : "menu-btn open"}>
                        {visible ? <i className="fa fa-bars" style={{ color: "#ffff" }} aria-hidden="true"></i> :
                            <i className="fa fa-close" style={{ color: "#ffff" }} aria-hidden="true"></i>
                        }
                    </div>
                </nav>
                {
                    visible ? (
                        <section className="mt-4">
                            <div className="row">
                                <div className="col-md-5 col-sm-12">
                                    <h2 className="main-h2 mb-3 ab-l">About Me</h2>

                                    <div className="about-pic">
                                        <img src={myPicture} height="100%" width="100%" alt="mypic" />

                                    </div>
                                </div>

                                <div className="col-md-7 col-sm-12">
                                    <h2 className="main-h2 mb-3 ab-r">About Me</h2>

                                    <p className="about-p">
                                        I am Responsible, detailed-oriented, result-driven, and committed engineer with a get-it-done, on-time and high-quality product spirit and a demonstrated history of working in the software development industry for 4 years, designing, implementing, defining requirements, testing and delivering mobile and web applications using a variety of programming tools.
                                        I am a ambious problem-solving software developer who is continually boosting a powerful set of technology skills.
                                        Enjoys working with personnel in all areas of the company to help boost profits, improve opportunies and share experience.
                                    </p>

                                    <h5 className="my-4 main-h5">Skills</h5>

                                    <div className="d-flex flex-wrap">
                                        <div className="tag">Html</div>
                                        <div className="tag">Css</div>
                                        <div className="tag">Javascript</div>
                                        <div className="tag">Typescript</div>
                                        <div className="tag">Node Js</div>
                                        <div className="tag">Express Js</div>
                                        <div className="tag">Mongo Db</div>
                                        <div className="tag">Git</div>
                                        <div className="tag">Postgress DB</div>
                                        <div className="tag">Socket.io</div>
                                        <div className="tag">React Js</div>
                                        <div className="tag">React Native</div>
                                    </div>

                                    <div className="d-flex my-4">
                                        <p onClick={() => toggleTab(false)} style={{ marginRight: 10, cursor: "pointer" }} className={tab ? "main-p about-tab" : "main-p about-tab active"}>Education</p>
                                        <p onClick={() => toggleTab(true)} style={{ cursor: "pointer" }} className={tab ? "main-p about-tab active" : "main-p about-tab"}>Experience</p>
                                    </div>
                                    {
                                        !tab ? (
                                            <ul class="timeline">
                                                <li>
                                                    <p>Nov, 2016 - Dec, 2019</p>
                                                    <p style={{ color: "#22c0e8" }}> <span style={{ fontWeight: "700" }}>Bachelors Of Science</span> - Lagos State University</p>
                                                    <p>Bachelor of Science in the department of Science and Technology Education (Physics). Graduated with a CGPA of 4.11</p>
                                                </li>
                                                <li>
                                                    <p>Nov, 2008 - July, 2014</p>
                                                    <p style={{ color: "#22c0e8" }}> <span style={{ fontWeight: "700" }}>Senior School Certificate Examination</span> - Lagos African Church Grammer School</p>
                                                    <p>Senior School Certificate Examination (SSCE) from Lagos African Church Grammer School</p>
                                                </li>
                                                <li>
                                                    <p>July, 2008</p>
                                                    <p style={{ color: "#22c0e8" }}> <span style={{ fontWeight: "700" }}>Primary Education</span>- Barachel Group of Schools, Lagos</p>
                                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p> */}
                                                </li>

                                            </ul>
                                        ) :
                                            (
                                                <ul class="timeline">
                                                    <li>
                                                        <p>Nov, 2020 - present</p>
                                                        <p style={{ color: "#22c0e8" }}> <span style={{ fontWeight: "700" }}>Startupia LLC</span> - Software Developer</p>
                                                        <p>.Built the backend of an agro matching application for retailers and suppliers to meet and trade
                                                            • Built a P2P cryptocurrency trading platform with a unique feature that allows bidding.
                                                           <br/> • Integrated payment channels across various platforms with a unified dashboard to manage transactions
                                                           <br/>• Developed a fundraising & aspirations platform that supports blockchain and crypto currency funding
                                                           <br/> • Integrated Mono Technologies software into the fundraising platform to achieve user KYC and banking
                                                            information verification
                                                            <br/> • Developed a re-usable multi wallet system that supports cryptocurrency and fiat currency.
                                                            <br/>• Developed a credit rating, classification and matching system that organises and assigns a credit rating
                                                            and classification to users of a given platform, this classification can be used to enforce limitations and
                                                            user trust worthiness for FinTech applications.
                                                            <br/> • Developed a custom eCommerce marketplace platform on React and Node.js.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>Nov, 2008 - July, 2014</p>
                                                        <p style={{ color: "#22c0e8" }}> <span style={{ fontWeight: "700" }}>IT Administrator</span> - SafetyPlus Enginnering Service </p>
                                                        <p>Administered, supported and monitored computer system by proactively resolving system issues and maintaining media handle for the organization.</p>
                                                    </li>
                                                    <li>
                                                        <p>July, 2008</p>
                                                        <p style={{ color: "#22c0e8" }}> <span style={{ fontWeight: "700" }}>Backend Developer Intern</span>- Triaton Limited</p>
                                                        <p>1. Built maintained, optimized and improved various rest apis. <br />
                                                            2. Mentored by senior front-end developers.</p>
                                                    </li>

                                                </ul>
                                            )
                                    }

                                    <div className="d-flex-md my-5">
                                        <Link to={CV} target="_blank" style={{ textDecoration: "none" }}>
                                            <motion.button variants={buttonVariants}
                                                whileHover="hover" style={{ marginRight: 20 }} className="main-btn mr-3">
                                                Download CV
                                            </motion.button>
                                        </Link>
                                        <Link to="/contact" style={{ textDecoration: "none" }}>
                                            <motion.button variants={buttonVariants}
                                                whileHover="hover" className="main-btn">
                                                Contact Me
                                            </motion.button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </section>) : (

                        <div className="d-flex flex-column justify-content-center main-content">
                            <Navcont />
                        </div>
                    )}
            </section>

        </motion.main>
    )
}

export default About;
