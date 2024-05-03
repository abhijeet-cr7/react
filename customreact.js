function customRender(element , container){
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children
    console.log(element,container)
    for(prop in element.props){
        domElement.setAttribute(prop , element.props[prop])
    }
    console.log(domElement, "domelement")
    container.appendChild(domElement);
}

const reactElement = {
    type : "a",
    props : {
        href : "https://www.google.com",
        target : "_blank"
    },
    children : "Click me"
}

const container = document.getElementById("root");
customRender(reactElement, container)