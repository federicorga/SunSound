function renderAllListArrayToCard(listArrayObject) {
    // transforma la lista de array de objetos a modelo tarjeta.
    listArrayObject.forEach(object => {
        renderCardModel(object);
    })
}
async function runApp() { //inicia la aplicacion con todos sus componentes

    await ArrayJsonToOtherArray(convertJsonToArrayJson(catalogJson), listaPageWeb);
    //almacena arrayJson en un array existente (listaPageWeb)
    await renderAllListArrayToCard(listaPageWeb);
    //renderiza el array existente ya modificado en tarjetas (card) y las visualiza en el navegador.
  

  
  }

  

//-----------------Ejecutar-----------------



runApp();
