import "./App.css"
import AboutMePage from "./Pages/AboutMePage";
import SkillsPage from "./Pages/SkillsPage";
import ContactsPage from "./Pages/ContactsPage";
import {Route, Router, Routes} from "react-router-dom";

export default function App() {
    return (
        <main>
            <Router location='/' navigator='/'>
                <Routes>
                    <Route path='/' element={
                        <div>
                            <AboutMePage/>
                            <SkillsPage/>
                            <ContactsPage/>
                        </div>}
                    />
                </Routes>
            </Router>
        </main>
    )
}