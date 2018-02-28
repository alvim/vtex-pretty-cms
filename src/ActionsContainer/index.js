export const dispatch = function(actionName, args) {
  return this[actionsName].apply(this, args)
}

const ActionsContainer = function(actions){
  for (const action in actions) this[action.name] = action

  this.dispatch = dispatch
}

export default ActionsContainer