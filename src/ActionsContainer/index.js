export const dispatch = function(actionName, args) {
  return this[actionName].apply(this, args)
}

const ActionsContainer = function(actions){
  for (const action of actions) this[action.name] = action

  this.dispatch = dispatch
}

export default ActionsContainer