import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { lightTheme, mediaQueries } from "./Themes";

import { Design, Develope } from "./AllSvgs";
import Loading from "../subComponents/Loading";

//Components
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const HomeButton = lazy(() => import("../subComponents/HomeButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticleComponent = lazy(() =>
    import("../subComponents/particleComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
            flex-direction:column;  
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
           
  `};
  ${mediaQueries(30)`
           
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
           
  `};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};

  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);

              

  `};

  ${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);

              

  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Suspense fallback={<Loading />}>
                <Box
                    key="skills"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <LogoComponent theme="light" />
                    <HomeButton />
                    <SocialIcons theme="light" />
                    <ParticleComponent theme="light" />

                    <Main>
                        <Title>
                            <Design width={40} height={40} /> Дизайнер
                        </Title>
                        <Description>
                            Я люблю создавать дизайн, который олицитворяет чистоту, минимализм и простоту.
                        </Description>
                        <Description>
                            <strong>Мне нравится создавать новый дизайн</strong> <br />
                            <ul>
                                <li>
                                    Веб-дизайн
                                </li>
                                <li>
                                    Мобильные приложения
                                </li>
                            </ul>
                        </Description>
                        <Description >
                            <strong>Инструменты</strong> <br />
                            <ul>
                                <li>
                                    Figma
                                </li>
                            </ul>
                        </Description>
                    </Main>
                    <Main>
                        <Title>
                            <Develope width={40} height={40} /> Разработчик
                        </Title>
                        <Description >
                        Я ценю бизнес или бренд, для которого создаю, поэтому мне нравится воплощать в жизнь новые идеи.
                    </Description>
                        <Description>
                            <strong>Мои навыки</strong> <br />
                            <p>
                            Html, Css, Js, React, Redux, Sass, Bootstrap и т.д.
                            </p>
                        </Description>
                        <Description>
                            <strong>Инструменты</strong> <br />
                            <p>VScode, Github, Codepen и т.д.</p>
                        </Description>
                    </Main>
                    <BigTitle text="Навыки" top="80%" right="15%" />
                </Box>
            </Suspense>
        </ThemeProvider>
    );
};

export default MySkillsPage;
