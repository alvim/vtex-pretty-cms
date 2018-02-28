const requestState = tabId => chrome.tabs.sendMessage(tabId, { type: 'REQUEST_AVAILABLE_ACTIONS' })

chrome.tabs.onUpdated.addListener(tabId => requestState(tabId))

chrome.runtime.onMessage.addListener(({ type, views }, sender, sendResponse) => {
  switch(type) {
    case 'UPDATE_VIEW':
      console.log('Updating view, man!!!')
      window.pp.views = views
      break
    default:
      null
  }
})