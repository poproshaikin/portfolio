import "./Button.css"
import {useNavigate} from "react-router-dom";
import {navigateTo} from "./navigationHelper";

export default function Button({href = undefined, children, ...props}) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigateTo(href, navigate)}
        className='btn-cnt'
        {...props}
        >
            {children}
        </div>
    )
}