import {NavigateFunction} from "react-router-dom";

export function navigateTo(path: string, navigateFunction: NavigateFunction | undefined) {
    if (path === undefined) {
        return;
    }
    if (path.startsWith("#")) {
        const element = document.getElementById(path.substring(1));
        element.scroll({ behavior: "smooth" });
    } else {
        navigateFunction(path);
    }
}