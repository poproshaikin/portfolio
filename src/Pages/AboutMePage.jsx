import "./AboutMe.css"
import Button from "../Components/Button";
import TextButton from "../Components/TextButton";

export default function AboutMePage() {
    return (
        <div id='abm-body'>
            <img id='abm-sign' src='/assets/podpis.png' alt='podpis'/>
            <div id='abm-main'>
                <div id='abm-left-part'>
                    <div id="abm-left-top-cnt">
                        <TextButton content='About Me' href='#abm-main'/>
                        <TextButton content='Skills' href='#skl-body'/>
                        <TextButton content='Contacts' />
                    </div>
                    <div id="abm-left-bottom-cnt">
                        <div id='abm-main-text-cnt'>
                            <h1>Hello!</h1>
                            <p>Are you looking for back-end programmer? </p>
                        </div>

                        <div id='abm-skills-btn' >
                            <Button height='8vh' width='15vw' href='#skl-body'>
                                <p style={{fontSize: "1.7rem"}}>SKILLS</p>
                            </Button>
                        </div>
                    </div>
                </div>
                <div id='abm-right-part'>
                    <img id='abm-me-img' src="/assets/ja.png" alt="ja"/>
                </div>
            </div>
        </div>
    )
}