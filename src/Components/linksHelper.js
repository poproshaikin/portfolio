export function isValidUrl(url) {
    return url.startsWith('http')
}

export function openUrl(url) {
    window.open(url, '_blank');
}