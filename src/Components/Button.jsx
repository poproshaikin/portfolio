import "./Button.css"
import {useNavigate} from "react-router-dom";
import {navigateTo} from "./navigationHelper";

export default function Button({height, width, href = undefined, children}) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigateTo(href, navigate)} className='btn-cnt' style={{height: height, width: width}}>
            {children}
        </div>
    )
}