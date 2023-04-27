const productsList = [
  {
    num: 1,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camibusopastatras_500x.jpg?v=1679359618",
    item: "Hoodie con cierre past self azul",
    precio: "$260,000.00",
    material: "100% algodón",
    sobreModelo: "El modelo mide 1.85 y usa talla L",
    tipo: "Hoodie con cierre",
    coleccion: "Paradox of self",
    sexo: "unisex",
  },

  {
    num: 2,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camibusopastblanco_500x.jpg?v=1679359557",
    item: "Hoodie con cierre past self blanco",
    precio: "$260,000.00",
    material: "100% algodón",
    sobreModelo: "La modelo mide 1.60 y usa talla XS",
    tipo: "Hoodie con cierre",
    coleccion: "Paradox of self",
    sexo: "unisex",
  },

  {
    num: 3,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camibusopastbeige_500x.jpg?v=1679359579",
    item: "Hoodie con cierre past self beige",
    precio: "$260,000.00",
    material: "100% algodón",
    sobreModelo: "La modelo mide 1.62 y usa talla S",
    tipo: "Hoodie con cierre",
    coleccion: "Paradox of self",
    sexo: "unisex",
  },

  {
    num: 4,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/CAMISETAANDESATRAS_500x.jpg?v=1681905941",
    item: "Camiseta andes amarillo",
    precio: "$150,000.00",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "La modelo mide 1.62 y usa talla L",
    tipo: "Camiseta 01",
    coleccion: "Comunidad Andina",
    sexo: "unisex",
  },

  {
    num: 5,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camisetaboundariesazulo_500x.jpg?v=1679359854",
    item: "Camiseta boundaries of self azul",
    precio: "$150,000.00",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "La modelo mide 1.65 y usa talla M",
    tipo: "Camiseta 01",
    coleccion: "Paradox of self",
    sexo: "unisex",
  },

  {
    num: 6,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camisetacomunidadazulatras_500x.jpg?v=1681868843",
    item: "Camiseta comunidad andina azul",
    precio: "$150,000.00",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "El modelo mide 1.79 y usa talla L",
    tipo: "Camiseta 01",
    coleccion: "Comunidad Andina",
    sexo: "unisex",
  },

  {
    num: 7,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camisetaboundariesneigefrente_500x.jpg?v=1679359934",
    item: "Camiseta boundaries of self beige",
    precio: "$150,000.00",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "El modelo mide 1.74 y usa talla M",
    tipo: "Camiseta 01",
    coleccion: "Paradox of self",
    sexo: "unisex",
  },

  {
    num: 8,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camisetacomunidadblanca_500x.jpg?v=1681868968",
    item: "Camiseta comunidad andina blanco",
    precio: "$150,000.00",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "El modelo mide 1.77 y usa talla L",
    tipo: "Camiseta 01",
    coleccion: "Comunidad Andina",
    sexo: "unisex",
  },

  {
    num: 9,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/diadesol_500x.jpg?v=1681906456",
    item: "Camiseta dia de sol amarillo",
    precio: "$150,000.00",
    descuento: "",
    material: "100% Algodón",
    sobreModelo: "El modelo mide 1.64 y usa talla XS",
    tipo: "Camiseta 01",
    coleccion: "Comunidad Andina",
    sexo: "unisex",
  },

  {
    num: 10,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/dssdd-tops_1080x.jpg?v=1676915093",
    item: "Top Weedgreen Azul",
    precio: "$45,000.00",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "El modelo mide 1.72 y usa talla M",
    tipo: "Top 01",
    coleccion: "Linea ADN",
    sexo: "Mujer",
  },

  {
    num: 11,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/cargodetalle4_1080x.jpg?v=1653358137",
    item: "Pantalon Cargo camuflado",
    precio: "$150,000.00",
    descuento: "30%",
    material: "100% algodón",
    sobreModelo: "El modelo mide 1.82 y usa talla XL",
    tipo: "Pantalon Cargo",
    coleccion: "The color of silence",
    sexo: "Hombre",
  },

  {
    num: 12,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/babdfoto-producto-parallael_1080x.jpg?v=1673743138",
    item: "Pantaloneta parallel universe",
    precio: "$150,000.00",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.82 y usa talla XL",
    tipo: "Pantaloneta",
    coleccion: "Respect Life",
    sexo: "Hombre",
  },

  {
    num: 13,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/camibusoparadoxblanco_1080x.jpg?v=1679358727",
    item: "Camibuso corto paradox of self blanco",
    precio: "$150,000.00",
    descuento: "",
    material: "80% poliester, 20% algodón",
    sobreModelo: "La modelo mide 1.62 y usa talla S",
    tipo: "Camibuso  corto",
    coleccion: "Paradox of self",
    sexo: "unisex",
  },

  {
    num: 14,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/shortcomunidadrosadofrente_1080x.jpg?v=1681905233",
    item: "Short comunidad andina rosado",
    precio: "$120,000.00",
    descuento: "",
    material: "20% poliester, 80% algodón",
    sobreModelo: "El modelo mide 1.57 y usa talla S",
    tipo: "Short",
    coleccion: "Comunidad Andina",
    sexo: "Mujer",
  },

  {
    num: 15,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/kdisilence_1080x.jpg?v=1654481018",
    item: "Pantalon Cargo nude mujer",
    precio: "$178,200.00",
    descuento: "30%",
    material: "100% algodón",
    sobreModelo: "El modelo mide 1.67 y usa talla L",
    tipo: "Pantalon Cargo",
    coleccion: "Drop III",
    sexo: "Mujer",
  },

  {
    num: 16,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/bermudacomunidadazulfrente_1080x.jpg?v=1681867219",
    item: "Bermuda comunidad andina azul",
    precio: "$135,000.00",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.77 y usa talla L",
    tipo: "Bermuda",
    coleccion: "Comunidad Andina",
    sexo: "Hombre",
  },

  {
    num: 17,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/101b932148d84a726d634b7555969671_1000x.jpg?v=1645632598",
    item: "Sudadera OG Cierres",
    precio: "$80,000.00",
    descuento: "",
    material: "100% algodón",
    sobreModelo: "El modelo mide 1.83 y usa talla XL",
    tipo: "Sudadera",
    coleccion: "DRILL",
    sexo: "Hombre",
  },

  {
    num: 18,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/poms7720_1080x.jpg?v=1681964983",
    item: "Saco malicia amarillo art",
    precio: "$320,000.00",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.77 y usa talla L",
    tipo: "Saco",
    coleccion: "Comunidad Andina",
    sexo: "unisex",
  },

  {
    num: 19,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/PAsdfleto_1080x.jpg?v=1680261610",
    item: "Jogger Manzanilla Negro",
    precio: "$220,000.00",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "El modelo mide 1.73 y usa talla S",
    tipo: "Jogger",
    coleccion: "Last chance",
    sexo: "Mujer",
  },

  {
    num: 20,
    imagenProducto:
      "https://cdn.shopify.com/s/files/1/0019/1863/1981/products/dds-editable_1080x.webp?v=1672938701",
    item: "Totebag Strawberry rojo",
    precio: "$160,000.00",
    descuento: "",
    material: "100% poliester",
    sobreModelo: "Con cierre y bolsillo interno",
    tipo: "Accesorios",
    coleccion: "Fruits & Kush",
    sexo: "unisex",
  },
];
