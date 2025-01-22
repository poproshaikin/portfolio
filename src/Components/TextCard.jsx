import "./TextCard.css";

export default function TextCard({height, width, children}) {
    return (
        <div className='text-card-cnt' style={{height: height, width: width}}>
            {children}
        </div>
    )
}