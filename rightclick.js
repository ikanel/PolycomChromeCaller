
// adds a countrycode to the phone number if it is necessary
function addCountryCode(addCode, code, phone) {
    return addCode ? (phone[0] != code ? code + phone : phone) : phone;
}
function createContextMenu(lines) {
    chrome.contextMenus.removeAll(()=>
    {
    chrome.contextMenus.create({
        id: "poly_default",
        title: "Call %s vs polycom",
        contexts: ["selection"],
        onclick: function (info, tab) {
            call(info.selectionText);
        }
    });
    if (lines.length <= 1) 
        return;
    

    for (let i = 0; i < lines.length; i++) {
        let line=lines[i];
        chrome.contextMenus.create({
            id: "poly_Line" + i,
            parentId: "poly_default",
            title: "Call %s vs " + line.name,
            contexts: ["selection"],
            onclick: function (info, tab) {
                call(addCountryCode(line.addCountryCode, line.code, info.selectionText), line.name);
            }
        });
   
    }
});
}

settingsChanged=createContextMenu;
getSettings();
