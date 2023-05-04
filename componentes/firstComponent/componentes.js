import getData from "../../json.js"   

let list = [];


class firstComponent extends HTMLElement {
    static get observedAttributes(){
        return['class']
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.printData();
    }
    attributeChangeCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.printData();
}

render(){
    this.shadowRoot.innerHTML =`
    <link rel="stylesheet" href="./componentes/firstComponent/style.css">
 `;
    list.forEach((item)=>{

        this.shadowRoot.innerHTML +=`            
        <div class="container">
    
    <div class="card">
        <div class="card-image">
            <img src="${item.imagenProducto}">
        </div>
        <div class="card-content">
            <h3>${item.item}</h3>
            <p>${item.precio} COP</p>
            <p>${item.coleccion}</p>
            <button class="add-to-cart">
                Add To Cart
            </button>
        </div>
    </div> 
        `;
    })
}

printData () {
    getData().then((a)=>{list = a
        this.render()})
    
}


}
customElements.define("app-header", firstComponent);
export default firstComponent;


