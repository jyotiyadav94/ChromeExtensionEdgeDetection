// Create a new tab with the welcome page when the extension is installed
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == "install") {
      chrome.tabs.create({ url: chrome.runtime.getURL('welcome.html') });
    }
  });
  
  // If cam access has already been granted to this extension, set the camAccess flag.
  chrome.storage.local.get('camAccess', items => {
    if (!!items['camAccess']) {
      console.log('cam access already exists');
    }
  });
  
  // If mic access has already been granted to this extension, set the micAccess flag.
  chrome.storage.local.get('micAccess', items => {
    if (!!items['micAccess']) {
      console.log('mic access already exists');
    }
  });
  
  // If cam access gets granted to this extension, set the camAccess flag.
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if ('camAccess' in changes) {
      console.log('cam access granted');
    }
    if ('micAccess' in changes) {
      console.log('mic access granted');
    }
  });