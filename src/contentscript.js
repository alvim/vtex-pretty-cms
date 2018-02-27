'use strict';

(function(){
  const getState = () => ({
    abc: 123,
    def: 'hey hey hey'
  })
  // Every Action should be in the content script
  // The popup should show just the available actions
  // When an available action is selected in the popup
  // a message should me sent to the content script.
  chrome.runtime.sendMessage(getState(), res => console.log('Response: ', res ? res.ghi : ''))
})();