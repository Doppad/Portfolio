import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Github, Instagram, Vkontacte, YouTube } from '../components/AllSvgs'
import { DarkTheme } from '../components/Themes'
import { motion } from 'framer-motion'



const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};

@media (max-width: 50em) {
    background-color: black;
}
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'string', duration: 1, delay: 1.2 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com" }}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'string', duration: 1, delay: 1.4 }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://www.instagram.com/smn_ivan/" }}>
                    <Instagram width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div >
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{
                    type: 'string', duration: 1, delay: 1.6
                }}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://vk.com/doppad" }}>
                    <Vkontacte width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div >
            {/* <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'string', duration: 1, delay: 1.2}}
            >
                <NavLink to="/">
                    <YouTube width={25} height={25} fill='currentColor' />
                </NavLink>
            </motion.div> */}

            < Line color={props.theme}

                initial={
                    {
                        height: 0
                    }
                }
                animate={{
                    height: '8rem'
                }}
                transition={{
                    type: 'string', duration: 1, delay: 0.8
                }}
            />

        </Icons >
    )
}

export default SocialIcons