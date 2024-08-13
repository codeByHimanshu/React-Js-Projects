

function rendorElements(reactElements,container){

    /*
    const domElement = document.createElement(reactElements.type)
    domElement.innerHTML = reactElements.children
    domElement.setAttribute('href',reactElements.props.href)
    domElement.setAttribute('target',reactElements.props.target)
    container.appendChild(domElement)
*/
const domElement = document.createElement(reactElements.type)
domElement.innerHTML = reactElements.children
for(const proprties in reactElements.props){
    // if(proprties==='children') continue;
    domElement.setAttribute(proprties,reactElements.props[proprties])
}
container.appendChild(domElement)
 }
 
 
 const reactElements={
    type:'a',
    props : {
        href:'https://google.com',
        target : '_blank'
    },
    children: 'click here to visit google.com'
 }
 const myContainer = document.querySelector('#root')
 
 rendorElements(reactElements,myContainer)

