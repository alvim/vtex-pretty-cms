import ActionsContainer from './ActionsContainer'
import actions from './Actions'

const actionsContainer = new ActionsContainer(actions)

chrome.runtime.onMessage.addListener(({ type, name, args }, sender, sendResponse) => {
  switch(type) {
    case 'RUN_ACTION':
      actionsContainer.dispatch(name, args)
      break

    case 'REQUEST_AVAILABLE_ACTIONS':
      chrome.runtime.sendMessage({ type: 'UPDATE_VIEW', views: actionsContainer.getViews() })
      break

    default:
      null
  }
})