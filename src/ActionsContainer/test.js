import ActionsContainer, { dispatch } from '.'

const actionsArray = []

const abc = {
  method: function abc(a, b){ return this },
  getView: () => {
    return {
      name: 'abc',
      title: 'ABC',
      description: 'It is A-B-C',
    }
  }
}

const def = {
  method: function def(a, b){ return this },
  getView: () => {
    return {
      name: 'def',
      title: 'DEF',
      description: 'It is D-E-F',
    }
  }
}

actionsArray.push(abc)
actionsArray.push(def)

const aC = new ActionsContainer(actionsArray)

it('should contain the initial defined methods', () => {
  expect(aC.methods).toHaveProperty('abc')
  expect(aC.methods).toHaveProperty('def')
  expect(aC).toHaveProperty('dispatch')
})

it('should dispatch methods that return itself', () => {
  expect(aC).toEqual(aC.dispatch('abc'))
})

it('should contain chainable methods', () => {
  expect(aC).toEqual(aC.dispatch('abc').dispatch('def'))
})

it('should return all views properly', () => {
  const views = aC.getViews()
  const arr = [{ name: 'abc', title: 'ABC', 'description': 'It is A-B-C' }]

  expect(views.length).toBe(2)
  expect(views).toEqual(expect.arrayContaining(arr))
})