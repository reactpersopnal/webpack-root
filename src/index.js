import _ from 'lodash';
import Print from './print.js'

function component() {
    var element = document.createElement('div');

    element.innerHTML =  _.join(['Hello','webpack测试'],' ');
    // element.onclick = Print.bind(null,'Hello webpack!')

    element.appendChild(btn)


    return element
}

document.body.appendChild(component())
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
