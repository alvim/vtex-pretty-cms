export const dispatch = function(actionName, args) {
  return this.methods[actionName].apply(this, args)
}

export const getViews = function(){
  return this.actions.map(({ getView }) => getView())
}

const ActionsContainer = function(actions){
  this.actions = actions
  this.methods = {}
  for (const action of actions)
    this.methods[action.method.name] = action.method

  this.dispatch = dispatch
  this.getViews = getViews
}

export default ActionsContainer