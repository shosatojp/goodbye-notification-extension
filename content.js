function injectScript(parent, path) {
    const e = document.createElement('script');
    e.setAttribute('src', chrome.extension.getURL(path));
    parent.appendChild(e);
}

injectScript(document.body, '/inject.js');
