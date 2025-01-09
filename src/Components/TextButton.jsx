import "./TextButton.css"
import {navigateTo} from "./navigationHelper";
import {useNavigate} from "react-router-dom";

export default function TextButton({content, fontSize = 'inherit', href = undefined}) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigateTo(href, navigate)} className='txt-btn' style={{fontSize: fontSize}}>
            {content}
        </div>
    )
}