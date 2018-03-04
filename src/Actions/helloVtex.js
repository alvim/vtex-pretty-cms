export const method = function helloWorld() {
  document.body.innerHTML = 'Hello VTEX!'
}

export const getView = () => {
  return {
    name: 'helloVtex',
    title: 'Hello VTEX!',
    description: 'Say hi to VTEX.'
  }
}

export default {
  method,
  getView
}