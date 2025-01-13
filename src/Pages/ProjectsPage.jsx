import "./ProjectsPage.css"
import TextBlock from "../Components/TextBlock"
import Button from "../Components/Button"

export default function ProjectsPage() {
    return (
        <div id='cts-body'>
            <div id='cts-header-cnt'>
                <h1>MY PROJECTS</h1>
                <p>Explore the work I'm most proud of.</p>
            </div>
            <div id='cts-main-cnt'>
                <TextBlock height='70vh'>
                    <div className="cts-col-content-cnt">
                        <h1>deltabase</h1>
                        <p>A custom database system for efficient structured data management, featuring a tailored SQL parser, optimized file handling with caching, modular API integration, streamlined query execution.</p>
                        <Button width='90%' href='https://github.com/poproshaikin/deltabase'>
                            See on GitHub
                        </Button>
                    </div>
                </TextBlock>
                <TextBlock height='70vh'>
                    <div className='cts-col-content-cnt'>
                        <h1>Návrat krále</h1>
                        <p>A new citizen science project, organized in collaboration with experts from the Department of Ecology at the Faculty of Science, Charles University, the Czech Academy of Sciences, and the Czech Society for Ornithology.</p>
                        <Button width='90%' href='https://natur.cuni.cz/biologie/katedry-a-pracoviste/katedra-ekologie/odkazy/navrat-krale'>
                            See on Website
                        </Button>
                    </div>
                </TextBlock>
                <TextBlock height='70vh'>
                    <div className='cts-col-content-cnt'>
                        <img src="/assets/github.png" alt="github" />
                        <p>You can find my other works on my GitHub account.</p>
                        <Button width='90%' href='https://github.com/poproshaikin'>
                            See my GitHub
                        </Button>
                    </div>
                </TextBlock>    
            </div>
        </div>
    )
}