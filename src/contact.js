import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navcont from "./Navcont";

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

function Contact() {
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
                <h2 className="main-h2 mb-3 text-center">Contact Me</h2>


                {
                    visible ? (
                        <div className="row main-row mt-5">

                            <div className="col-md-6 col-sm-12">
                                <form>
                                    <input type="text" placeholder="name" />
                                    <input type="text" placeholder="Email" />
                                    <input type="text" placeholder="Subject" />
                                    <textarea placeholder="message">

                                    </textarea>
                                    <motion.button variants={buttonVariants}
                                        whileHover="hover" className="main-btn">
                                        Send Message
                                    </motion.button>
                                </form>
                            </div>

                            <div className="col-md-6 col-sm-12 px-md-5">
                                <div className="custom-m">
                                    <h4 className=" main-h5">Email</h4>
                                    <p className="contact-p">opesiyanbola8991@gmail.com</p>
                                </div>

                                <div className="custom-m">
                                    <h4 className=" main-h5">Phone</h4>
                                    <p className="contact-p">+234 8167526178</p>
                                </div>

                                <div className="custom-m">
                                    <h4 className=" main-h5">Socials</h4>
                                    <div className="mt-3 d-flex flex-wrap">
                                        <Link to={{ pathname: "https://www.linkedin.com/in/opeoluwa-siyanbola-a8a888166" }} target="_blank" style={{ textDecoration: "none" }}>
                                            <motion.div variants={buttonVariants}
                                                whileHover="hover" style={{ width: 50, height: 50, marginRight: 10 }} className="menu-btn mb-3 ">
                                                <i class="fa fa-linkedin" style={{ color: "#fff", fontSize: 17 }} aria-hidden="true"></i>
                                            </motion.div>
                                        </Link>
                                        <Link to={{ pathname: "https://www.github.com/criotech" }} target="_blank" style={{ textDecoration: "none" }}>
                                            <motion.div variants={buttonVariants}
                                                whileHover="hover" style={{ width: 50, height: 50, marginRight: 10 }} className="menu-btn mb-3 ">
                                                <i class="fa fa-github" style={{ color: "#fff", fontSize: 17 }} aria-hidden="true"></i>
                                            </motion.div>
                                        </Link>
                                        <Link to={{ pathname: "https://www.youtube.com/channel/UCFsEdF6-ScTeQxb7RoiIlWw" }} target="_blank" style={{ textDecoration: "none" }}>
                                            <motion.div variants={buttonVariants}
                                                whileHover="hover" style={{ width: 50, height: 50, marginRight: 10 }} className="menu-btn mb-3 ">
                                                <i class="fa fa-youtube" style={{ color: "#fff", fontSize: 17 }} aria-hidden="true"></i>
                                            </motion.div>
                                        </Link>
                                        <Link to={{ pathname: "https://www.twitter.com/oluwacode_" }} target="_blank" style={{ textDecoration: "none" }}>
                                            <motion.div variants={buttonVariants}
                                                whileHover="hover" style={{ width: 50, height: 50, marginRight: 10 }} className="menu-btn mb-3 ">
                                                <i class="fa fa-twitter" style={{ color: "#fff", fontSize: 17 }} aria-hidden="true"></i>
                                            </motion.div>
                                        </Link>
                                        <Link to={{ pathname: "https://hashnode.com/@oluwacode" }} target="_blank" style={{ textDecoration: "none" }}>
                                            <motion.div variants={buttonVariants}
                                                whileHover="hover" style={{ width: 50, height: 50, marginRight: 10 }} className="menu-btn mb-3 ">
                                                <i class="fa fa-pencil-square-o" style={{ color: "#fff", fontSize: 17 }} aria-hidden="true"></i>
                                            </motion.div>
                                        </Link>


                                    </div>
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

        </motion.main>
    )
}

export default Contact;
