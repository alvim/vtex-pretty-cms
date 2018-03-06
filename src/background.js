'use strict'

chrome.runtime.onMessage.addListener(({ type, actionsQuantity }, {tab: { id: tabId }}, sendResponse) => {
  switch(type) {
    case 'DISABLE_ACTION':
      chrome.browserAction.disable()
      break

    case 'SET_BADGE':
      chrome.browserAction.enable()
      if (actionsQuantity) {
        const text = actionsQuantity > 10 ? '10+' : actionsQuantity.toString()
        chrome.browserAction.setBadgeBackgroundColor({ color: '#F51963', tabId })
        chrome.browserAction.setBadgeText({ text, tabId })
      }
      break

    default:
      null
  }
})

chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.tabs.sendMessage(tabId, { type: 'REQUEST_ACTION_STATE' })
})

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.tabs.query({ active: true }, ([{ id }]) => {
    if (tabId == id) {
      chrome.tabs.sendMessage(tabId, { type: 'REQUEST_ACTION_STATE' })
    }
  })
})