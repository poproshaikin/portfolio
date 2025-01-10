import { isValidUrl, openUrl } from "./linksHelper";

export function navigateTo(path, navigateFunction) {
    if (path === undefined) {
        return;
    } else if (isValidUrl(path)) {
        openUrl(path);
    } else if (path.startsWith("#")) {
        const element = document.getElementById(path.substring(1));
        element.scrollIntoView({ behavior: "smooth" });
    } else {
        navigateFunction(path);
    }
}