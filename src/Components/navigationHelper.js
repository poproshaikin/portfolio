export function navigateTo(path, navigateFunction) {
    if (path === undefined) {
        return;
    }
    if (path.startsWith("#")) {
        console.log(path)
        const element = document.getElementById(path.substring(1));
        element.scrollIntoView({ behavior: "smooth" });
    } else {
        navigateFunction(path);
    }
}