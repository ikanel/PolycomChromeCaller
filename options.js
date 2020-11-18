// Saves options to chrome.storage
function save_options() {
    var host = document.getElementById('host').value;
    var lines = document.getElementById('lines').value;
    var pushUser = document.getElementById('pushUser').value;
    var pushPassword = document.getElementById('pushPassword').value;
    
    var countrycode = document.getElementById('countrycode').value;
    var countrycodeLine = document.getElementById('countrycodeLine').value;
    var addcountrycode = document.getElementById('addcountrycode').checked;
    
    chrome.storage.sync.set({
        host:host,
        lines:lines,
        pushUser:pushUser,
        pushPassword:pushPassword,
        countrycode:countrycode,
        countrycodeLine:countrycodeLine,
        addcountrycode:addcountrycode
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      chrome.extension.getBackgroundPage().window.location.reload();
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({

        host:'http://192.168.0.226',
        lines:3,
        pushUser:'Push',
        pushPassword:'Push',
        countrycode:'1',
        countrycodeLine:2,
        addcountrycode:true
      
    }, function(items) {
        document.getElementById('host').value = items.host;
        document.getElementById('lines').value = items.lines;
        document.getElementById('pushUser').value = items.pushUser;
        document.getElementById('pushPassword').value = items.pushPassword;
        document.getElementById('countrycode').value = items.countrycode;
        document.getElementById('countrycodeLine').value = items.countrycodeLine;
        document.getElementById('addcountrycode').checked = items.addcountrycode;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);