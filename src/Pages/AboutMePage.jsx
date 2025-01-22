import "./AboutMePage.css"
import Button from "../Components/Button";
import TextButton from "../Components/TextButton";

export default function AboutMePage() {
    return (
        <div id='abm-body'>
            <img id='abm-sign' src='/assets/podpis.png' alt='podpis'/>
            <div id='abm-main'>
                <div id='abm-left-part'>
                    <div id="abm-left-top-cnt" data-aos='fade-right'>
                        <TextButton content='About Me' href='#abm-main'/>
                        <TextButton content='Projects' href='#pjs'/>
                        <TextButton content='Skills' href='#skl'/>
                        <TextButton content='Contacts' href='#cts-body' />
                    </div>
                    <div id="abm-left-bottom-cnt" data-aos='fade-right'>
                        <div id='abm-main-text-cnt' data-aos='fade-right'>
                            <h1>Hello!</h1>
                            <p>Are you looking for back-end programmer? </p>
                        </div>
                        <Button id='abm-skills-btn' href='#skl-body'>
                                <p style={{fontSize: "1.7rem"}}>SKILLS</p>
                        </Button>
                    </div>
                </div>
                <div id='abm-right-part' >
                    <img id='abm-me-img' src="/assets/ja.png" alt="ja"/>
                </div>
            </div>
        </div>
    )
}