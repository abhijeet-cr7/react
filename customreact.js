function customRender(element , container){
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children
    for(prop in element.props){
        domElement.setAttribute(prop , element.props[prop])
    }
    container.appendChild = domElement;
}

const reactElement = {
    type : "h1",
    props : {
        href : "https://www.google.com",
        target : "_blank"
    },
    children : "Click me"
}

const container = document.querySelector("#root");
customRender(reactElement, container)