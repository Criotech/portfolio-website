import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const nextVariants = {
    hidden: { 
      x: '-100vw' 
    },
    visible: {
      x: 0,
      transition: { type: 'spring', stiffness: 120 }
    } 
  }

  const nextVariants1 = {
    hidden: { 
      x: '-80vw' 
    },
    visible: {
      x: 0,
      transition: { type: 'spring', delay: .1, stiffness: 120 }
    } 
  }

  const nextVariants2 = {
    hidden: { 
      x: '-80vw' 
    },
    visible: {
      x: 0,
      transition: { type: 'spring', delay: .2, stiffness: 120 }
    } 
  }

  const nextVariants3 = {
    hidden: { 
      x: '-80vw' 
    },
    visible: {
      x: 0,
      transition: { type: 'spring', delay: .3, stiffness: 120 }
    } 
  }

function Navcont() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <Link to="/" style={{ textDecoration: "none" }}>
                <motion.h2 variants={nextVariants} whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                    transition={{ type: 'spring', stiffness: 300 }} style={{ fontWeight: "bold", cursor: "pointer" }} className="mb-5 main-h2">Home</motion.h2>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
                <motion.h2 variants={nextVariants1} whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                    transition={{ type: 'spring', stiffness: 300 }} style={{ fontWeight: "bold", cursor: "pointer" }} className="mb-5 main-h2">About</motion.h2>
            </Link>

            <Link to="/portfolio" style={{ textDecoration: "none" }}>
                <motion.h2 variants={nextVariants2} whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                    transition={{ type: 'spring', stiffness: 300 }} style={{ fontWeight: "bold", cursor: "pointer" }} className="mb-5 main-h2">Portfolio</motion.h2>
            </Link>

            <Link to="/contact" style={{ textDecoration: "none" }}>
            <motion.h2 variants={nextVariants3} whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                transition={{ type: 'spring', stiffness: 300 }} style={{ fontWeight: "bold", cursor: "pointer" }} className="mb-5 main-h2">Contact</motion.h2>
            </Link>
        </div>
    );
}

export default Navcont;
