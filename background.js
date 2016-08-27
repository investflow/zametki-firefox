browser.contextMenus.create({
    title: "Zametka!",
    contexts: ["page", "selection", "link"],
    onclick: process
});

function process(info) {
    browser.tabs.query({active: true}, function (tabs) {
        var tab = tabs[0];
        var title = tab.title;
        var text = info.selectionText ? info.selectionText : "";
        var url = info.linkUrl ? info.linkUrl : info.srcUrl ? info.srcUrl : info.pageUrl ? info.pageUrl : info.frameUrl ? info.frameUrl : tab.url;
        browser.tabs.create({"url": "http://investflow.ru/zametki/new?title=" + title + "&text=" + text + "&url=" + url});
    });
}

