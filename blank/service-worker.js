console.log("Hello, I'm service worker.");

const GOOGLE_ORIGIN = 'https://www.google.com';

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
    if (!tab.url) return;
    const url = new URL(tab.url);

    if (url.origin === GOOGLE_ORIGIN) {
        await chrome.sidePanel.setOptions({
            tabId,
            path: 'sidepanel/sidepanel.html',
            enabled: true
        });
    } else {
        await chrome.sidePanel.setOptions({
            tabId,
            enabled: false
        });
    }
});