import { addProduct, getAllproducts } from "./firebase_grano.js";
const button = document.getElementById("submit-button");
button.addEventListener("click", (e) => clickForm(e));

let products = await getAllproducts();
displayProducts();

console.log(products);

function displayProducts() {
  const productContainer = document.getElementById("product-container");


  productContainer.innerHTML=''


  products.forEach((product) => {
    const productElem = document.createElement("li");
    productElem.textContent = product.genero;

    productContainer.appendChild(productElem);
  });
}

async function clickForm(e) {
  e.preventDefault();
  console.log("prevent event");

  const genero = document.getElementById("productGenero").value;
  const material = document.getElementById("productMaterial").value;
  const producto = document.getElementById("productName").value;
  const tipo_prenda = document.getElementById("productType").value;

  /*   console.log(title)
  console.log(description) */

  //--Crear las tareas
  await addProduct(genero, material, producto, tipo_prenda);
  //-----Actualizar las tareas

  await getAllproducts();
  displayProducts();
}

console.log("Hola Main Js");
