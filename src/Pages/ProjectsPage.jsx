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
                <h1>Návrat Krále</h1>
                <p>A new citizen science project, organized in collaboration with experts from the Department of Ecology at the Faculty of Science, Charles University, the Czech Academy of Sciences, and the Czech Society for Ornithology.</p>
                <Button href='https://natur.cuni.cz/biologie/katedry-a-pracoviste/katedra-ekologie/odkazy/navrat-krale'>
                    <p>See on Website</p>
                </Button>
            </TextCard>
            <TextCard>
                <h1>Deltabase</h1>
                <p>A custom database system for efficient structured data management, featuring a tailored SQL parser, optimized file handling with caching, modular API integration, streamlined query execution.</p>
                <Button href='https://github.com/poproshaikin/deltabase'>
                    <p>See on GitHub</p>
                </Button>
            </TextCard>
            <TextCard>
                <img src="/assets/github.png" alt="github" />
                <p>You can find my other works on my GitHub account.</p>
                <Button href='https://github.com/poproshaikin'>
                    <p>See my GitHub</p>
                </Button>
            </TextCard>   
        </PageWithCards>
    )
}