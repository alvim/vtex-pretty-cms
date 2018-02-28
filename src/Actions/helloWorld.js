export const method = function helloWorld() {
  document.body.innerHTML = 'Hello World!'
}

export const getView = () => {
  return {
    name: 'helloWorld',
    title: 'Hello world!',
    description: 'erases the body'
  }
}

export default {
  method,
  getView
}