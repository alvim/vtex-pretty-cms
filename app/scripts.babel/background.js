'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(tabId => {
  console.log('Tab updated: ', tabId);
  chrome.pageAction.show(tabId);
});

chrome.tabs.onActivated.addListener(tabId => {
  console.log('Now active: ', tabId);
});

chrome.runtime.onStartup.addListener(details => {
  console.log('Starting...', details);
})

chrome.runtime.onSuspend.addListener(details => {
  console.log('Suspending...', details);
})

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log('This is the current state: ', req)
  console.log('This is the current sender: ', sender)
  sendResponse({ ghi: 'Eta eta teta' })
})

console.log(chrome);