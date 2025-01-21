import './PageWithCards.css'

export default function PageWithCards({title, subtitle, children}) {
    return (
        <div className='pwc-body'>
            <div className='pwc-header-cnt' data-aos='fade-up'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <div className='pwc-cards-cnt'>
                {children}
            </div>
        </div>
    )
}