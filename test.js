const {app} =require('./index')

console.assert(typeof app === 'object','app is an object')
console.assert(app.name === 'demo', 'name is demo')

