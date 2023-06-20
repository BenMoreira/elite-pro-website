import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

const Navoption = ({path, link}) => {
    const location = useLocation();
    let navigate = useNavigate();

    function handleClick() {
        navigate(link);
    }

    return (
        <motion.div
            whileHover={{
                y: location.pathname === link ? '' : -5
            }}
            animate={{
                y: location.pathname === link ? -5 : 0
            }}
        >
            <button onClick={() => handleClick()} className={`text-2xl ${location.pathname === link ? "text-red-100" : "text-black-100"}`}>
                {path}
            </button>
        </motion.div>
    )
}

export default Navoption