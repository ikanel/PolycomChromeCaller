var host,
    user,
    password,settingsChanged;
lines = [];
function call(phone, line = "Line1") {

    var postData = "<PolycomIPPhone><Data priority=\"All\">tel:\\" + strip(phone) + ";" + line + "</Data></PolycomIPPhone>";
    var postReq = new digestAuthRequest('POST', host + "/push", user, password);
    postReq.request(function (data) {
        // success callback
        // data probably a success message
    }, function (errorCode) {
        // error callback
        // tell user request failed
        alert(errorCode);
    }, postData);
}

function strip(phone) {
    return phone.replace("[\s\-\(\)\.]+", "");
}
function getSettings() {

    chrome.storage.sync.get({

        host: 'http://192.168.0.226',
        lines: 3,
        pushUser: 'Push',
        pushPassword: 'Push',
        countrycode: '1',
        countrycodeLine: 2,
        addcountrycode: true

    }, function (items) {

        this.lines = [];
        for (i = 0; i < items.lines; i ++) {

            this.lines.push({
                code: items.countrycode,
                addCountryCode: (
                    (i + 1) == items.countrycodeLine
                ),
                name: "Line" + (
                    i + 1
                )

            });
        }

        host = items.host;
        user = items.pushUser;
        password = items.pushPassword;
        if(settingsChanged!=undefined)
        settingsChanged(lines);
    });
   
}
