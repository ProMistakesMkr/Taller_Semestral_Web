const link = window.location.search;
/* const buscarPagina = new URLSearchParams(link); */
const buscarPagina = new URLSearchParams(link);
const singleProduct = buscarPagina.get("id").replace('"', "");

console.log(singleProduct);
/* const productoPorSeparado = productsList.find((object) => object.id == singleProduct) */

const productoPorSeparado = productsList.find(data => 
    data.num == singleProduct
)

console.log(productoPorSeparado)
const productosLink = document.getElementById("productos");
productosLink.innerHTML = "";
productosLink.innerHTML = 

/* productosLink.innerHTML +=  */

`<section class="card_list">
    <figure class= "card_figure"><img class= "card_img" src="${productoPorSeparado.imagenProducto}"></figure>
    <article class="card_article">
        <h2 class="name_detail">${productoPorSeparado.item}</h2>
        <p class='descri_detail'>${productoPorSeparado.sobreModelo}</p>
        <h5 class="price_detail"> ${productoPorSeparado.precio}</h5>
        <p class="collect_detail">Collection: ${productoPorSeparado.tipo}</p>
        
        <button id="añadir" class="button is-black button_añadir">Añadir</button>

    </article>
</section>`


