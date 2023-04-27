const productsList = [
  {
    num: 1,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camibusopastatras_500x.jpg?v=1679359618",
    item: "Camisa Oversize High Vibes Bunny",
    precio: "32.000",
    material: "80% poliester, 20% algodón",
    sobreModelo: "La modelo mide 1.65 y usa talla M",
    tipo: "Camisa",
    tipo2: "Inferior",
  },

  {
    num: 2,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camibusopastblanco_500x.jpg?v=1679359557",
    item: "Camisa Oversize Alto Cilindraje",
    precio: "40.000",
    material: "100% algodón",
    sobreModelo: "La modelo mide 1.60 y usa talla XS",
    tipo: "Camisa",
    tipo2: "Inferior",
  },

  {
    num: 3,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camibusopastbeige_500x.jpg?v=1679359579",
    item: "Camisa Oversize Aleteo Salvaje",
    precio: "35.000",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "La modelo mide 1.62 y usa talla S",
    tipo: "Camisa",
    tipo2: "Inferior",
  },

  {
    num: 4,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/CAMISETAANDESATRAS_500x.jpg?v=1681905941",
    item: "Camisa Leyenda Aletosa",
    precio: "40.000",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "La modelo mide 1.62 y usa talla S",
    tipo: "Camisa",
    tipo2: "Inferior",
  },

  {
    num: 5,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camisetaboundariesazulo_500x.jpg?v=1679359854",
    item: "Sueter Pastel Aleta",
    precio: "80.000",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "La modelo mide 1.65 y usa talla M",
    tipo: "Sueter",
    tipo2: "Inferior",
  },

  {
    num: 6,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camisetacomunidadazulatras_500x.jpg?v=1681868843",
    item: "Camisa Oversize CremAleta",
    precio: "40.000",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "El modelo mide 1.79 y usa talla L",
    tipo: "Camisa",
    tipo2: "Inferior",
  },

  {
    num: 7,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camisetaboundariesneigefrente_500x.jpg?v=1679359934",
    item: "Camisa Oversize Azul celeste",
    precio: "35.000",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "El modelo mide 1.74 y usa talla M",
    tipo: "Camisa",
    tipo2: "Inferior",
  },

  {
    num: 8,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camisetacomunidadblanca_500x.jpg?v=1681868968",
    item: "Camiseta Mosaico Aletoso",
    precio: "40.000",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.77 y usa talla L",
    tipo: "Camiseta",
    tipo2: "Inferior",
  },

  {
    num: 9,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/diadesol_500x.jpg?v=1681906456",
    item: "Pinta aletosa",
    precio: "80.000",
    descuento: "",
    material: "80% algodón 20% poliester",
    sobreModelo: "El modelo mide 1.87 y usa talla XL",
    tipo: "Pinta",
    tipo2: "Completo",
  },

  {
    num: 10,
    imagenProducto:
      "https://i.pinimg.com/236x/5c/1e/b1/5c1eb14239d9230cc6544bef91786fc9.jpg",
    item: "Pinta aletosa vernao",
    precio: "90.000",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.72 y usa talla M",
    tipo: "Pinta",
    tipo2: "Completo",
  },

  {
    num: 11,
    imagenProducto:
      "https://i.pinimg.com/564x/d6/d5/fc/d6d5fc78ab26eea553940fb2114d5f85.jpg",
    item: "Pinta naranja aletosa",
    precio: "110.000",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.82 y usa talla XL",
    tipo: "Pinta",
    tipo2: "Completo",
  },

  {
    num: 12,
    imagenProducto:
      "https://i.pinimg.com/564x/2a/2d/a1/2a2da1d3c4f67e5db13296f94e063d89.jpg",
    item: "Pinta Max Combi Aleta",
    precio: "100.000",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.82 y usa talla XL",
    tipo: "Pinta",
    tipo2: "Completo",
  },

  {
    num: 13,
    imagenProducto:
      "https://i.pinimg.com/564x/f1/c8/ef/f1c8eff2ef9c18aeee6c46197c9a5533.jpg",
    item: "Camisa flow urbano",
    precio: "40.000",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "La modelo mide 1.62 y usa talla M",
    tipo: "Camisa",
    tipo2: "Superior",
  },

  {
    num: 14,
    imagenProducto:
      "https://i.pinimg.com/564x/5d/c5/2a/5dc52a1164e14d2360df0c0a13a16e43.jpg",
    item: "Pinta Aleteo Asiático",
    precio: "55.000",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.57 y usa talla S",
    tipo: "Pinta",
    tipo2: "Completo",
  },

  {
    num: 15,
    imagenProducto:
      "https://i.pinimg.com/564x/e9/af/aa/e9afaac16a74c7a7896853b21e9da306.jpg",
    item: "Pinta Aleteo Verdoso",
    precio: "120.000",
    descuento: "",
    material: "100% algodon",
    sobreModelo: "El modelo mide 1.67 y usa talla L",
    tipo: "Pinta",
    tipo2: "Completo",
  },

  {
    num: 16,
    imagenProducto:
      "https://i.pinimg.com/236x/bf/10/5a/bf105a7a9ec4506eb1f7753bcd310a49.jpg",
    item: "Pañoleta del Aleteo",
    precio: "10.000",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.77 y usa talla L",
    tipo: "Pañoleta",
    tipo2: "Superior",
  },

  {
    num: 17,
    imagenProducto:
      "https://i.pinimg.com/564x/1c/5e/4e/1c5e4e9902c87d66c4854f9f7c89588f.jpg",
    item: "Camisa Overzise PokerAleta",
    precio: "50.000",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "El modelo mide 1.83 y usa talla XL",
    tipo: "Camisa Oversize",
    tipo2: "Superior",
  },

  {
    num: 18,
    imagenProducto:
      "https://i.pinimg.com/564x/b2/a0/05/b2a00578e9f3e312a932e63f63428fe4.jpg",
    item: "Pinta Aleteo Veraniego Violeta",
    precio: "240.000",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.77 y usa talla L",
    tipo: "Pinta",
    tipo2: "Completo",
  },

  {
    num: 19,
    imagenProducto:
      "https://i.pinimg.com/564x/4b/29/20/4b2920352d921809d21ecb74535ac82a.jpg",
    item: "Pinta Aleteo EcoFriendly",
    precio: "160.000",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.73 y usa talla S",
    tipo: "Pinta",
    tipo2: "Completo",
  },

  {
    num: 20,
    imagenProducto:
      "https://i.pinimg.com/564x/56/70/b3/5670b312956dd8d54b7e92f731eb165c.jpg",
    item: "Tillas Aletosas Azul",
    precio: "40.000",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "La modelo mide 1.73 y usa talla  EURO 38",
    tipo: "Calzado",
    tipo2: "inferior",
  },
];
