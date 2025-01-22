import "./SkillsPage.css"
import TextCard from "../Components/TextCard";
import Button from "../Components/Button"
import PageWithCards from "./PageWithCards";

export default function SkillsPage() {
    return (
        <PageWithCards 
            title='WHAT I EXCEL AT'
            subtitle='Turning complex ideas into elegant solutions.'
        >
            <TextCard>
                <h1>.NET</h1>
                <p>A comprehensive, cross-platform framework that empowers developers to build scalable and high-performance applications. Whether you're creating robust enterprise solutions or modern cloud applications, .NET provides the flexibility and tools needed to turn your ideas into reliable, efficient software.</p>   
                <Button width='90%' href='https://dotnet.microsoft.com/en-us/'>
                    Explore .NET
                </Button>
            </TextCard>
            <TextCard>
                <h1>ASP.NET</h1>
                {/* <img src="/assets/aspnet.png" alt="aspnet" /> */}
                <p>The framework for building dynamic, high-performance web applications. ASP.NET enables the creation of everything from fast APIs to fully interactive websites, all while supporting cross-platform deployment. With its efficient architecture and flexibility, it ensures that web development remains both powerful and streamlined.</p>
                <Button width='90%' href='https://dotnet.microsoft.com/en-us/learn/aspnet/what-is-aspnet'>
                    Explore ASP.NET
                </Button>
            </TextCard>
            <TextCard>
                <img src="/assets/postgres.png" alt="postgres" />
                <p>A open-source relational database known for its reliability and advanced features. PostgreSQL handles complex queries, large volumes of data, and diverse data types with ease. Its adherence to SQL standards, combined with modern extensions, makes it a go-to choice for businesses and developers demanding consistency and performance.</p>
                <Button width='90%' href='https://www.postgresql.org'>
                    Explore PostgreSQL
                </Button>
            </TextCard>
        </PageWithCards>
    )
}