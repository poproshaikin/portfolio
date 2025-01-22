import './TextCntBordered.css'

export default function TextCntBordered({property, value, height, width}) {
    function copyText() {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(value)
        }
    }

    return (
        <div onClick={copyText} onTouchStart={copyText} className='tcc-cnt' style={{height: height, width: width}}>
            <p className='tcc-key'>{property}</p>
            <h3 className='tcc-value'>{value}</h3>
        </div>
    )
}