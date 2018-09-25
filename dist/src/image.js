import Test from "./test.jpg";
function component() {
    var element = document.createElement('div');
    var myImage = new Image();
    myImage.src = Test;
    element.appendChild(myImage);
    return element;
}
document.body.appendChild(component());
//# sourceMappingURL=image.js.map