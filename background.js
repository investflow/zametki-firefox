var title = "-> Investflow";
if (window.NativeWindow) { // Android browser
    var selector = window.NativeWindow.contextmenus.SelectorContext("*");
    window.NativeWindow.contextmenus.add(title, selector, function () {
        process({})
    });
} else { // Desktop browser
    chrome.contextMenus.create({
        title: title,
        contexts: ["page", "selection", "link"],
        onclick: process
    });
}

function process(info) {
    chrome.tabs.query({active: true}, function (tabs) {
        var tab = tabs[0];
        var title = tab.title;
        var text = info.selectionText ? info.selectionText : "";
        var url = info.linkUrl ? info.linkUrl : info.srcUrl ? info.srcUrl : info.pageUrl ? info.pageUrl : info.frameUrl ? info.frameUrl : tab.url;
        chrome.tabs.create({"url": "http://investflow.ru/zametki/new?title=" + title + "&text=" + text + "&url=" + url});
    });
}

