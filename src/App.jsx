import "./App.css"
import AboutMePage from "./Pages/AboutMePage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactsPage from "./Pages/ContactsPage";
import Footer from "./Pages/Footer"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import TextBlock from "./Components/TextCard";

AOS.init({
    duration: 1000,
    offset: 200
});

export default function App() {

    return (
        <main>
            <BrowserRouter location='/' navigator='/'>
                <Routes>
                    <Route path='/' element={
                        <div id='home-cnt'>
                            <AboutMePage/>
                            <hr className='separating-line' data-aos='fade-up' />
                            <ProjectsPage/>
                            <hr className='separating-line' data-aos='fade-up' />
                            <SkillsPage/>
                            <hr className="separating-line" data-aos='fade-down' />
                            <ContactsPage/>
                            <hr className="separating-line" />
                            <Footer />
                        </div>
                    }
                    />
                    <Route path='/debil' element={<TextBlock/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}