import { Route } from "react-router-dom"
import { Switch, useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { ThemeProvider } from "styled-components"
import { DarkTheme, lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyle"


//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillPage from './components/MySkillPage';
import { AnimatePresence } from "framer-motion"
import SoundBar from "./subComponents/SoundBar"

function App() {

  const location = useLocation();

  return <>

    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

      <SoundBar />

{/* //For farmer-motion on page change!*/}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillPage} />
        </Switch>
      </AnimatePresence>


    </ThemeProvider>


  </>

}

export default App

