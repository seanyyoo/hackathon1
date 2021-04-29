let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  console.log(chrome);
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// chrome.browserAction.onClicked.addListener(function(activeTab)
// {
//     chrome.windows.create({ url: chrome.runtime.getURL("popup.html"), type: 
//     "popup" });
// });