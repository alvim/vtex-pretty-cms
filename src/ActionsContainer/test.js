import ActionsContainer, { dispatch } from '.'

const actionsArray = []
actionsArray.push(function abc(a, b){ return this })
actionsArray.push(function def(a, b){ return this })

const aC = new ActionsContainer(actionsArray)

it('should contain the initial defined methods', () => {
  expect(aC).toHaveProperty('abc')
  expect(aC).toHaveProperty('def')
  expect(aC).toHaveProperty('dispatch')
})

it('should dispatch methods that return itself', () => {
  expect(aC).toEqual(aC.dispatch('abc'))
})