import './TextCntBordered.css'

export default function TextCntBordered({property, value, height, width}) {
    function copyText() {
        navigator.clipboard.writeText(value)
    }

    return (
        <div onClick={copyText} className='tcc-cnt' style={{height: height, width: width}}>
            <p className='tcc-key'>{property}</p>
            <h3 className='tcc-value'>{value}</h3>
        </div>
    )
}