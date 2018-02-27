'use strict';

console.log('Hey! Welcome to Popup!');

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log('This is the current state: ', req)
  console.log('This is the current sender: ', sender)
  sendResponse({ ghi: 'Eta eta teta' })
})

console.log('this is the var: ', test);