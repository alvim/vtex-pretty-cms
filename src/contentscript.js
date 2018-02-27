'use strict';

import * as actions from './actions'

const getState = () => ({
  currentPage: 123
})

chrome.runtime.onMessage.addListener(({ type }, sender, sendResponse) => {
  switch(type) {
    case 'GET_STATE':
      const state = getState()
      console.log('Sending state: ', state)
      chrome.runtime.sendMessage({ type: 'STATE', state })
      break
    default:
      console.log('Switch statement on default.')
  }
})