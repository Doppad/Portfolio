import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'
import { Design, Develope, YinYang } from './AllSvgs'
import { motion } from 'framer-motion'

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import HomeButton from '../subComponents/HomeButton';

import { Work } from "../data/WorkData"
import BigTitle from '../subComponents/BigTitle'
import Card from '../subComponents/Card'


const Box = styled.div`
background-color: ${props => props.theme.body};

height: 400vh;
position: relative;
display: flex;
align-items: center;

`


const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;

color: #fff;
`
const Rotate =styled.span`
display: block;
position: fixed;
right: 1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index: 1;
`

// Farmer-motion Configuration
const contaioner = {

    hidden: {opacity:0},
    show: {
        opacity: 1,

        transition: {
            staggerChildren:0.5,
            duration:0.5,
        }
    }

}


const WorkPage = () => {

    const ref = useRef(null);
    const yinyang = useRef(null);


    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`

            return (yinyang.current.style.transform = 'rotate(' + -window.pageYOffset + 'deg)')
        }

        window.addEventListener('scroll', rotate)

        return () => window.removeEventListener('scroll', rotate)

    }, [])


    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <HomeButton />

                <Main ref={ref} variants={contaioner} initial='hidden' animate='show'>
                    {
                        Work.map(d =>
                            <Card key={d.id} data={d} />
                        )
                    }
                </Main>
                <Rotate ref={yinyang}>
                    <YinYang widht={80} height={80} fill={DarkTheme.text} />
                </Rotate>
                <BigTitle text="Сайты" top="10%" right="10%" />
            </Box>

        </ThemeProvider>

    )
}

export default WorkPage