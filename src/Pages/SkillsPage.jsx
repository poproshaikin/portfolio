import TextCard from "../Components/TextCard";
import Button from "../Components/Button"
import PageWithCards from "./PageWithCards";

export default function SkillsPage() {
    return (
        <PageWithCards 
            title='WHAT I EXCEL AT'
            subtitle='Turning complex ideas into elegant solutions.'
            id='skl'
        >
    
            <TextCard>
                <img src="/assets/postgres.png" alt="postgres" />
                <p>PostgreSQL is an open-source relational database known for its reliability and advanced features. It excels at handling complex queries, large datasets, and diverse data types. Its adherence to SQL standards and support for modern extensions make it a top choice for developers seeking consistency and performance.</p>
                <Button href='https://www.postgresql.org'>
                    <p>Explore PostgreSQL</p>
                </Button>
            </TextCard>
            <TextCard>
                <h1>.NET</h1>
                <p>A comprehensive, cross-platform framework that empowers developers to build scalable applications. Whether you're creating robust enterprise solutions or modern cloud applications, .NET provides the flexibility and tools needed to turn your ideas into reliable, efficient software.</p>   
                <Button href='https://dotnet.microsoft.com/en-us/'>
                    <p>Explore .NET</p>
                </Button>
            </TextCard>
            <TextCard>
                <h1>ASP.NET</h1>
                {/* <img src="/assets/aspnet.png" alt="aspnet" /> */}
                <p>
                    ASP.NET is a framework for building dynamic, high-performance web applications, from fast APIs to interactive websites. Its efficient architecture and cross-platform support make web development powerful and streamlined.</p>
                <Button href='https://dotnet.microsoft.com/en-us/learn/aspnet/what-is-aspnet'>
                    <p>Explore ASP.NET</p>
                </Button>
            </TextCard>
        </PageWithCards>
    )
}