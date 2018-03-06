import $ from 'jQuery'
import ActionsContainer from './ActionsContainer'
import actions from './Actions'

const actionsContainer = new ActionsContainer(actions)
const views = actionsContainer.getViews()

const isVtex = () => {
  if (
    ~location.href.indexOf('vtexcommercestable')
    || $('html').attr('xmlns:vtex')
    || $('script[src*="io.vtex.com.br/checkout-ui"]').length
  ) return true
}

chrome.runtime.onMessage.addListener(({ type }, sender, sendResponse) => {
  switch(type) {
    case 'REQUEST_ACTION_STATE':
    if (isVtex()) chrome.runtime.sendMessage({ type: "SET_BADGE", actionsQuantity: views.length })
    else chrome.runtime.sendMessage({ type: "DISABLE_ACTION" })
    break

    default:
    null
  }
})

if (isVtex()) {
  chrome.runtime.onMessage.addListener(({ type, name, args }, sender, sendResponse) => {
    switch(type) {
      case 'RUN_ACTION':
      actionsContainer.dispatch(name, args)
      break

      case 'REQUEST_AVAILABLE_ACTIONS':
      chrome.runtime.sendMessage({ type: 'UPDATE_VIEW', views })
      break

      default:
      null
    }
  })
}
