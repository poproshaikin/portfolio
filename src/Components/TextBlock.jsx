import "./TextBlock.css";

export default function TextBlock({height, width, children}) {
    return (
        <div className='text-block-cnt' style={{height: height, width: width}}>
            {children}
        </div>
    )
}