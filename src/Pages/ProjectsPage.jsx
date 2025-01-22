import "./ProjectsPage.css"
import TextCard from "../Components/TextCard"
import Button from "../Components/Button"
import PageWithCards from "./PageWithCards"

export default function ProjectsPage() {
    return (
        <PageWithCards
            title='MY PROJECTS'
            subtitle="Explore the work I'm most proud of"
            id='pjs'
            >
            <TextCard>
                <h1>Deltabase</h1>
                <p>A custom database system for efficient structured data management, featuring a tailored SQL parser, optimized file handling with caching, modular API integration, streamlined query execution.</p>
                <Button width='90%' href='https://github.com/poproshaikin/deltabase'>
                    See on GitHub
                </Button>
            </TextCard>
            <TextCard>
                <h1>Návrat Krále</h1>
                <p>A new citizen science project, organized in collaboration with experts from the Department of Ecology at the Faculty of Science, Charles University, the Czech Academy of Sciences, and the Czech Society for Ornithology.</p>
                <Button width='90%' href='https://natur.cuni.cz/biologie/katedry-a-pracoviste/katedra-ekologie/odkazy/navrat-krale'>
                    See on Website
                </Button>
            </TextCard>
            <TextCard>
                <img src="/assets/github.png" alt="github" />
                <p>You can find my other works on my GitHub account.</p>
                <Button width='90%' href='https://github.com/poproshaikin'>
                    See my GitHub
                </Button>
            </TextCard>   
        </PageWithCards>
    )
}