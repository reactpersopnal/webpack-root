import Test from "./test.jpg"
import * as _ from "lodash"

function component() {
    var element = document.createElement('div')

    var myImage = new Image()
    myImage.src = Test

    element.appendChild(myImage)

    return element
}

document.body.appendChild(component())
