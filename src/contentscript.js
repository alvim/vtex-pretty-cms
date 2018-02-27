'use strict';

import { getStateFromDOM as getState } from './Popup'
import * as actions from './Actions'

chrome.runtime.onMessage.addListener(({ type }, sender, sendResponse) => {
  switch(type) {
    case 'GET_STATE':
      const state = getState()
      chrome.runtime.sendMessage({ type: 'STATE', state })
      break
    default:
      console.log('Switch statement on default.')
  }
})