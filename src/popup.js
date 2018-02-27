const requestState = tabId => chrome.tabs.sendMessage(tabId, { type: 'GET_STATE' })

chrome.tabs.onUpdated.addListener(tabId => requestState(tabId))

chrome.runtime.onMessage.addListener(({ type, state }, sender, sendResponse) => {
  switch(type) {
    case 'STATE':
      console.log('Received state: ', state)
      break
    default:
      null
  }
})