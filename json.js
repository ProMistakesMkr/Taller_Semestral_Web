async function getData() {
    try {
      let gettingData = await fetch ('https://apimocha.com/productosjson/productos');
      let data = await gettingData.json();
      return data
    } catch (error) {
      console.log(error);
    }
  }
  
  export default getData;