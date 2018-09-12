// import _ from 'lodash';
// import printMe from './print.js'
//
// function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button')
//
//     element.innerHTML =  _.join(['Hello','webpack测试'],' ');
//
//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe
//
//     element.appendChild(btn)
//
//
//     return element
// }
//
// document.body.appendChild(component())
// function getComponent() {
//     return import(/* webpackChunkName: "lodash"*/ 'lodash').then(_ => {
//         var element = document.createElement('div')
//         const _ = await import(/*webpackCunkName: "lodash"*/ 'lodash')
//
//         element.innerHTML = _.join(['Hello','webpack'],'')
//
//         return element
//     }).catch(error => 'An error occured while loading the component')
// }

async function getComponent() {
    var element = document.createElement('div')
    const _ = await import(/*webpackCunkName: "lodash"*/ 'lodash')

    element.innerHTML = _.join(['Hello','webpack'],'')

    return element
}

getComponent().then(component => {
    document.body.appendChild(component)
})