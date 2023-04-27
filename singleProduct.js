const link = window.location.search;
/* const buscarPagina = new URLSearchParams(link); */
const buscarPagina = new URLSearchParams(link);
const singleProduct = buscarPagina.get("id").replace('"', "");
const buttonComentario = document.getElementById('comentario-button');

/* const productoPorSeparado = productsList.find((object) => object.id == singleProduct) */

const productoPorSeparado = productsList.find(data =>
    data.num == singleProduct
)

/////

function addTocomentarioArray() {

    let inputText = document.getElementById('comentario-input').value;

    document.getElementById('comentario-input').value = '';

    if (inputText === '') {
        document.getElementById('error-message').style.display = 'block';

    } else {
        document.getElementById('error-message').style.display = 'none';
        let currentId = singleProduct;
        let currentProduct = productsList.find(data => data.num == currentId);
        let comentarioArray = currentProduct.comentarioArray || [];
        comentarioArray.push(inputText);
        currentProduct.comentarioArray = comentarioArray;

        let outputList = document.getElementById('comentario-list');

        outputList.innerHTML = '';
        comentarioArray.forEach((item, i) => {
            let li = document.createElement('li');
            let nameProfile = document.createElement('p');
            let imgProfile = document.createElement('img');
            imgProfile.setAttribute('src', 'https://www.daysoftheyear.com/wp-content/uploads/international-cat-day1-scaled.jpg');
            imgProfile.classList.add('image-profile');
            imgProfile.style.width = '100px';
            imgProfile.style.height = '100px';
            nameProfile.innerHTML = "Lacho"
            li.innerText = item;

            // create a delete button and add it to the li element
            let deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'Delete';
            deleteButton.onclick = () => deleteComment(i);
            li.appendChild(deleteButton);

            outputList.appendChild(imgProfile);
            outputList.appendChild(nameProfile);
            outputList.appendChild(li);
        });
        console.log(productsList);
    }
}



function deleteComment(index) {
    let currentId = singleProduct;
    let currentProduct = productsList.find(data => data.num == currentId);
    let comentarioArray = currentProduct.comentarioArray || [];
    comentarioArray.splice(index, 1);
    currentProduct.comentarioArray = comentarioArray;

    let outputList = document.getElementById('comentario-list');

    outputList.innerHTML = '';
    comentarioArray.forEach((item, i) => {
        let li = document.createElement('li');
        let nameProfile = document.createElement('p');
        let imgProfile = document.createElement('img');
        imgProfile.setAttribute('src', 'https://www.daysoftheyear.com/wp-content/uploads/international-cat-day1-scaled.jpg');
        imgProfile.classList.add('image-profile');
        imgProfile.style.width = '50px';
        imgProfile.style.height = '50px';
        nameProfile.innerHTML = "Lacho"
        li.innerText = item;

        // create a delete button and add it to the li element
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = () => deleteComment(i);
        li.appendChild(deleteButton);

        outputList.appendChild(imgProfile);
        outputList.appendChild(nameProfile);
        outputList.appendChild(li);
    });
}



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

        <h3>Comentarios</h3>
        <input type="text" id="comentario-input"></input>
        <button id="comentario-button" onclick="addTocomentarioArray()">Enviar comentario</button>
        <div id="error-message" style="display: none; color: red;">Please enter a value</div>
        <div id = "comentario-list">
        </div>
       

    </article>
</section>`