import Vue from 'vue'
import Popup from './Popup/index.vue'

const requestState = tabId => chrome.tabs.sendMessage(tabId, { type: 'REQUEST_AVAILABLE_ACTIONS' })

chrome.tabs.onUpdated.addListener(tabId => requestState(tabId))

chrome.runtime.onMessage.addListener(({ type, views }, sender, sendResponse) => {
  switch(type) {
    case 'UPDATE_VIEW':
      window.pp.views = views
      break
    default:
      null
  }
})

const mountPopup = () => {
  new Vue({
    el: '#actions-container',
    render: h => h(Popup)
  })
}

mountPopup()

// NEXT STEP:
// DEFAULT VIEW
// UPDATE VIEW