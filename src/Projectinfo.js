import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Projectinfo({ showPortfolio, data }) {
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.1, duration: 1.5 }
        },
        exit: {
            x: "-100vh",
            transition: { ease: 'easeInOut' }
        }
    };

    return (
        <motion.main variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <section className="glass d-flex flex-column vwp my-4 py-5">

                <div onClick={() => showPortfolio(false)} style={{ position: "absolute", right: 10, top: 8, width: 30, height: 30, color: "#fff", fontWeight: "bold", cursor: "pointer", borderColor: "rgba(255, 255, 255, 0.05)", borderWidth: 2 }} className="menu-btn">
                    <i className="fa fa-close" style={{ color: "#ffff" }} aria-hidden="true"></i>
                </div>
                <div>
                    <div className="lg-frame">
                        <img src={data.img} height="100%" width="100%" style={{ borderRadius: 10 }} alt="mypic" />
                    </div>

                    <h5 style={{ fontWeight: "bold" }} className="my-4 main-h5">{data.name}</h5>

                    <p style={{ letterSpacing: 0, opacity: .8 }} className="about-p">
                        {data.description}
                    </p>

                    <p style={{ color: "#fff" }}> <span style={{ fontWeight: "700" }}>Technology Used</span> - {data.tech_used}</p>
                    <p style={{ color: "#fff" }}> <span style={{ fontWeight: "700" }}>Role</span> - {data.role} </p>
                                        
                        <p style={{ color: "#fff" }}> <span style={{ fontWeight: "700" }}>View Live</span> - <Link to={{ pathname:data.link }} target="_blank" style={{ color: "#fff", textDecoration: "none" }}>{data.link}</Link> </p>

                </div>


            </section>
        </motion.main>
    );
}

export default Projectinfo;
